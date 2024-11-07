import { api } from "@/services/api"
import { ProductByCategory, ProductDetails } from "@/lib/productByCategory.type"

export async function fetchProductsByCategory(categoryId: string): Promise<ProductByCategory[] | []> {
    try {
        const response = await api.get(`/categories/products/${categoryId}`)
        return response.data.products || []
    } catch (error) {
        console.error("Erro ao buscar produtos:", error)
        return []
    }
}

export async function fetchProductDetails(productId: string): Promise<ProductDetails | null> {
    try {
        const response = await api.get(`/products/${productId}`)
        return response.data.product || null
    } catch (error) {
        console.error("Erro ao buscar detalhes do produto:", error)
        return null
    }
}
