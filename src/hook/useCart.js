import React from 'react'
import { useState } from 'react';

function useCart() {

    const [cartItems , setCartItems] = useState([]);

      const addToCart = (itemId) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === itemId);
      if (exists) {
        return prev.map(item =>
          item.id === itemId ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prev, { id: itemId, count: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === itemId ? { ...item, count: item.count - 1 } : item
        )
        .filter(item => item.count > 0)
    );
  };

  return {cartItems , addToCart , removeFromCart };
    
}

export default useCart