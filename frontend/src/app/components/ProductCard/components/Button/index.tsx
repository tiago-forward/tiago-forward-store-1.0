"use client"

import { useFormStatus } from "react-dom"
import { useToast } from "@/hooks/use-toast"

interface BuyButtonProps {
    name: string
}

export function BuyButton({ name }: BuyButtonProps) {
    const { pending } = useFormStatus()
    const { toast } = useToast()

    return (
        <button 
            disabled={pending} 
            className="rounded-md text-white bg-neutral-900 hover:opacity-80 px-4 py-1 tracking-wider w-full" 
            onClick={() => {
                toast({
                    title: "Produto adicionado ao carrinho.",
                    style: { color: "#D81B60", borderColor: "#D81B60"}
                })
            }}>
            {pending ? "Adicionando..." : name}
        </button>
    )
}
