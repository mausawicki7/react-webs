import React, { useState } from "react";
import "../styles/Button.css";
import "../styles/ItemList.css";

function ItemCount({ item, stock, onAdd }) {
  const [count, setCount] = useState(1);

  if (count > item.stock) {
    setCount(item.stock);
  }

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleRemove = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  function addItem() {
    onAdd(item, count);
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
        <button className="btn" onClick={addItem}>
          {" "}
          Agregar al carrito{" "}
        </button>
        <br/><br/>
      </div>
    </>
  );
}

export default ItemCount;
