import { createContext, ReactNode, useEffect, useState } from "react";
import { CartProduct, CartProductProps } from "../components/Cart/Product";
import { ProductProps } from "../components/Product";

type CartContextProps = {
  handleToggleCart: () => void;
  isCartVisible: boolean;
  handleAddProduct: (product: ProductProps) => void;
  products: CartProductProps[];
  handleAddQuantityProduct: (id: string) => void;
  handleDecreaseQuantityProduct: (id: string) => void;
  handleRemoveProduct: (id: string) => void;
  handleSetQuantity: (id: string, quantity: number) => void;
  getProductQuantity: (id: string) => number;
};

export const CartContext = createContext({} as CartContextProps);

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [products, setProducts] = useState<CartProductProps[]>([]);

  useEffect(() => {
    const items = localStorage.getItem("HoMarket");

    if (items) {
      const parsedItems = JSON.parse(items) as CartProductProps[];
      setProducts(parsedItems);
    }
  }, []);

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

      localStorage.setItem("HoMarket", JSON.stringify(products));
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
    localStorage.setItem("HoMarket", JSON.stringify([...products, newProduct]));
  }

  function handleAddQuantityProduct(id: string) {
    const updatedProducts = products.map((item) => {
      if (item.id !== id) {
        return item;
      }

      return {
        ...item,
        quantity: item.quantity + 1,
      };
    });

    setProducts(updatedProducts);
    localStorage.setItem("HoMarket", JSON.stringify(updatedProducts));
  }

  function handleDecreaseQuantityProduct(id: string) {
    const product = products.find((product) => product.id === id);

    if (product && product.quantity <= 0) {
      const filteredProducts = products.filter(
        (item) => item.id !== product.id
      );
      setProducts(filteredProducts);
      return;
    }

    const updatedProducts = products.map((item) => {
      if (item.id !== id) {
        return item;
      }

      return {
        ...item,
        quantity: item.quantity - 1,
      };
    });

    setProducts(updatedProducts);
    localStorage.setItem("HoMarket", JSON.stringify(updatedProducts));
  }

  function handleRemoveProduct(id: string) {
    const updatedProducts = products.filter((item) => item.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("HoMarket", JSON.stringify(updatedProducts));
  }

  function handleSetQuantity(id: string, quantity: number) {
    // if (quantity <= 0) {
    //   handleRemoveProduct(id);
    //   return;
    // }

    const updatedProducts = products.map((item) => {
      if (item.id === id) {
        item.quantity = quantity;
      }

      return item;
    });

    setProducts(updatedProducts);
    localStorage.setItem("HoMarket", JSON.stringify(updatedProducts));
  }

  function getProductQuantity(id: string) {
    const selectedProduct = products.find((product) => product.id === id);
    return selectedProduct?.quantity || 0;
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
        handleSetQuantity,
        getProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}