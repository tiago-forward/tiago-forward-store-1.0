import { FastifyInstance } from "fastify"
import { z } from "zod"
import crypto from 'node:crypto'
import { knex } from "../database/database"

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

    // Listar Produtos Recentes
    app.get('/recent', async function handler(request, reply) {
        try {
            const recentProducts = await knex('products')
            .select('id', 'title', 'description', 'price', 'discount', 'image_url', 'created_at')
            .orderBy('created_at', 'desc')
            .limit(8)

            return reply.status(200).send({
                products: recentProducts
            })
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to fetch recent products' })
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
            discount: z.number().optional(),
            image_url: z.string(),
            category_id: z.string(),
            weight: z.number(),
            length: z.number(),
            height: z.number(),
            width: z.number(),
            diameter: z.number().optional()
        })

        const { title, description, price, stock_quantity, discount, image_url, category_id, weight, length, height, width, diameter } = createProductBodySchema.parse(request.body)

        try {
            const product = await knex('products').insert({
                id: crypto.randomUUID(),
                title,
                description,
                price,
                stock_quantity,
                discount,
                image_url,
                category_id,
                weight,
                length,
                height,
                width,
                diameter
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

    // Atualizar Produto
    app.put('/:product_id', async function handler(request, reply) {
        const updateProductParamsSchema = z.object({
            product_id: z.string().uuid(),
        })

        const updateProductBodySchema = z.object({
            title: z.string().optional(),
            description: z.string().optional(),
            price: z.number().optional(),
            stock_quantity: z.number().optional(),
            discount: z.number().optional(),
            image_url: z.string().optional(),
            category_id: z.string().optional()
        })

        const { product_id } = updateProductParamsSchema.parse(request.params)

        const { title, description, price, stock_quantity, discount, image_url, category_id } = updateProductBodySchema.parse(request.body)

        try {
            const product = await knex('products').where('id', product_id).update({
                title,
                description,
                price,
                stock_quantity,
                discount,
                image_url,
                category_id,
            })

            return reply.status(200).send({
                message: 'Product updated successfully',
                product
            })
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to update product' })
        }
    })
}
  