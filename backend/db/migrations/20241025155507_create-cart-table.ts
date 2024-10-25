import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('cart', (table) => {
        table.uuid('id').primary()
        table.uuid('session_id').nullable().index()
        table.uuid('user_id').nullable().references('id').inTable('users').onDelete('CASCADE')
        table.uuid('product_id').notNullable().references('id').inTable('products').onDelete('CASCADE')
        table.integer('quantity').notNullable().defaultTo(1)
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
        table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable()

        // Para evitar duplicidade de produtos no mesmo carrinho (session_id ou user_id)
        table.unique(['session_id', 'product_id'])
        table.unique(['user_id', 'product_id'])
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('cart')
}
