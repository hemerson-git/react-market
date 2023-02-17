import { useCart } from "../../hooks/cartHook";
import { getParsedPrice } from "../../utils/parsePriceToLocalePrice";

export type ProductProps = {
  id: string;
  imageURL: string;
  name: string;
  description: string;
  price: number;
};

export type Props = {
  product: ProductProps;
};

export function Product({
  product: { description, id, imageURL, name, price },
}: Props) {
  const { handleAddProduct } = useCart();

  return (
    <div>
      <img src={imageURL} alt={name} className="h-48 object-cover" />

      <h3 className="text-bold text-lg mt-2 mb-3">{name}</h3>

      <span className="text-sm flex">{description}</span>
      <span className="">{getParsedPrice(price)}</span>

      <footer className="flex flex-col mt-4">
        <button
          className="bg-purple-500 py-2 rounded-md hover:opacity-60 transition-opacity"
          onClick={() =>
            handleAddProduct({ description, id, imageURL, name, price })
          }
        >
          Add to Card
        </button>
      </footer>
    </div>
  );
}
