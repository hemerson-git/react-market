import { useCart } from "../../hooks/cartHook";
import { getParsedPrice } from "../../utils/parsePriceToLocalePrice";
import { CartProduct } from "./Product";

export function Cart() {
  const { isCartVisible, handleToggleCart, products } = useCart();

  console.log(isCartVisible);

  return (
    <div
      className={`w-full flex flex-col max-w-md pt-5 px-6 bg-zinc-700 z-50 top-0 bottom-0 fixed transition-all ${
        isCartVisible ? "right-0" : "left-full"
      }`}
    >
      <header className="relative">
        <h2 className="text-center text-lg">Cart</h2>

        <button onClick={handleToggleCart} className="absolute top-0 right-4">
          X
        </button>
      </header>

      <div
        className={`flex-1 ${
          !products.length ? "flex items-center justify-center" : ""
        }`}
      >
        {products.length ? (
          <>
            {products.map((product) => (
              <CartProduct product={product} key={product.id} />
            ))}
          </>
        ) : (
          <div className="text-gray-50">
            <span>Empty Cart</span>
          </div>
        )}
      </div>

      <footer className="text-right">
        <span className="">
          Total:{" "}
          {getParsedPrice(
            products.reduce(
              (acc, product) => acc + product.price * product.quantity,
              0
            )
          )}
        </span>
      </footer>
    </div>
  );
}
