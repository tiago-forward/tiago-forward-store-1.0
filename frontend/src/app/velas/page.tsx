"use client"

import { useState } from "react"
import { ChevronsUpDown, Check } from 'lucide-react'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { BuyButton } from '../components/ProductCard/components/Button'
import SectionTitleCategory from '../components/Titles/SectionTitleCategory'

import { productsDetails } from "@/constants"
import { filterOptions } from "@/constants"

export default function Velas() {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("mais-vendidos")

    return (
        <main className="flex flex-col m-auto justify-center p-4">
            <header className="w-full max-w-7xl m-auto">
                <SectionTitleCategory title="Velas Aromáticas" />
                <div className="flex">
                    <Breadcrumb className="py-4 w-full flex justify-start">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Velas</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="flex items-center">
                        <span className="w-32">Ordenado por:</span>
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    className="w-[210px] justify-between"
                                >
                                    {/* Exibe o rótulo do valor atual selecionado */}
                                    {filterOptions.find((option) => option.value === value)?.label || "Selecione..."}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[210px] p-0">
                                <Command>
                                    <CommandList>
                                        <CommandEmpty>Nenhum item encontrado.</CommandEmpty>
                                        <CommandGroup>
                                            {filterOptions.map((option) => (
                                                <CommandItem
                                                    key={option.value}
                                                    value={option.value}
                                                    onSelect={(currentValue) => {
                                                        setValue(currentValue === value ? "" : currentValue);
                                                        setOpen(false);
                                                    }}
                                                >
                                                    {/* Indicador de seleção */}
                                                    <Check
                                                        className={
                                                            value === option.value ? "mr-2 h-4 w-4 opacity-100" : "mr-2 h-4 w-4 opacity-0"
                                                        }
                                                    />
                                                    {option.label}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </header>
            <section>
                <div className="max-w-7xl flex flex-col md:flex-row m-auto">
                    <aside className="w-28 lg:w-[200px]">
                        <h2>SIDEBAR</h2>
                    </aside>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-8 p-4 w-full">
                        {productsDetails.map((product) => (
                            <div key={product.id} className="flex flex-col">
                                <div className="overflow-hidden relative aspect-square">
                                    <a href={`/product:${product.id}`}>
                                        <img
                                            src={product.imagemUrl}
                                            alt={product.title}
                                            className="transition-opacity duration-300 ease-in-out hover:opacity-0 w-full h-auto"
                                        />
                                        <img
                                            src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_800/https://oliveiravelas.com/wp-content/uploads/2021/11/vela-aromatica-de-cereja-e-avela-acesa-decoracao.jpg"
                                            alt={product.title}
                                            className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 w-full h-auto"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href={`/product:${product.id}`} className="hover:opacity-60">
                                        <h3 className="font-medium">{product.title}</h3>
                                        <p className="text-neutral-700">{product.weight}</p>
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <strong className="text-pink-600 font-extrabold text-2xl">{product.price}</strong>
                                    <span className="text-pink-600 text-xs border rounded-md bg-pink-200 px-1">- 5% OFF</span>
                                </div>

                                <form>
                                    <BuyButton name="Comprar" />
                                </form>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
