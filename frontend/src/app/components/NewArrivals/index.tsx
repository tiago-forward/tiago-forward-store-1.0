import ProductCard from "../ProductCard";
import SectionTitleHome from "../Titles/SectionTitleHome";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { fetchRecentProducts } from "@/services/apiRequests";
import { ProductDetails } from "@/lib/productProps.type";

export default async function NewArrivals() {
  const recentProducts = await fetchRecentProducts()

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <SectionTitleHome title="Novos Produtos" />
      <div className="mb-8">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-7xl"
        >
          <CarouselContent>
            {recentProducts.map((product: ProductDetails) => (
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4">
                <div className="flex aspect-square items-center justify-center p-6">
                  <ProductCard
                    title={product.title}
                    description={product.description}
                    price={`${product.price}`}
                    image="https://acdn.mitiendanube.com/stores/003/041/278/products/img_1844-cebbc67340998874ee17264073753448-480-0.webp"
                    hoverImage="https://acdn.mitiendanube.com/stores/002/283/856/products/bambu-7b1ef426e8aa3ac6bc17279169922402-480-0.webp"
                    discount={product.discount}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
