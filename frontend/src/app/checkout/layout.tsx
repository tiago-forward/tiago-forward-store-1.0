import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dados Pessoais - Tiago Forward",
};

export default async function CheckoutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex flex-col m-auto justify-center p-4">
            <header className="w-full max-w-7xl m-auto">
                {/* Breadcrumb da página de checkout */}
            </header>
            <section>
                {children}
            </section>
        </main>
    );
}
