import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "../styles/ItemList.css";
import { useParams } from "react-router-dom";
import { getFetch } from '../helpers/getFetch'

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  console.log(id)
  useEffect(() => {
    if (id) {
      getFetch()  
      .then(res=> setItems(res.filter(item => item.category == id )))
      .catch((err)=> console.log(err))
      .finally(()=>setLoading(false))                             
  } else {
      getFetch() 
      .then(res=> setItems(res))
      .catch((err)=> console.log(err))
      .finally(()=>setLoading(false))                 
  }

  }, []);

  return (
    <>
      <div className="item-list-grid">
      {loading ? <div><div className="lds-ring"><div></div></div><br></br>Cargando..</div> 
      : <ItemList items={items} />}
      </div>
    </>
  );
}
export default ItemListContainer;
