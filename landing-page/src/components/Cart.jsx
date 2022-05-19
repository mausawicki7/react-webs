//Chequear este codigo..
const Cart = () => {
    const {cartList, removeFromCart} = useContext();

    return (
        <>
            <div className="cart-widget">
                <span className="material-symbols-outlined cart-icon">shopping_bag</span>
                <span className="cart-count">{cartList.length}</span>
            </div>
            <div className="cart-list">
                {cartList.map(item => (
                    <div className="cart-item" key={item.id}>
                        <div className="cart-item-img">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="cart-item-info">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>${item.price}</p>
                        </div>
                        <div className="cart-item-remove">
                            <span className="material-symbols-outlined remove-icon" onClick={() => removeFromCart(item.id)}>delete</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
