import ItemCount from "./ItemCount";
import {Link} from "react-router-dom";
import "../styles/Item.css";

function Item({id, name, price, stock, initial, onAdd, onRemove}) {
    return (
        <div className="item">
            <div className="item-image">
                <img src={`src/assets/img/thumbnail.png`} alt={name} />
            </div>
            <div className="item-info">
                <h2>{name}</h2>
                <p>
                    <span>${price}</span>
                    <span> - </span>
                    <span>{stock} en stock</span>
                </p>
                
                <Link to={`/${id}`}>Detalle del producto</Link>
                <br/><br/>
                <ItemCount stock={10} initial={1} onAdd={onAdd} onRemove={onRemove} />
            </div>
        </div>
    );
}

export default Item;