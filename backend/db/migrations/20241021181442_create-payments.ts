import type { Knex } from "knex";
// Detalhes de cada pagamento realizado.
export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('payments', (table) => {
        table.uuid('id').primary()
        table.uuid('order_id').references('id').inTable('orders').notNullable()
        table.decimal('amount').notNullable()
        table.text('payment_method').notNullable()
        table.enu('status', ['pending', 'completed', 'failed'])
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('payments')
}
