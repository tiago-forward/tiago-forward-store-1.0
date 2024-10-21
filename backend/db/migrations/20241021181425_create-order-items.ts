import type { Knex } from "knex";
// Armazena cada produto que faz parte de uma encomenda.
export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('order_items', (table) => {
        table.uuid('id').primary()
        table.uuid('order_id').references('id').inTable('orders').onDelete('CASCADE').notNullable()
        table.uuid('product_id').references('id').inTable('products').onDelete('CASCADE').notNullable()
        table.integer('quantity').notNullable()
        table.decimal('unit_price', 10, 2).notNullable()
        table.decimal('total_price', 10, 2).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('order_items')
}
