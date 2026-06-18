import { useState } from "react";
import { ShopContext } from "./shopContext";

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === itemId);
      if (exists) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, count: item.count + 1 } : item,
        );
      }
      return [...prev, { id: itemId, count: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === itemId ? { ...item, count: item.count - 1 } : item,
        )
        .filter((item) => item.count > 0),
    );
  };

  const contextValue = { cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
