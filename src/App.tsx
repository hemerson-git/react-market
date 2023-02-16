import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { Product } from "./components/Product";
import { CartProvider } from "./contexts/CartContext.";

const products = [
  {
    id: "1",
    name: "Product 1",
    description: "lorem ipsum dolor sit amet",
    price: 20000,
    imageURL: "https://github.com/hemerson-git.png",
  },
  {
    id: "2",
    name: "Product 2",
    description: "lorem ipsum dolor sit amet",
    price: 30000,
    imageURL: "https://github.com/hemerson-git.png",
  },
  {
    id: "3",
    name: "Product 3",
    description: "lorem ipsum dolor sit amet",
    price: 40050,
    imageURL: "https://github.com/hemerson-git.png",
  },
  {
    id: "4",
    name: "Product 4",
    description: "lorem ipsum dolor sit amet",
    price: 45000,
    imageURL: "https://github.com/hemerson-git.png",
  },
  {
    id: "5",
    name: "Product 5",
    description: "lorem ipsum dolor sit amet",
    price: 50075,
    imageURL: "https://github.com/hemerson-git.png",
  },
  {
    id: "6",
    name: "Product 6",
    description: "lorem ipsum dolor sit amet",
    price: 100,
    imageURL: "https://github.com/hemerson-git.png",
  },
];

function App() {
  return (
    <CartProvider>
      <div className="bg-zinc-900 min-h-screen text-gray-50">
        <Header />

        <main className="flex justify-center py-4">
          <div className="container px-14">
            <div className="grid grid-cols-4 gap-4">
              {products.map((product) => (
                <Product product={product} />
              ))}
            </div>
          </div>
        </main>

        <aside>
          <Cart />
        </aside>
      </div>
    </CartProvider>
  );
}

export default App;
