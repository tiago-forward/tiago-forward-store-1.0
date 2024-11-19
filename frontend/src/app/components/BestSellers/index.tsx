import ProductCard from "../ProductCard";
import SectionTitleHome from "../Titles/SectionTitleHome";
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
      <SectionTitleHome title="Mais Vendidos" />
      <div className="mb-8">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-7xl"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="flex aspect-square items-center justify-center p-6">
                  <ProductCard
                    title="Vela Aromática - Coco"
                    description="100mg"
                    price={38}
                    image="https://acdn.mitiendanube.com/stores/003/041/278/products/img_1844-cebbc67340998874ee17264073753448-480-0.webp"
                    hoverImage="https://acdn.mitiendanube.com/stores/002/283/856/products/bambu-7b1ef426e8aa3ac6bc17279169922402-480-0.webp"
                    discount={5}
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
