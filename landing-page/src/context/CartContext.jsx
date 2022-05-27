import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

//Estados y funciones globales para el carrito 
const CartProvider = (props) => {
  const [cartList, setCartList] = useState([]);

/**
 * "isInCart" is a function that takes an item as an argument and returns true if the item is in the
 * cartList array.
 * @returns The function isInCart is returning a boolean value.
 */
  const isInCart = (item) => {
    return cartList.some((cartItem) => cartItem.id === item.id);
  };
  
  const addToCart = (item, qty) => {
    if(isInCart(item)){
      console.log("El producto ya se encuentra en el carrito")
      updateCart(item, qty);
    } else {
      setCartList([...cartList, {...item, qty}]);
    }
  }

/**
 * If the item in the cartList array has the same id as the item passed in, then return a new object
 * with the same properties as the cartItem, but with the qty property set to the current qty plus the
 * qty passed in.
 */
  const updateCart = (item, qty) => {
    setCartList(cartList.map((cartItem) => {
      if(cartItem.id === item.id){
        return {...cartItem, qty: cartItem.qty + qty};
      }
      return cartItem;
    }));
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

/* Passing the state (cartList) and functions to the CartContext.Provider. */
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
