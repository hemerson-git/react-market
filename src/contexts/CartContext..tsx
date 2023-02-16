import { createContext, ReactNode, useState } from "react";
import { CartProductProps } from "../components/Cart/Product";
import { ProductProps } from "../components/Product";

type CartContextProps = {
  handleToggleCart: () => void;
  isCartVisible: boolean;
  handleAddProduct: (product: ProductProps) => void;
  products: CartProductProps[];
  handleAddQuantityProduct: (product: CartProductProps) => void;
  handleDecreaseQuantityProduct: (product: CartProductProps) => void;
  handleRemoveProduct: (id: string) => void;
};

export const CartContext = createContext({} as CartContextProps);

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [isCartVisible, setIsCartVisible] = useState(true);
  const [products, setProducts] = useState<CartProductProps[]>([]);

  function handleToggleCart() {
    setIsCartVisible(!isCartVisible);
  }

  function handleAddProduct(product: ProductProps) {
    const { id, imageURL, name, price } = product;

    const hasProduct = products.find((item) => item.id === product.id);

    if (hasProduct) {
      setProducts(
        products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      return;
    }

    const newProduct = {
      id,
      imageURL,
      name,
      price,
      quantity: 1,
    };
    setProducts((prevItems) => [...prevItems, newProduct]);
  }

  function handleAddQuantityProduct(product: CartProductProps) {
    const updatedProducts = products.map((item) => {
      if (item.id !== product.id) {
        return item;
      }

      return {
        ...item,
        quantity: item.quantity + 1,
      };
    });

    setProducts(updatedProducts);
  }

  function handleDecreaseQuantityProduct(product: CartProductProps) {
    if (product.quantity <= 0) {
      const filteredProducts = products.filter(
        (item) => item.id !== product.id
      );
      setProducts(filteredProducts);
      return;
    }

    const updatedProducts = products.map((item) => {
      if (item.id !== product.id) {
        return item;
      }

      return {
        ...item,
        quantity: item.quantity - 1,
      };
    });

    setProducts(updatedProducts);
  }

  function handleRemoveProduct(id: string) {
    const updatedProducts = products.filter((item) => item.id !== id);
    setProducts(updatedProducts);
  }

  return (
    <CartContext.Provider
      value={{
        handleToggleCart,
        isCartVisible,
        handleAddProduct,
        products,
        handleAddQuantityProduct,
        handleDecreaseQuantityProduct,
        handleRemoveProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
