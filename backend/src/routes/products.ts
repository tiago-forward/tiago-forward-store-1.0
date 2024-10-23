import { FastifyInstance } from "fastify"
import { z } from "zod"
import crypto from 'node:crypto'
import { knex } from "../database"

export async function productsRoutes(app: FastifyInstance) {
    // Listar Produtos
    app.get('/', async function handler(request, reply) {
        try {
            const products = await knex('products').select()

            return reply.status(200).send({
                products
            })
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to fetch products' })
        }
    })

    // Buscar Produto por ID
    app.get('/:product_id', async function handler(request, reply) {
        const getProductParamsSchema = z.object({
            product_id: z.string().uuid(),
        })

        const { product_id } = getProductParamsSchema.parse(request.params)

        try {
            const product = await knex('products').where('id', product_id).first()

            return reply.status(200).send({
                product
            })
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to fetch product' })
        }
    })

    // Criar Produto
    app.post('/', async function handler(request, reply) {
        const createProductBodySchema = z.object({
            title: z.string(),
            description: z.string(),
            price: z.number(),
            stock_quantity: z.number(),
            image_url: z.string(),
        })

        const { title, description, price, stock_quantity, image_url } = createProductBodySchema.parse(request.body)

        try {
            const product = await knex('products').insert({
                id: crypto.randomUUID(),
                title,
                description,
                price,
                stock_quantity,
                image_url,
            })

            return reply.status(201).send(product)
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to create product' });
        }
    })

    // Deletar Produto
    app.delete('/:product_id', async function handler(request, reply) {
        const deleteProductParamsSchema = z.object({
            product_id: z.string().uuid(),
        })

        const { product_id } = deleteProductParamsSchema.parse(request.params)

        try {
            const product = await knex('products').where('id', product_id).delete()

            return reply.status(204).send({
                product
            })
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to delete product' });
        }
    })
}
