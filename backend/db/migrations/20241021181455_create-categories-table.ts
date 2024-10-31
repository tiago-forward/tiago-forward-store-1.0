// Atualizado - falta autenticação
import type { Knex } from "knex";
// Classificação de produtos por categorias (como diferentes tipos de velas).
export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('categories', (table) => {
        table.uuid('id').primary()
        table.text('name').unique().notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
        table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('categories')
}
