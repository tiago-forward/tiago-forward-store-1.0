import { FastifyInstance } from "fastify"
import { FastifyRequest } from "fastify/types/request"
import { FastifyReply } from "fastify/types/reply"

import { z } from "zod"
import crypto from 'node:crypto'

import { knex } from "../database/database"

import { authenticate } from "../middlewares/auth"

export async function cartRoutes(app: FastifyInstance) {
    // Rota para adicionar produto ao carrinho sem autenticação
    app.post('/add', async function handler(request, reply) {
        const addToCartSchema = z.object({
            product_id: z.string().uuid(),
            quantity: z.number().int().positive(),
            session_id: z.string().optional(),
        })

        const { product_id, quantity, session_id } = addToCartSchema.parse(request.body)

        let newSessionId = session_id

        if (!session_id) {
            newSessionId = crypto.randomUUID()
            reply.header('Set-Cookie', `session_id=${newSessionId}; Path=/; HttpOnly;`)
        }

        try {
            // Verifica se o produto já está no carrinho da sessão
            const existingCartItem = await knex('cart')
                .where({ session_id: newSessionId, product_id })
                .first();

            if (existingCartItem) {
                // Atualiza a quantidade do produto no carrinho se já existir
                await knex('cart')
                    .where({ session_id: newSessionId, product_id })
                    .update({
                        quantity: existingCartItem.quantity + quantity,
                        updated_at: knex.fn.now(),
                    })

                return reply.status(200).send({ message: 'Product quantity updated in cart', session_id: newSessionId })
            } else {
                // Insere um novo item no carrinho
                await knex('cart').insert({
                    id: crypto.randomUUID(),
                    session_id: newSessionId,
                    product_id,
                    quantity,
                    created_at: knex.fn.now(),
                    updated_at: knex.fn.now(),
                });

                return reply.status(201).send({ message: 'Product added to cart', session_id: newSessionId });
            }
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to add product to cart' });
        }
    })

    // Rota para exibir os produtos no carrinho
    app.get('/', async function handler(request: FastifyRequest, reply: FastifyReply) {
        // Verifica se o utilizador está autenticado
        let userId = null;
        let sessionId = null;

        // Tenta extrair o user_id do utilizador autenticado
        try {
            await request.jwtVerify();
            userId = request.user.id;
        } catch (err) {
            // Se não estiver autenticado, tenta obter o session_id do cookie
            sessionId = request.cookies.session_id;
            if (!sessionId) {
                return reply.status(400).send({ error: 'No session_id found. Please add items to the cart first.' });
            }
        }

        try {
            // Define o filtro para buscar itens do carrinho
            const cartFilter = userId ? { user_id: userId } : { session_id: sessionId };

            // Busca os itens do carrinho com base no filtro
            const cartItems = await knex('cart')
                .join('products', 'cart.product_id', 'products.id')
                .where(cartFilter)
                .select(
                    'cart.id',
                    'products.title',
                    'products.price',
                    'cart.quantity',
                    knex.raw('products.price * cart.quantity as total_price')
                );

            // Calcula o total do carrinho
            const total = cartItems.reduce((acc, item) => acc + item.total_price, 0);

            return reply.status(200).send({
                cartItems,
                total,
            });
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to fetch cart items' });
        }
    });
}
