interface ProductcardProps {
    title: string
    description: string
    price: string
    image: string
}

export default function ProductCard({ title, description, price, image }: ProductcardProps) {
    return (
      <div className="flex flex-col w-72">
          <img src={image} alt={title} width={300} />
          <h3 className="font-medium">{title}</h3>
          <p className="text-neutral-700">{description}</p>
          <div className="flex items-center gap-2">
              <strong className="text-pink-600 font-extrabold text-2xl">{price}</strong>
              <span className="text-pink-600 text-xs border rounded-md bg-pink-200 px-1">- 5%</span>
          </div>
      </div>
  );
}
