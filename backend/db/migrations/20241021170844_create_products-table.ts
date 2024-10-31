// Atualizado - falta autenticação
import { Knex } from "knex";
// Armazena detalhes dos produtos (como as velas) que estarão à venda.
export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('products', (table) => {
        table.uuid('id').primary()
        table.text('title').notNullable()
        table.text('description')
        table.decimal('price', 10, 2).notNullable()
        table.integer('stock_quantity').notNullable()
        table.decimal('discount', 10, 2)
        table.uuid('category_id').references('id').inTable('categories')
        table.text('image_url')
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
        table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable()
    })
} // Oque a migration vai fazer no banco de dados (Altera)

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('products')
} // O método que descreve oque deu errado (Remove oque foi alterado)
