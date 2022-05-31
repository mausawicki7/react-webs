//Chequear este codigo..
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";
import "../styles/Item.css";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartList, removeFromCart, totalPrice, totalItems } = useContext(CartContext);

  console.log("items totales: " + totalItems);
  if(!totalItems){
  return (
    <>
      <div className="cart-list">
        <div className="cart-item-empty">
          <h3>No hay productos en el carrito</h3>
        </div>
      </div>

    </>
  );
}
  return (
    <>
      <div className="cart-list">
        {cartList.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-total">
        <p>Total: ${totalPrice}</p>
      </div>
    </>
  );
};

export default Cart;
