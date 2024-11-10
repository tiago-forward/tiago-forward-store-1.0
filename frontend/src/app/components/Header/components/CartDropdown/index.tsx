// components/CartDropdown.tsx
"use client";

import { useCart } from "@/contexts/CartContext";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useEffect } from "react";

export default function CartDropdown() {
  const { cartItems, updateCartItems } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    updateCartItems()
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center text-start gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart">
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
        <div className="flex flex-col">
          <span className="text-sm">Carrinho ({itemCount})</span>
          <strong className="text-md">{cartTotal.toFixed(2)} R$</strong>
        </div>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}
