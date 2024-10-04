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
            return total; 
        });
    }

    const removeItemFromCartHandler=(id)=>{
        const itemToRemove=items.find(item=>item.id===id);
        if(itemToRemove){
            if(itemToRemove.quantity>1){
                itemToRemove.quantity--;
                console.log(items);
                setItems([...items]);
            }
            else{
                setItems((prevItems)=>{
                    return prevItems.filter((item)=>item.id!==itemToRemove.id);
                })
            }
            setTotalAmount((prevAmount)=>{
                const total=prevAmount-itemToRemove.price*1;
                return total;
            });
        }
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