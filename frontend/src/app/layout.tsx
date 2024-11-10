import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/variables.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotificationBanner from "./components/NotificationBanner";
import { CartProvider } from "@/contexts/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tiago Forward Store",
  description: "Loja de produtos aromáticos perfeitos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} antialiased`}
      >
        <CartProvider>
          <NotificationBanner />
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
