import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css"

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2>YOUR CART IS EMPTY</h2>;
  }

  return (
    <div className="cart-container">
      <h1>YOUR CART</h1>
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.image}/>
            <div className="cart-item-info">
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}>
              Remove
            </button>
            </div>
            
          </div>  
        ))}
    </div>
  );
};

export default Cart;