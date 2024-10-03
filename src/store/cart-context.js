import React from "react";

const CartContext=React.createContext({
    items: [{
        id: "1",
        name: "Sushi",
        description: "Finsest fish and veggies",
        price: 22.99,
        amount: 1
    }],
    totalAmount: 0,
    addItem: (item)=>{ },
    removeItem: (id)=>{ },
});

export default CartContext;