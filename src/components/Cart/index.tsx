import { useCart } from "../../hooks/cartHook";

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

      <div className="flex-1">
        {products.map((product) => (
          <div>
            <h1>{product.name}</h1>
            <span>{product.price}</span>
          </div>
        ))}
      </div>

      <footer className="text-right">
        <span className="">
          Total:{" "}
          {products.reduce((acc, product) => acc + product.price, 0).toFixed(2)}
        </span>
      </footer>
    </div>
  );
}
