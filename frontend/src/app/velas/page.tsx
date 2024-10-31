"use server"

import ProductsContainer from "./components/ProductsContainer";
import { fetchProductsByCategory } from "@/services/apiRequests";

export default async function Velas() {
    try {
        const categoryId = "b0e01976-bb75-41da-afc2-5e50c1246a49";
        const products = await fetchProductsByCategory(categoryId);

        return <ProductsContainer products={products} />;
    } catch (error) {
        console.error("Erro ao renderizar a página Velas:", error);
        return <div>Erro ao carregar produtos. Tente novamente mais tarde.</div>;
    }
}
