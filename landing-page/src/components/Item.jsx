import ItemCount from "./ItemCount";
import "../styles/Item.css";

function Item({category, name, price, stock, initial, onAdd, onRemove}) {
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
                <ItemCount stock={10} initial={1} onAdd={onAdd} onRemove={onRemove} />
            </div>
        </div>
    );
}

export default Item;