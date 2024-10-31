import type { Knex } from "knex";
// Classificação de atributos de produtos
export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('product_attributes', (table) => {
        table.uuid('id').primary()
        table.uuid('product_id').references('id').inTable('products').notNullable()
        table.text('attribute_name').notNullable()
        table.text('attribute_value').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
        table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('product_attributes')
}
