"use server"

import ProductsContainer from "./components/ProductsContainer"
import { fetchProductsByCategory } from "@/services/apiRequests"

export default async function Sabonetes() {
    try {
        const categoryId = "2388c6f0-332f-4e74-ae85-55551bbd5e06";
        const products = await fetchProductsByCategory(categoryId);

        return <ProductsContainer products={products} />;
    } catch (error) {
        console.error("Erro ao renderizar a página Velas:", error);
        return <div>Erro ao carregar produtos. Tente novamente mais tarde.</div>;
    }
}
