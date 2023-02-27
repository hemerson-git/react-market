import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Minus, Plus } from "phosphor-react";

//COMPONENTS
import { useCart } from "@/hooks/cartHook";
import { getParsedPrice } from "@/utils/parsePriceToLocalePrice";
import { Button } from "@/components/Button";
import { ProductProps } from "@/components/Product";

// Services
import { API } from "@/services/api";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<ProductProps>();
  const [loading, setLoading] = useState(true);

  const {
    handleAddQuantityProduct,
    handleDecreaseQuantityProduct,
    handleSetQuantity,
    getProductQuantity,
    handleAddProduct,
  } = useCart();

  useEffect(() => {
    (async () => {
      try {
        if (id) {
          const response = await API.get(`/products/${id}`);
          const apiProduct = response.data;
          setProduct(() => apiProduct);
        }
      } catch (error) {
        console.error("Error", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading || !product) {
    return <div>Loading....</div>;
  }

  return (
    <div className="container px-14 mx-auto pt-6">
      <h2 className="font-bold text-2xl mb-4">{product?.name}</h2>

      <div className="grid md:grid-cols-2 gap-3">
        {product?.imageURL && (
          <Image
            src={product.imageURL}
            width={640}
            height={400}
            alt={product.name}
            className="rounded-md max-w-full"
          />
        )}

        <div className="flex flex-col gap-4 ">
          <div>
            <h3 className="font-bold text-xl">Description</h3>
            <p>{product?.description}</p>
          </div>

          <div>
            <h3 className="font-bold text-xl">Quantity</h3>

            <div className="flex py-2">
              <button
                type="button"
                className="rounded-l-md bg-purple-400 p-1"
                onClick={() => handleDecreaseQuantityProduct(product.id)}
              >
                <Minus size={24} className="text-gray-50" />
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
                onClick={() => handleAddQuantityProduct(product.id)}
              >
                <Plus size={24} className="text-gray-50" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl">Price</h3>
            <span>
              {getParsedPrice(
                product.price * (getProductQuantity(product.id) || 1)
              )}
            </span>
          </div>

          <Button onClick={() => handleAddProduct(product.id)}>
            Order Product
          </Button>
        </div>
      </div>
    </div>
  );
}
