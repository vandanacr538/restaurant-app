import React, { useContext } from "react";
import "./Cart.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart=(props)=>{
    const cartCtx = useContext(CartContext);

    return (
        <Modal>
            <ul className="cart-items">
                {cartCtx.items.map((item)=>{
                    return (
                        <li key={item.id}>Name: {item.name} Price: {item.price} Quantity: {item.quantity}</li>
                    )
                })}
            </ul>
            <div className="total">
                <span>Total Amount</span>
                <span>{cartCtx.totalAmount}</span>
            </div>
            <div className="actions">
                <button className="button--alt" onClick={props.onClose}>Close</button>
                <button className="button">Order</button>
            </div>
        </Modal>
    )
}

export default Cart;