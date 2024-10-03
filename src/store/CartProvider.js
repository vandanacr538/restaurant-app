import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider=(props)=>{
    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const addItemToCartHandler=(newItem)=>{
        setItems((prevItems)=>{
            const itemExist=prevItems.find((item)=> item.id === newItem.id);
            if(itemExist){
                return prevItems.map((item)=>{
                    if(item.id===newItem.id){
                        return {...item, quantity: item.quantity + newItem.quantity};
                    }
                    return item;
                })
            }
            else{
                return [...prevItems, newItem];
            }
        });
        setTotalAmount((prevAmount)=>{
            const total=prevAmount+(newItem.price*newItem.quantity);
            return parseFloat(total.toFixed(2)); // Fixing to 2 decimals
        });
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