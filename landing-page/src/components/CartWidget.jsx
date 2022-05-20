import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; 
import "../styles/Cart.css"

function CartWidget() {
  const cartContext = useContext(CartContext);
  const { cartList } = cartContext;
  return (
    <>
    <span className="material-symbols-outlined cart-icon">shopping_bag</span>
    <span className="cart-qty">Productos en el carrito: {cartList.length}</span>
     </>
  );
 
}

export default CartWidget;
