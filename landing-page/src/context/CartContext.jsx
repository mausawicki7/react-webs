import React, { createContext, useState } from "react";

const CartContext = createContext([]);
//Estados y funciones globales para el carrito 
const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  
  function addToCart(item) {
    const newCartList = [...cartList, item];
    setCartList(newCartList);
  }

  const removeFromCart = (item) => {
    const newCartList = cartList.filter(cartItem => cartItem.id !== item.id);
    setCartList(newCartList);
    };
  
  return (
    <CartContext.Provider value={{ 
        cartList 
    }}>
        {children}
    </CartContext.Provider>
  );
};

export {CartContext, CartContextProvider};
