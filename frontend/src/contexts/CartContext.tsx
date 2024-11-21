"use client"

import { calculateCartDimensions } from "@/utils/calculateCartDimensions"
import { fetchAddToCart, fetchListCart } from "@/services/apiRequests"
import { createContext, useContext, useState, ReactNode, useMemo } from "react"

interface CartItem {
  product_id: string
  title: string
  price: number
  quantity: number
  total_price: number
  weight: number
  length: number
  width: number
  height: number
  diameter: number
}

interface CartDimensions {
  totalWeight: number
  maxLength: number
  maxWidth: number
  maxHeight: number
  maxDiameter: number
}

interface CartContextProps {
  cartItems: CartItem[]
  cartTotal: number
  itemCount: number
  cartDimensions: CartDimensions | null
  addToCart: (product_id: string, quantity: number) => void
  updateCartItems: () => void
}

const CartContext = createContext<CartContextProps | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartTotal, setCartTotal] = useState<number>(0)

  const addToCart = async (product_id: string, quantity: number) => {
    await fetchAddToCart(product_id, quantity)
    updateCartItems()
  }

  const updateCartItems = async () => {
    const cartData = await fetchListCart()
    if (cartData) {
      setCartItems(cartData.cartItems)
      setCartTotal(cartData.total)
    }
  }

  // Calcula a quantidade total de itens no carrinho
  const itemCount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems])

    // Calcula as dimensões totais do carrinho
    const cartDimensions = useMemo(() => {
      if (cartItems.length === 0) {
        return null;
      }
      return calculateCartDimensions(cartItems);
    }, [cartItems])

  return (
    <CartContext.Provider value={{ cartItems, cartTotal, itemCount, cartDimensions, addToCart, updateCartItems }}>
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
