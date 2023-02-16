import { useCart } from "../../hooks/cartHook";

export function Header() {
  const { handleToggleCart, products } = useCart();

  return (
    <header className="flex justify-center bg-purple-500">
      <div className="container px-14 flex justify-between py-6">
        <h2 className="text-bold text-xl">Logo</h2>

        <div className="flex items-center gap-6">
          <nav>
            <ul className="flex gap-2">
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/">Products</a>
              </li>

              <li>
                <a href="/">About</a>
              </li>

              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </nav>

          <button onClick={() => handleToggleCart()}>
            Cart ({products.length})
          </button>
        </div>
      </div>
    </header>
  );
}
