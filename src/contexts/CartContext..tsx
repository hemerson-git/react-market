import { Children, createContext, ReactNode, useState } from "react";
import { ProductProps } from "../components/Product";

type CartContextProps = {
  handleToggleCart: () => void;
  isCartVisible: boolean;
  handleAddProduct: (product: ProductProps) => void;
  products: ProductProps[];
};

export const CartContext = createContext({} as CartContextProps);

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [isCartVisible, setIsCartVisible] = useState(true);
  const [products, setProducts] = useState<ProductProps[]>([]);

  function handleToggleCart() {
    setIsCartVisible(!isCartVisible);
  }

  function handleAddProduct(product: ProductProps) {
    setProducts((prevItems) => [...prevItems, product]);
  }

  return (
    <CartContext.Provider
      value={{
        handleToggleCart,
        isCartVisible,
        handleAddProduct,
        products,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
