import { X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import { CartProduct } from "./Product";
import { useCart } from "../../hooks/cartHook";
import { getParsedPrice } from "../../utils/parsePriceToLocalePrice";

export function Cart() {
  const { isCartVisible, products } = useCart();

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="w-full h-screen backdrop-blur-3xl fixed top-0 left-0" />

      <Dialog.Content
        className={`w-full flex flex-col max-w-md pt-5 px-6 pb-8 bg-zinc-700 text-gray-100 z-auto 
        top-0 bottom-0 fixed overflow-auto transition-all ${
          isCartVisible ? "right-0" : "left-full"
        }`}
      >
        <header className="relative">
          <Dialog.Title className="text-center text-lg">Cart</Dialog.Title>

          <Dialog.Close className="absolute top-0 right-4">
            <X size={24} className="text-gray-50" />
          </Dialog.Close>
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

        <footer className="text-right mt-4">
          <span className="font-bold">
            Total:{" "}
            {getParsedPrice(
              products.reduce(
                (acc, product) => acc + product.price * product.quantity,
                0
              )
            )}
          </span>
        </footer>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
