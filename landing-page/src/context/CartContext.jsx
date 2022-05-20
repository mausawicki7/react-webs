import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

//Estados y funciones globales para el carrito 
const CartProvider = (props) => {
  const [cartList, setCartList] = useState([]);
  
/**
 * AddToCart() takes two arguments, item and qty, and adds them to the cartList array.
 */
  function addToCart(item, qty) {
    const newItem = [...item, qty];
    setCartList([...cartList, newItem]);
  }

/**
 * Remove the item from the cartList array if the item's id does not match the id of the item passed
 * into the function.
 */
  const removeFromCart = (item) => {
    const newCartList = cartList.filter(cartItem => cartItem.id !== item.id);
    setCartList(newCartList);
    };
  
  return (

    <CartContext.Provider value={{ 
        cartList,
        addToCart,
        removeFromCart
    }}>
        {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
