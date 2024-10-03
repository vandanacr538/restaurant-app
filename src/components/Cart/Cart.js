import React from "react";
import "./Cart.css";
import Modal from "../UI/Modal";

const Cart=()=>{
    const cartItems=[{id: '1',
        name: "Sushi",
        amount: 2,
        price: 12.99
    }];
    return (
        <Modal>
            <ul className="cart-items">
                {cartItems.map((item=>{
                    return (
                        <li>{item.name}</li>
                    )
                }))}
            </ul>
            <div className="total">
                <span>Total Amount</span>
                <span>120</span>
            </div>
            <div className="actions">
                <button className="button--alt">Close</button>
                <button className="button">Order</button>
            </div>
        </Modal>
    )
}

export default Cart;