"use client"

import { BuyButton } from '@/app/components/ProductCard/components/Button';
import SectionTitleProduct from '@/app/components/Titles/SectionTitleProduct';
import { ProductDetails as ProductDetailsType } from '@/lib/productByCategory.type';
import { useState } from 'react';
import ProductDescription from './components/ProductDescription';

interface ProductDetailsProps {
  product: ProductDetailsType
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)

  const handleIncrease = () => {
    setQuantity((prev) => (prev < product.stock_quantity ? prev + 1 : prev));
  }

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Math.min(product.stock_quantity, parseInt(e.target.value) || 1));
    setQuantity(value);
  };

  if (!product) {
    return <p>Carregando...</p>
  }

  async function handleAddProductToCart() {
    console.log("AddToCart")
  }

  return (
    <>
      <div className="max-w-7xl px-2">
        <section className='grid grid-cols-12 gap-4'>
          <div className="col-span-6 overflow-hidden relative aspect-square w-full">
            <img
              src={product.image_url}
              alt={product.title}
              className="transition-opacity duration-300 ease-in-out hover:opacity-0 w-full h-auto"
            />
            <img
              src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_800/https://oliveiravelas.com/wp-content/uploads/2021/11/vela-aromatica-de-cereja-e-avela-acesa-decoracao.jpg"
              alt={product.title}
              className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 w-full h-auto"
            />
          </div>
          <div className='col-span-6 flex flex-col gap-6'>
            <SectionTitleProduct title={product.title} />
            <div className="flex items-center gap-2">
              {
                product.discount === null
                  ? (
                    <strong className="font-extrabold text-2xl">R$ {product.price},00</strong>
                  )
                  : (
                    <strong className="text-pink-600 font-extrabold text-2xl">{product.price}R$</strong>
                  )
              }
              {product.discount === null ? null : (
                <span className="text-pink-600 text-xs border rounded-md bg-pink-200 px-1">{product.discount}% OFF</span>
              )}
            </div>
            <div>
              <span className="text-neutral-700">{product.description}</span>
            </div>
            <div>
              <span>3</span>
              <span> x de </span>
              <span>R$12,66</span>
              <span> sem juros</span>
            </div>
            <div className='flex items-center gap-4'>
              <div className="flex items-center justify-start border border-black py-1 rounded-md">
                <button onClick={handleDecrease} className="px-3 text-black">-</button>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleInputChange}
                  className="w-16 text-center focus:outline-none"
                  max={product.stock_quantity}
                />
                <button onClick={handleIncrease} className="px-3 text-black">+</button>
              </div>
              <form action={handleAddProductToCart} className='flex-1'>
                <BuyButton name="Comprar" />
              </form>
            </div>
            <div>
              {
                product.stock_quantity > 0
                  ? (
                    <p className='text-zinc-700 text-sm'>Produto em estoque</p>
                  )
                  : (
                    <p className='text-zinc-500 text-sm'>Esgotado, aguardando nova reposição</p>
                  )
              }
            </div>
          </div>
        </section>
      </div>
      <ProductDescription />
    </>
  );
}
