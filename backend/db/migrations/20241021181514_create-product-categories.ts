import type { Knex } from "knex";
// Tabela de relacionamento entre produtos e categorias (relacionamento muitos para muitos).
export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('product_categories', (table) => {
        table.uuid('product_id').references('id').inTable('products').onDelete('CASCADE').notNullable()
        table.uuid('category_id').references('id').inTable('categories').onDelete('CASCADE').notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('product_categories')
}
