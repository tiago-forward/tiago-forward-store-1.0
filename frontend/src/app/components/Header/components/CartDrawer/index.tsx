"use client"

import { useCart } from "@/contexts/CartContext"
import { MoveLeft, X } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => boolean
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cartItems, cartTotal } = useCart()

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Carrinho de Compras</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>
        <div className="p-4 overflow-y-auto h-[calc(100%-180px)]">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.product_id} className="flex gap-4 leading-4 mb-4">
                <img src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FVela%20Tiago%20Forward.2d298cdb.jpg&w=828&q=75" alt={item.title} className="w-16 h-16 rounded" />
                <div className="flex-1">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-gray-600 text-sm">Quantidade: {item.quantity}</p>
                  <p className="text-gray-600 text-sm">Preço: R${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Seu carrinho está vazio.</p>
          )}
        </div>
        <div className="p-4 border-t">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Total:</span>
            <span className="font-semibold">R$ {cartTotal.toFixed(2)}</span>
          </div>
          <div className="flex flex-col justify-center">
            <button
              className="w-full bg-pink-500 text-white py-2 rounded"
              onClick={() => alert("Finalizando compra")}
            >
              Finalizar Compra
            </button>
            <button className="p-4 text-sm flex items-center justify-center gap-2" onClick={onClose}>
              <MoveLeft />
              Continuar Comprando
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
