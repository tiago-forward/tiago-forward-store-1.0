"use client"

import { useFormStatus } from "react-dom"

interface BuyButtonProps {
    name: string
}

export function BuyButton({ name }: BuyButtonProps) {
    const { pending } = useFormStatus()

    return (
        <button disabled={pending} className="rounded-md text-white bg-neutral-900 hover:opacity-80 px-4 py-1 tracking-wider w-full">
            {pending ? "Adicionando..." : name}
        </button>
    )
}
