"use client"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { BuyButton } from '../components/ProductCard/components/Button'
import SectionTitleCategory from '../components/Titles/SectionTitleCategory'

import { productsDetails } from "@/constants"
import { filterOptions } from "@/constants"

export default function Velas() {
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
                        <Select defaultValue="mais-vendidos">
                            <SelectTrigger className="w-[200px]">
                                <SelectValue placeholder="Mais vendidos" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {filterOptions.map((option) => (
                                        <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
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
