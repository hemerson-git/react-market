import type { AppProps } from "next/app";
import "@/styles/global.css";
import { Header } from "@/components/Header";
import { CartProvider } from "@/contexts/CartContext.";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <div className="bg-zinc-900 min-h-screen text-gray-50">
        <Header />
        <Component {...pageProps} />
      </div>
    </CartProvider>
  );
}
