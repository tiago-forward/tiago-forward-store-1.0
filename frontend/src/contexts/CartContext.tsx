"use client"

import { fetchAddToCart, fetchListCart } from "@/services/apiRequests"
import { createContext, useContext, useState, ReactNode } from "react"

interface CartItem {
  product_id: string
  quantity: number
  price: number
}

interface CartContextProps {
  cartItems: CartItem[]
  addToCart: (product_id: string, quantity: number) => void
  updateCartItems: () => void
}

const CartContext = createContext<CartContextProps | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = async (product_id: string, quantity: number) => {
    await fetchAddToCart(product_id, quantity)
    updateCartItems()
  }

  const updateCartItems = async () => {
    const cartData = await fetchListCart()
    if (cartData) {
      setCartItems(cartData.cartItems)
    }
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateCartItems }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider")
  }
  return context
}
