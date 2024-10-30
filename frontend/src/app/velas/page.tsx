"use server"

import ProductsContainer from "./components/ProductsContainer";
import { fetchProductsByCategory } from "@/services/apiRequests";

export default async function Velas() {
    try {
        const categoryId = "e7ee220e-4c13-4660-9026-3d19573e085b";
        const products = await fetchProductsByCategory(categoryId);

        return <ProductsContainer products={products} />;
    } catch (error) {
        console.error("Erro ao renderizar a página Velas:", error);
        return <div>Erro ao carregar produtos. Tente novamente mais tarde.</div>;
    }
}
