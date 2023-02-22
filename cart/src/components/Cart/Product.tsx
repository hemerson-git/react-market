import { Minus, Plus, Trash } from "phosphor-react";
import { useCart } from "../../hooks/cartHook";
import { getParsedPrice } from "../../utils/parsePriceToLocalePrice";

export type CartProductProps = {
  id: string;
  imageURL: string;
  name: string;
  price: number;
  quantity: number;
};

type Props = {
  product: CartProductProps;
};

export function CartProduct({ product }: Props) {
  const {
    handleAddQuantityProduct,
    handleDecreaseQuantityProduct,
    handleRemoveProduct,
    handleSetQuantity,
  } = useCart();

  return (
    <div className="flex border-b border-gray-500 py-4 gap-3 items-center">
      <img
        src={product.imageURL}
        alt={product.name}
        className="h-14 w-14 rounded-md object-cover"
      />

      <div>
        <div>
          <h3 className="text-lg font-bold">{product.name}</h3>
          <span>{getParsedPrice(product.price)}</span>
        </div>

        <div className="flex py-2">
          <button
            type="button"
            className="rounded-l-md bg-purple-400 p-1"
            onClick={() => handleAddQuantityProduct(product)}
          >
            <Plus size={24} className="text-gray-50" />
          </button>

          <input
            type="number"
            value={product.quantity}
            onChange={(e) =>
              handleSetQuantity(product.id, Number(e.target.value))
            }
            className="text-zinc-900 text-center"
          />

          <button
            type="button"
            className="rounded-r-md bg-purple-400 p-1"
            onClick={() => handleDecreaseQuantityProduct(product)}
          >
            <Minus size={24} className="text-gray-50" />
          </button>
        </div>

        <button
          className="text-red-500 flex ml-auto items-center gap-2 hover:underline underline-offset-2"
          onClick={() => handleRemoveProduct(product.id)}
        >
          <Trash size={18} className="text-red-500" />
          remove
        </button>
      </div>
    </div>
  );
}
