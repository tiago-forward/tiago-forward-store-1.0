"use client"

import { BuyButton } from "@/app/components/ProductCard/components/Button";
import { ProductByCategory } from "@/lib/productProps.type";

import SaboneteTiagoForward from "@/assets/Sabonete Tiago Forward.jpg"
import Image from "next/image";

interface Props {
  products: ProductByCategory[]
}

export default function ProductsContainer({ products }: Props) {
  async function handleAddProductToCart() {
    console.log("Produto adicionado ao carrinho!")
  }

  return (
    <div className="max-w-7xl flex flex-col md:flex-row m-auto">
      <aside className="w-28 lg:w-[200px]">
        <h2>SIDEBAR</h2>
      </aside>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-8 p-4 w-full">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col">
            <div className="overflow-hidden relative aspect-square">
              <a href={`/product/${product.id}`}>
                <Image src={SaboneteTiagoForward} alt={product.title} className="transition-opacity duration-300 ease-in-out hover:opacity-0 w-full h-auto" />
                <Image src={SaboneteTiagoForward} alt={product.title} className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 w-full h-auto" />
              </a>
            </div>
            <div>
              <a href={`/product/${product.id}`} className="hover:opacity-60">
                <h3 className="font-medium">{product.title}</h3>
                <p className="text-neutral-700">{product.description}</p>
              </a>
            </div>
            <div className="flex items-center gap-2">
              {
                product.discount === null
                  ? (
                    <strong className="font-extrabold text-2xl">{product.price}R$</strong>
                  )
                  : (
                    <strong className="text-pink-600 font-extrabold text-2xl">{product.price}R$</strong>
                  )
              }
              {product.discount === null ? null : (
                <span className="text-pink-600 text-xs border rounded-md bg-pink-200 px-1">{product.discount}% OFF</span>
              )}
            </div>

            <form action={handleAddProductToCart}>
              <BuyButton name="Comprar" />
            </form>
          </div>
        ))}
      </div>
    </div >
  );
}
