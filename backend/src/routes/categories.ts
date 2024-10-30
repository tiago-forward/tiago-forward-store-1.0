import { FastifyInstance } from "fastify"
import { z } from "zod"
import crypto from 'node:crypto'
import { knex } from "../database/database"

export async function categoriesRoutes(app: FastifyInstance) {
    // Listar Categorias
    app.get('/', async function handler(request, reply) {
        try {
            const categories = await knex('categories').select()

            return reply.status(200).send({
                categories
            })
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to fetch categories' })
        }
    })

    // Criar Categoria
    app.post('/', async function handler(request, reply) {
        const createCategoryBodySchema = z.object({
            name: z.string(),
        })

        const { name } = createCategoryBodySchema.parse(request.body)

        try {
            const category = await knex('categories').insert({
                id: crypto.randomUUID(),
                name,
            })

            return reply.status(201).send(category)
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to create category' });
        }
    })
}
