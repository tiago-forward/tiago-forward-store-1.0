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
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import SectionTitleCategory from '../components/Titles/SectionTitleCategory'
import { filterOptions } from "@/constants"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiago Forward Store - Velas",
  description: "Velas aromáticas perfeitos",
};

export default async function VelasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        {children}
      </section>
    </main>
  );
}
