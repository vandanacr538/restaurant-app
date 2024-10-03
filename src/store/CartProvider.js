import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider=(props)=>{
    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const addItemToCartHandler=(item)=>{
        setItems((prevItems)=>{
            return [...prevItems, item];
        });
        setTotalAmount((prevAmount)=>{
            return prevAmount+item.price*item.amount;
        });
        console.log(cartContext);
    }

    const removeItemFromCartHandler=(id)=>{
        setItems((prevItems)=>{
            return [prevItems.filter((item)=>item.id!==id)];
        });
        const itemToRemove=items.find(item=>item.id===id);
        setTotalAmount((prevAmount)=>{
            return prevAmount-itemToRemove.price*itemToRemove.amount;
        });
    }

    const cartContext={
        items: items,
        totalAmount: totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;