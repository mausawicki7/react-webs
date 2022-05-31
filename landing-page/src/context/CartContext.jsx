import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

//Estados y funciones globales para el carrito
const CartProvider = (props) => {
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  /**
   * "isInCart" is a function that takes an item as an argument and returns true if the item is in the
   * cartList array.
   * @returns The function isInCart is returning a boolean value.
   */
  const isInCart = (item) => {
    return cartList.some((cartItem) => cartItem.id === item.id);
  };

  const addToCart = (item, qty) => {
    if (isInCart(item)) {
      let i = cartList.findIndex((cartItem) => cartItem.id === item.id);
      cartList[i].qty += qty;
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, { ...item, qty }]);
    }
  };

  /**
   * If the item in the cartList array has the same id as the item passed in, then return a new object
   * with the same properties as the cartItem, but with the qty property set to the current qty plus the
   * qty passed in.
   */
  const updateCart = (item, qty) => {
    setCartList(
      cartList.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, qty: cartItem.qty + qty };
        }
        return cartItem;
      })
    );
    setTotalPrice(
      cartList.map((cartItem) => {
        if (cartItem.id === item.id) {
          return cartItem.qty * cartItem.price;
        }
        return cartItem;
      })
    );
    setTotalItems(
      cartList.map((cartItem) => {
        if (cartItem.id === item.id) {
          return cartItem.qty;
        }
        return cartItem;
      })
    );
    console.log("Total items: " + totalItems);
    console.log("Total price: " + totalPrice);
  };

  /**
   * Remove the item from the cartList array if the item's id does not match the id of the item passed
   * into the function.
   */
  const removeFromCart = (item) => {
    const newCartList = cartList.filter((cartItem) => cartItem.id !== item.id);
    setCartList(newCartList);
  };

  return (
    /* Passing the state (cartList) and functions to the CartContext.Provider. */
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeFromCart,
        updateCart,
        totalPrice,
        totalItems,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
