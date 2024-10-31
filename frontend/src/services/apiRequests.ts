import { api } from "@/services/api"
import { ProductByCategory } from "@/lib/productByCategory.type"

export async function fetchProductsByCategory(categoryId: string): Promise<ProductByCategory[] | []> {
    try {
        const response = await api.get(`/categories/products/${categoryId}`)
        return response.data.products || []
    } catch (error) {
        console.error("Erro ao buscar produtos:", error)
        return []
    }
}
