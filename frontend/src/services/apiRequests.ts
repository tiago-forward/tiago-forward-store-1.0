import { api } from "@/services/api"
import { ProductByCategory, ProductDetails } from "@/lib/productProps.type"

export async function fetchProductsByCategory(categoryId: string): Promise<ProductByCategory[] | []> {
    try {
        const response = await api.get(`/categories/products/${categoryId}`)
        return response.data.products || []
    } catch (error) {
        console.error("Erro ao buscar produtos:", error)
        return []
    }
}

export async function fetchRecentProducts() {
    try {
        const response = await api.get('/products/recent');
        return response.data.products || []
    } catch (error) {
        console.error("Erro ao buscar produtos recentes:", error);
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

export async function fetchAddToCart(productId: string, quantity: number) {
    try {
        const response = await api.post(`/cart/add`, {
            product_id: productId,
            quantity: quantity
        })
        console.log('Produto adicionado ao carrinho:', response.data)
    } catch (error) {
        console.log("Erro ao adicionar produto ao carrinho:", error)
    }
}

export async function fetchListCart() {
    try {
        // Faz o GET na rota do carrinho, garantindo que cookies como `session_id` sejam enviados
        const response = await api.get('/cart')

        // Retorna os itens do carrinho e o total do backend
        return response.data
    } catch (error) {
        console.error("Erro ao buscar itens do carrinho:", error)
        return null
    }
}