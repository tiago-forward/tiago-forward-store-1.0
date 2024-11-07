import { fetchProductDetails } from "@/services/apiRequests"
import type { Metadata } from "next"

interface MetadataParams {
    id: string
}

export async function generateProductMetadata({ id }: MetadataParams): Promise<Metadata> {
    const product = await fetchProductDetails(id)

    if (product) {
        return {
            title: `Vela Aromática - ${product.title}`,
            description: `Confira as incríveis velas aromáticas, como a ${product.title}!`,
        }
    } else {
        return {
            title: "Produto não encontrado",
            description: "Detalhes do produto não disponíveis.",
        }
    }
}
