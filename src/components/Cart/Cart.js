import React, { useContext } from "react";
import "./Cart.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart=(props)=>{
    const cartCtx = useContext(CartContext);

    return (
        <Modal>
            <ul className="cart-items">
                {cartCtx.items.map((item)=>{
                    return (
                        <CartItem 
                            key={item.id}
                            itemName={item.name}
                            itemPrice={item.price}
                            itemQuantity={item.quantity}
                        />
                    )
                })}
            </ul>
            <div className="total">
                <span>Total Amount</span>
                <span>${cartCtx.totalAmount}</span>
            </div>
            <div className="actions">
                <button className="button--alt" onClick={props.onClose}>Close</button>
                <button className="button">Order</button>
            </div>
        </Modal>
    )
}

export default Cart;