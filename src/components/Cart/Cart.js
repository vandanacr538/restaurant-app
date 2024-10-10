import React, { useContext } from "react";
import "./Cart.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart=(props)=>{
    const cartCtx = useContext(CartContext);
    const totalAmount=parseFloat(cartCtx.totalAmount.toFixed(2)); // Fixing to 2 decimals

    const cartItemRemoveHandler=(id)=>{
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler=(item)=>{
        cartCtx.addItem({...item, quantity:1});
    }

    return (
        <Modal onModalClose={props.onClose}>
            <ul className="cart-items">
                {cartCtx.items.map((item)=>{
                    return (
                        <CartItem 
                            key={item.id}
                            itemName={item.name}
                            itemPrice={item.price}
                            itemQuantity={item.quantity}
                            onRemove={()=>cartItemRemoveHandler(item.id)}
                            onAdd={()=>cartItemAddHandler(item)}
                        />
                    )
                })}
            </ul>
            <div className="total">
                <span>Total Amount</span>
                <span>${totalAmount}</span>
            </div>
            <div className="actions">
                <button className="button--alt" onClick={props.onClose}>Close</button>
                <button className="button">Order</button>
            </div>
        </Modal>
    )
}

export default Cart;