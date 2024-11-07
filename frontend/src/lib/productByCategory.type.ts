export interface ProductByCategory {
    id: string,
    title: string
    description: string
    price: number
    discount: number
    image_url: string
    category_id: string
}

export interface ProductDetails {
    id: string,
    title: string
    description: string
    price: number
    stock_quantity: number
    discount: number
    category_id: string
    image_url: string
}
