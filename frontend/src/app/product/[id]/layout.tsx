import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { fetchProductDetails } from "@/services/apiRequests";
import ProductDetails from "./page";

import type { Metadata } from "next";
import { generateProductMetadata } from "@/utils/metadataUtils";

interface ProductLayoutProps {
    children: React.ReactNode;
    params: { id: string };
}

export async function generateMetadata({ params }: ProductLayoutProps): Promise<Metadata> {
    return generateProductMetadata({ id: params.id });
}

export default async function ProductLayout({
    children,
    params,
}: ProductLayoutProps) {
    const product = await fetchProductDetails(params.id);

    if (!product) {
        return <p>Produto não encontrado</p>;
    }

    console.log(product.stock_quantity)
    return (
        <main className="flex flex-col m-auto justify-center p-4">
            <header className="w-full max-w-7xl m-auto">
                <div className="flex">
                    <Breadcrumb className="py-4 w-full flex justify-start">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/velas">Velas</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{product.title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            <div className="m-auto">
                <ProductDetails product={product} />
            </div>
        </main>
    );
}
