import { Knex } from 'knex'

declare module 'knex/types/tables' {
    export interface Tables {
        users
        products: {
            id: string
            title: string
            description: string
            price: number
            stock_quantity: number
            image_url: string
            created_at: string
            updated_at: string
        }
        orders
        order_items
        payments
        categories
        product_categories
    }
}
