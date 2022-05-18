import ItemCount from "./ItemCount";
import {NavLink, Link} from "react-router-dom";
import "../styles/Item.css";
import "../styles/ItemList.css";


function Item({id, name, price, stock, initial, onAdd, onRemove}) {
    return (
        <>
        <div className="my-card">
            <Link to={`/${id}`}>
            <div className="img-place">
                <img id="card-img" src={`src/assets/img/thumbnail.png`} alt={name} />
            </div>
            </Link>
            <div className="item-info">
                <h2>{name}</h2>
                <p>
                    <span>${price}</span>
                    <span> - </span>
                    <span>{stock} en stock</span>
                </p>
                
                <NavLink className="nav-link" to={`/${id}`}>Ver detalle</NavLink>
                <br/>
                <ItemCount stock={10} initial={1} onAdd={onAdd} onRemove={onRemove} />
            </div>
        </div>
        </>
    );
}

export default Item;