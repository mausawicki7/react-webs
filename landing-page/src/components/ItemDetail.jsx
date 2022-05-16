import {Link} from 'react-router-dom';
import "../styles/Item.css";

function ItemDetail({item}) {
    return (
      <div className="row" >
         <div className="item-image">
                <img src={`src/assets/img/thumbnail.png`} alt={item.name} />
            </div>
            <div className="item-info">
                <h2>{item.name}</h2>
                <p>
                    <span>${item.price}</span>
                    <span> - </span>
                    <span>{item.stock} en stock</span><br/>
                    <span className='item-description'>{item.description}</span>
                </p>
                <Link to="/">Volver al inicio</Link>
                </div>
      </div>

    )
  }
  
  export default ItemDetail
  