import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = () => {
  const { cartList, removeFromCart, totalPrice } = useContext(CartContext);
  return (
    <>
      <div className="cart-list">
        {cartList.map((item) => (
          <div className="my-card" key={item.id}>
            <div className="cart-item-img">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <div>{item.description}</div>
              <div>${item.price}</div>
              <p>Cantidad: {item.qty}</p>
            </div>
            <div className="cart-item-remove">
              <button className="btn-danger btn-sm mb-3">
                <span
                  className="material-symbols-outlined remove-icon"
                  onClick={() => removeFromCart(item)}
                >
                  delete
                </span>
              </button>
              <p>{`Total: ${totalPrice}`}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartItem;
