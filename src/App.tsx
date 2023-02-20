import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { Product } from "./components/Product";
import { CartProvider } from "./contexts/CartContext.";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";

const products = [
  {
    id: "1",
    name: "Product 1",
    description: "lorem ipsum dolor sit amet",
    price: 20000,
    imageURL: "/src/assets/camera.jpg",
  },
  {
    id: "2",
    name: "Product 2",
    description: "lorem ipsum dolor sit amet",
    price: 30000,
    imageURL: "/src/assets/mobile.jpg",
  },
  {
    id: "3",
    name: "Product 3",
    description: "lorem ipsum dolor sit amet",
    price: 40050,
    imageURL: "/src/assets/headset.jpg",
  },
  {
    id: "4",
    name: "Product 4",
    description: "lorem ipsum dolor sit amet",
    price: 45000,
    imageURL: "/src/assets/laptop.jpg",
  },
  {
    id: "5",
    name: "Product 5",
    description: "lorem ipsum dolor sit amet",
    price: 50075,
    imageURL: "/src/assets/microfone.jpg",
  },
  {
    id: "6",
    name: "Product 6",
    description: "lorem ipsum dolor sit amet",
    price: 100000,
    imageURL: "/src/assets/console.jpg",
  },
];

function App() {
  return (
    <CartProvider>
      <div className="bg-zinc-900 min-h-screen text-gray-50">
        <Header />

        <Hero />
        <main className="flex justify-center py-4">
          <div className="container px-14">
            <h2 className="text-bold text-center text-2xl mb-6">Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 gap-y-8 mb-10">
              {products.map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </div>
          </div>
        </main>

        <aside>{/* <Cart /> */}</aside>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
