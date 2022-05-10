import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "../styles/ItemList.css";

const products = [
  { id: 1, name: "Producto 1", price: 100, stock: 10 },
  { id: 2, name: "Producto 2", price: 200, stock: 20 },
  { id: 3, name: "Producto 3", price: 300, stock: 30 },
  { id: 4, name: "Producto 4", price: 400, stock: 40 },
  { id: 5, name: "Producto 5", price: 500, stock: 50 },
  { id: 6, name: "Producto 6", price: 600, stock: 60 },
  { id: 7, name: "Producto 7", price: 700, stock: 70 },
  { id: 8, name: "Producto 8", price: 800, stock: 80 },
];

/* A promise that will always resolve after 2 seconds. In next lessons, this will be connect to an API */
const getFetch = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Fetch data from "API" xD and set it to items state variable when component is mounted.
    getFetch.then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <div className="item-list-container"></div>
      {loading ? <div><div className="lds-ring"><div></div></div><br></br>Cargando..</div> : <ItemList items={items} />}
    </>
  );
}
export default ItemListContainer;
