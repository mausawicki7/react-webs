import {Link} from 'react-router-dom';

function ItemDetail({id, name, price, stock, initial, onAdd, onRemove}) {
    return (
      <div className="row" >
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
                <Link to="/">Volver al inicio</Link>
                </div>
      </div>

    )
  }
  
  export default ItemDetail
  