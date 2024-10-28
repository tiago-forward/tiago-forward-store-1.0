import { BuyButton } from "./components/Button"

interface ProductcardProps {
    title: string
    description: string
    price: string
    image: string
    hoverImage: string
}

export default function ProductCard({ title, description, price, image, hoverImage }: ProductcardProps) {
    async function handleAddProductToCart() {
        "use server"
        // Função apara adicionar o produto no carrinho!
        console.log("teste")
    }

    return (
      <div className="flex flex-col w-72">
        <div className="overflow-hidden relative">
          <a href="/product:id">
            <img
              src={image}
              alt={title}
              width={300}
              className="transition-opacity duration-300 ease-in-out hover:opacity-0"
            />
            <img
              src={hoverImage}
              alt={title}
              width={300}
              className="absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
            />
          </a>
        </div>
          <div>
            <a href="/product:id" className="hover:opacity-60">
              <h3 className="font-medium">{title}</h3>
              <p className="text-neutral-700">{description}</p>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <strong className="text-pink-600 font-extrabold text-2xl">{price}</strong>
            <span className="text-pink-600 text-xs border rounded-md bg-pink-200 px-1">- 5%</span>
          </div>

          <form action={handleAddProductToCart}>
            <BuyButton name="Comprar" />
          </form>
      </div>
  );
}
