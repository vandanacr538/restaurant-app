import React from "react";
import "./CartItem.css";

const CartItem = (props) => {
  return (
    <li className="cart-item">
      <div>
        <h2>{props.itemName}</h2>
        <div className="ct-summary">
          <span className="ct-price">${props.itemPrice}</span>
          <span className="ct-quantity">x {props.itemQuantity}</span>
        </div>
      </div>
      <div className="cart-item-actions">
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
