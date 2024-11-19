import { BuyButton } from "./components/Button"

interface ProductcardProps {
  title: string
  description: string
  price: number
  image: string
  hoverImage: string
  discount: number
}

import VelaTiagoForward from "@/assets/Vela Tiago Forward.jpg"
import { FormatCurrency } from "@/utils/formatCurrency"
import Image from "next/image";

export default function ProductCard({ title, description, price, image, hoverImage, discount }: ProductcardProps) {
  const formatPriceValue = FormatCurrency(price)
  
  async function handleAddProductToCart() {
    "use server"
    console.log("teste")
  }

  return (
    <div key={title} className="flex flex-col">
      <div className="overflow-hidden relative aspect-square">
        <a href={`/product:${title}`}>
          <Image src={VelaTiagoForward} alt={title} className="transition-opacity duration-300 ease-in-out hover:opacity-0 w-full h-auto" />
          <Image src={VelaTiagoForward} alt={title} className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 w-full h-auto" />
        </a>
      </div>
      <div>
        <a href={`/product:${title}`} className="hover:opacity-60">
          <h3 className="font-medium">{title}</h3>
          <p className="text-neutral-700">{description}</p>
        </a>
      </div>
      <div className="flex items-center gap-2">
        {
          discount >= 1
            ? (
              <>
                <strong className="text-pink-600 font-extrabold text-2xl">{formatPriceValue}</strong>
                <span className="text-pink-600 text-xs border rounded-md bg-pink-200 px-1">{discount} OFF</span>
              </>
            )
            : (
              <>
                <strong className="font-extrabold text-2xl">{formatPriceValue}</strong>
              </>
            )
        }
      </div>
      <form action={handleAddProductToCart}>
        <BuyButton name="Comprar" />
      </form>
    </div>
  );
}
