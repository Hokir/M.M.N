import { useContext, createContext, useState } from "react";
import { ShopContextEffect } from "./Hooks/UseEffect";
import { Status } from "./Hooks/Status";

const Context = createContext({});

export function useShopContext() {
  return useContext(Context);
}

export function ShopContext({ children }) {
  const [status, changeStatus] = Status();
  const [items, setItems] = ShopContextEffect();
  const [cartItems, setCartItems] = useState([]);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseItemQuantity(id) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      }

      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });
    });
  }

  function decreaseItemQuantity(id) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      }

      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }

        return item;
      });
    });
  }

  function removeFromCart(id) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  const values = {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
    cartItems,
    cartQuantity,
    items,
    setItems,
    status,
    changeStatus,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}
