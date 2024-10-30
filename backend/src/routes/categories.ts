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

    // Lista produtos de uma categoria
    app.get('/:category_id/products', async (request, reply) => {
        const schema = z.object({
            category_id: z.string().uuid(),
        })

        const { category_id } = schema.parse(request.params)

        try {
            const products = await knex('products')
                .join('product_categories', 'products.id', 'product_categories.product_id')
                .where('product_categories.category_id', category_id)
                .select('products.id', 'products.title', 'products.description', 'products.price', 'products.image_url')

            return reply.status(200).send({ products })
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to fetch products for category' })
        }
    })
}
