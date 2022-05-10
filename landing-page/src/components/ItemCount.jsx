import { useState } from "react";
import "../styles/Button.css";

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

  function addToCart() {
    console.log(`${count} productos añadidos al carrito.`);
    console.log("A continuación se ejecutaría función onAdd.");
    //onAdd(count);
    discountFromStock(count);
    console.log(count)
  }

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
        <br></br>
        <button className="button button1" onClick={addToCart}>
          {" "}
          Agregar al carrito{" "}
        </button>
      </div>
    </>
  );
}

export default ItemCount;
