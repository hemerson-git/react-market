import type { AppProps } from "next/app";
import "@/styles/global.css";
import { Header } from "@/components/Header";
import { CartProvider } from "@/contexts/CartContext.";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <CartProvider>
      <SessionProvider session={session}>
        <div className="bg-zinc-900 min-h-screen text-gray-50">
          <Header />
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </CartProvider>
  );
}
