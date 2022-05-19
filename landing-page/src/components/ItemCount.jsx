import { useState, useContext } from "react";
import "../styles/Button.css";
import "../styles/ItemList.css";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  if (count > stock) {
    setCount(stock);
  }

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleRemove = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // const {addToCart, cartList} = useContext(cartContext);
  // const onAdd = (count) => {
  //   addToCart(item, count);
  // };

  function discountFromStock(count) {
    if (stock > 0) {
      setCount(stock - count);
    } else {
      console.log("No hay stock disponible");
    }
  }

  return (
    <>
      <div className="item-count">
        <button className="plusminus" onClick={handleRemove}>
          -
        </button>
        <span>{count}</span>
        <button className="plusminus" onClick={handleAdd}>
          +
        </button>
        <br/><br/>
        <button className="btn" onClick={onAdd}>
          {" "}
          Agregar al carrito{" "}
        </button>
        <br/><br/>
      </div>
    </>
  );
}

export default ItemCount;
