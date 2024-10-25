import { FastifyInstance } from "fastify"
import { FastifyRequest } from "fastify/types/request"
import { FastifyReply } from "fastify/types/reply"

import { z } from "zod"
import crypto from 'node:crypto'

import { knex } from "../database/database"

export async function cartRoutes(app: FastifyInstance) {
    // Rota para adicionar produto ao carrinho sem autenticação
    app.post('/add', async function handler(request, reply) {
        const addToCartSchema = z.object({
            product_id: z.string().uuid(),
            quantity: z.number().int().positive(),
        })

        const { product_id, quantity } = addToCartSchema.parse(request.body)

        let sessionId = request.cookies.session_id
        let userId = null

        try {
            await request.jwtVerify()
            userId = request.user.id
        } catch (error) {
            if (!sessionId) {
                sessionId = crypto.randomUUID();
                reply.cookie('session_id', sessionId, {
                    path: '/',
                    maxAge: 1000 * 60 * 60 * 24, // 1 day
                });
            }
        }

        try {
            // Define o filtro para buscar itens do carrinho
            const cartFilter = userId ? { user_id: userId, product_id } : { session_id: sessionId, product_id }

            // Verifica se o produto já está no carrinho da sessão
            const existingCartItem = await knex('cart')
                .where(cartFilter)
                .first();

            if (existingCartItem) {
                // Atualiza a quantidade do produto no carrinho se já existir
                await knex('cart')
                    .where(cartFilter)
                    .update({
                        quantity: existingCartItem.quantity + quantity,
                        updated_at: knex.fn.now(),
                    })

                return reply.status(200).send({ message: 'Product quantity updated in cart', cartFilter })
            } else {
                // Insere um novo item no carrinho
                await knex('cart').insert({
                    id: crypto.randomUUID(),
                    session_id: userId ? null : sessionId,
                    user_id: userId || null,
                    product_id,
                    quantity,
                    created_at: knex.fn.now(),
                    updated_at: knex.fn.now(),
                })

                return reply.status(201).send({ message: 'Product added to cart', cartFilter })
            }
        } catch (error) {
            console.error('Error adding product to cart:', error);
            return reply.status(500).send({ error: 'Failed to add product to cart' })
        }
    })

    // Rota para exibir os produtos no carrinho
    app.get('/', async function handler(request: FastifyRequest, reply: FastifyReply) {
        // Verifica se o utilizador está autenticado
        let userId = null
        let sessionId = request.cookies.session_id

        // Tenta extrair o user_id do utilizador autenticado
        try {
            await request.jwtVerify()
            userId = request.user.id
        } catch (error) {
            // Se não estiver autenticado, tenta obter o session_id do cookie
            if (!sessionId) {
                return reply.status(400).send({ error: 'No session_id found. Please add items to the cart first.' });
            }
        }

        try {
            // Define o filtro para buscar itens do carrinho
            const cartFilter = userId ? { user_id: userId } : { session_id: sessionId }

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
                )

            // Calcula o total do carrinho
            const total = cartItems.reduce((acc, item) => acc + item.total_price, 0)

            return reply.status(200).send({
                cartItems,
                total,
            })
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to fetch cart items' })
        }
    })
}
