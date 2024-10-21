import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('orders', (table) => {
        table.uuid('id').primary()
        table.uuid('user_id').references('id').inTable('users').notNullable()
        table.decimal('total_price', 10, 2).notNullable()
        table.enu('status', ['pending', 'paid', 'shipped', 'delivered', 'cancelled']).notNullable()
        table.enu('payment_status', ['pending', 'paid', 'failed']).notNullable()
        table.text('shipping_address').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
        table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('orders')
}
