import { useState } from "react";
import { ShopContext } from "./shopContext";

export const ShopContextProvider = (props) => {


  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  const saveCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  const addToCart = (itemId) => {
    const exists = cartItems.find(item => item.id === itemId);
    if (exists) {
      saveCart(cartItems.map(item =>
        item.id === itemId ? { ...item, count: item.count + 1 } : item
      ));
    } else {
      saveCart([...cartItems, { id: itemId, count: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    saveCart(
      cartItems
        .map(item =>
          item.id === itemId ? { ...item, count: item.count - 1 } : item
        )
        .filter(item => item.count > 0)
    );
  };

  const contextValue = { cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};