import Image from "next/image";
import { useRouter } from "next/router";
import { useCart } from "@/hooks/cartHook";
import { Minus, Plus } from "phosphor-react";
import { getParsedPrice } from "@/utils/parsePriceToLocalePrice";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const {
    handleAddQuantityProduct,
    handleDecreaseQuantityProduct,
    handleSetQuantity,
    getProductQuantity,
  } = useCart();

  const product = {
    id: "1",
    name: "Product 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto delectus excepturi nisi non necessitatibus" +
      "officiis harum vero tenetur vel autem blanditiis quas expedita est ad, quod dolor. Suscipit, est doloribus?",
    price: 20000,
    imageURL: "/camera.jpg",
  };

  return (
    <div className="container px-14 mx-auto pt-6">
      <h2 className="font-bold text-2xl mb-4">{product.name}</h2>

      <div className="grid md:grid-cols-2 gap-3">
        <Image
          src={product.imageURL}
          width={640}
          height={400}
          alt={product.name}
          className="rounded-md max-w-full"
        />

        <div className="flex flex-col gap-4 ">
          <div>
            <h3 className="font-bold text-xl">Description</h3>
            <p>{product.description}</p>
          </div>

          <div>
            <h3 className="font-bold text-xl">Quantity</h3>

            <div className="flex py-2">
              <button
                type="button"
                className="rounded-l-md bg-purple-400 p-1"
                onClick={() => handleAddQuantityProduct(product.id)}
              >
                <Plus size={24} className="text-gray-50" />
              </button>

              <input
                type="number"
                value={getProductQuantity(product.id)}
                onChange={(e) =>
                  handleSetQuantity(product.id, Number(e.target.value))
                }
                className="text-zinc-900 text-center"
              />

              <button
                type="button"
                className="rounded-r-md bg-purple-400 p-1"
                onClick={() => handleDecreaseQuantityProduct(product.id)}
              >
                <Minus size={24} className="text-gray-50" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl">Price</h3>
            <span>
              {getParsedPrice(product.price * getProductQuantity(product.id))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
