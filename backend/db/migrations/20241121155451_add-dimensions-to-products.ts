import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('products', (table) => {
        table.decimal('weight', 10, 2).notNullable().defaultTo(0) // Peso em kg
        table.decimal('length', 10, 2).notNullable().defaultTo(0) // Comprimento em cm
        table.decimal('height', 10, 2).notNullable().defaultTo(0) // Altura em cm
        table.decimal('width', 10, 2).notNullable().defaultTo(0)  // Largura em cm
        table.decimal('diameter', 10, 2).defaultTo(0) // Diâmetro em cm (opcional)
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('products', (table) => {
        table.dropColumn('weight')
        table.dropColumn('length')
        table.dropColumn('height')
        table.dropColumn('width')
        table.dropColumn('diameter')
    })
}
