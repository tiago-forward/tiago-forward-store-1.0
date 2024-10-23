import { FastifyInstance } from "fastify"
import { z } from "zod"
import crypto from 'node:crypto'
import { knex } from "../database"

export async function productsRoutes(app: FastifyInstance) {
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
            reply.status(500).send({ error: 'Failed to fetch products' });
        }
    })
}
