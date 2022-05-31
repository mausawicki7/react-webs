import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "../styles/ItemList.css";
import { useParams } from "react-router-dom";
import { getFetch } from "../helpers/getFetch";
import { getFirestore, doc, getDoc, getDocs, query, where, collection } from "firebase/firestore";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  //get data from firebase for itemDetailContainer
  // useEffect(() => {
  //   const db = getFirestore();
  //   const dbQuery = doc(db, "items", '1Da5dv2CVPgF1r5FTWKp');
  //   getDoc(dbQuery).then((resp) => {
  //     // setProducto(doc.data());
  //     ({id: resp.id, ...resp.data()})
  //     setLoading(false);
  //   });
  // }, []);
  // console.log(producto);

  // //get data from firebase for itemListContainer
  // useEffect(() => {
  //   const db = getFirestore();
  //   const queryCollection = collection(db, "items");
  //   const queryCollectionFilter = query(queryCollection, where("category", "==", "categoria3")); //Filter the items by category
  //   getDocs(queryCollectionFilter).then((resp) => {
  //     setItems(resp.docs.map((item) => ({ id: item.id, ...item.data() })));
  //     setLoading(false);
  //   });
  // }, []);

  //get hardcoded data from getFetch
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

  }, [id]);




  return (
    <>
      <div className="item-list-grid">
        {loading ? (
          <div>
            <div className="lds-ring">
              <div></div>
            </div>
            <br></br>Cargando..
          </div>
        ) : (
          <ItemList items={items} />
        )}
      </div>
    </>
  );
}
export default ItemListContainer;
