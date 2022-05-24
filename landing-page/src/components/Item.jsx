import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import {NavLink, Link} from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/Item.css";
import "../styles/ItemList.css";


function Item({id, name, price, stock, image, qty}) {
    const cartContext = useContext(CartContext);
    const addToCart = cartContext.addToCart; // Getting the addToCart function from the CartContext.
    const item = {id, name, price, stock, image, qty};

    return (
        <>
        <div className="my-card">
            <Link to={`/${id}`}>
            <div className="img-place">
                <img id="card-img" src={image} alt={name} />
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
                <ItemCount item={item} onAdd={addToCart} />
            </div>
        </div>
        </>
    );
}

export default Item;