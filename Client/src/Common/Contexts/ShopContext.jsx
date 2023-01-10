import { useContext, createContext } from "react";
import { ShopContextEffect } from "./Hooks/UseEffect";
import { useLocalStorage } from "./Hooks/LocalStorage";
import { Status } from "@Helpers/Status";

// Creating context
const Context = createContext({});

export function useShopContext() {
  return useContext(Context);
}

export function ShopContext({ children }) {
  const [cartProducts, setCartProducts] = useLocalStorage("shopping_cart", []);
  const [products, setProducts] = ShopContextEffect();
  const [viewCart, changeViewCart] = Status();

  const cartQuantity = cartProducts.reduce(
    (quantity, product) => product.quantity + quantity,
    0
  );

  function getProductQuantity(id) {
    return cartProducts.find((product) => product.id === id)?.quantity || 0;
  }

  function increaseProductQuantity(id) {
    setCartProducts((currProducts) => {
      if (currProducts.find((product) => product.id === id) == null) {
        return [...currProducts, { id, quantity: 1 }];
      }

      return currProducts.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        }

        return product;
      });
    });
  }

  function decreaseProductQuantity(id) {
    setCartProducts((currProducts) => {
      if (currProducts.find((product) => product.id === id)?.quantity === 1) {
        return currProducts.filter((item) => product.id !== id);
      }

      return currProducts.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity - 1 };
        }

        return product;
      });
    });
  }

  function removeFromCart(id) {
    setCartProducts((currProduct) => {
      return currProduct.filter((product) => product.id !== id);
    });
  }

  const values = {
    products,
    cartProducts,
    cartQuantity,
    getProductQuantity,
    increaseProductQuantity,
    decreaseProductQuantity,
    removeFromCart,
    viewCart,
    changeViewCart,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}
