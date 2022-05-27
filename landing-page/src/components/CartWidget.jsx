import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; 
import { Link } from "react-router-dom";
import "../styles/Cart.css"

function CartWidget() {
  const { cartList }= useContext(CartContext);
  return (
    <>
    <Link to="/cart"><span className="material-symbols-outlined cart-icon">shopping_bag</span></Link>
    <span className="cart-widget">Productos en el carrito: {cartList.length}</span>
     </>
  );
 
}

export default CartWidget;
