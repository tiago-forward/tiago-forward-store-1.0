import ProductCard from "../ProductCard";
import SectionTitle from "../SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function BestSellers() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <SectionTitle title="Mais Vendidos" />
      <div className="mb-8">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-7xl"
        >
          <CarouselContent>
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="flex aspect-square items-center justify-center p-6">
                  <ProductCard
                    title="Vela Aromática - Coco"
                    description="100mg"
                    price="R$ 36,00"
                    image="https://acdn.mitiendanube.com/stores/002/558/862/themes/amazonas/1-img-1283306244-1687816687-7d4cedfbef3cd2358d6eadf31dcea8ea1687816687-480-0.webp?912940183"
                    hoverImage="https://acdn.mitiendanube.com/stores/002/283/856/products/bambu-7b1ef426e8aa3ac6bc17279169922402-480-0.webp"
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
