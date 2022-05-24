import "../styles/ItemDetail.css";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import BuyButtons from "./BuyButtons";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  const [count, setCount] = useState(true);
  const cartContext = useContext(CartContext);
  const { cartList } = cartContext;

  const onAdd = (item, qty) => {
    cartContext.addToCart(item, qty);
  };

  const handleRenderCount = () => {
    setCount(false);
    }


  console.log(cartList);

  return (
    <div className="row">
      <div className="container">
        <div className="card-container">
          <input type="radio" name="colors-btn" id="color-1" checked />
          <input type="radio" name="colors-btn" id="color-2" />
          <input type="radio" name="colors-btn" id="color-3" />
          <input type="radio" name="colors-btn" id="color-4" />
          <div className="shoe-area">
            <div className="logo-div">
              <img src="src/assets/img/coder-logo.png" alt="" />
            </div>
            <div className="floating-div">
              <div className="shoe-1">
                <img src="src/assets/img/thumbnail.png" alt="red-nike" />
              </div>
            </div>
          </div>
          <div className="text-area">
            <div className="heading-area">
              <h2>{item.name}</h2>
              <h4>{item.stock} en stock</h4>
            </div>
              <h2 className="price-1">${item.price}</h2>

            <p className="paragraph-area">{item.description}</p>
            
            {count ?
            <ItemCount item={item} onAdd={onAdd} handleRenderCount={handleRenderCount} /> : 
            <BuyButtons/>}


          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
