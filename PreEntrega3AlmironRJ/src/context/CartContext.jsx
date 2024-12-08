import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  
  const addToCart = (item, quantity) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      
      setCart([...cart, { ...item, quantity }]);
    }
  };

  
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  
  const clearCart = () => {
    setCart([]);
  };

  
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  
  const getCartQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  
  const getCartItems = () => cart;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartQuantity,
        getCartItems, 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook para usar el contexto del carrito en cualquier componente
export const useCart = () => {
  return useContext(CartContext);
};
