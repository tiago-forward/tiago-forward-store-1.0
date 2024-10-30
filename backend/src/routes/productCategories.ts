import { FastifyInstance } from "fastify";
import { z } from "zod";
import { knex } from "../database/database";

export async function productCategoriesRoutes(app: FastifyInstance) {
    // Associa uma categoria a um produto
    app.post('/', async (request, reply) => {
        const schema = z.object({
            product_id: z.string().uuid(),
            category_id: z.string().uuid(),
        })

        const { product_id, category_id } = schema.parse(request.body)

        try {
            await knex('product_categories').insert({ 
                product_id,
                category_id,
            })

            return reply.status(201).send({ message: 'Category added to product successfully' })
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to associate category with product' })
        }
    })

    // Remove uma categoria de um produto
    app.delete('/', async (request, reply) => {
        const schema = z.object({
            product_id: z.string().uuid(),
            category_id: z.string().uuid(),
        })

        const { product_id, category_id } = schema.parse(request.body)

        try {
            await knex('product_categories')
                .where({ product_id, category_id })
                .delete()

            return reply.status(200).send({ message: 'Category removed from product successfully' })
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to remove category from product' })
        }
    })

    // Lista categorias de um produto
    // app.get('/products/:product_id/categories', async (request, reply) => {
    //     const schema = z.object({
    //         product_id: z.string().uuid(),
    //     });

    //     const { product_id } = schema.parse(request.params);

    //     try {
    //         const categories = await knex('categories')
    //             .join('product_categories', 'categories.id', 'product_categories.category_id')
    //             .where('product_categories.product_id', product_id)
    //             .select('categories.id', 'categories.name');

    //         return reply.status(200).send({ categories });
    //     } catch (error) {
    //         return reply.status(500).send({ error: 'Failed to fetch categories for product' });
    //     }
    // });

    // Lista produtos de uma categoria
    // app.get('/categories/:category_id/products', async (request, reply) => {
    //     const schema = z.object({
    //         category_id: z.string().uuid(),
    //     });

    //     const { category_id } = schema.parse(request.params);

    //     try {
    //         const products = await knex('products')
    //             .join('product_categories', 'products.id', 'product_categories.product_id')
    //             .where('product_categories.category_id', category_id)
    //             .select('products.id', 'products.title', 'products.description', 'products.price', 'products.image_url');

    //         return reply.status(200).send({ products });
    //     } catch (error) {
    //         return reply.status(500).send({ error: 'Failed to fetch products for category' });
    //     }
    // });
}
