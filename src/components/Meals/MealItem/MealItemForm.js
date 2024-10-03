import React, { useContext, useState } from "react";
import "./MealItemForm.css";
import CartContext from "../../../store/cart-context";

const MealItemForm=(props)=>{
    const cartCtx = useContext(CartContext);
    const [itemQuantity, setItemQuantity] = useState(1);

    const itemAmountChangeHandler=(event)=>{
        setItemQuantity(event.target.value);
    }
    const addItemToCartHandler=(event)=>{
        event.preventDefault();
        cartCtx.addItem({...props.item, quantity: Number(itemQuantity)});
    }
    return (
        <form className="meal-form">
            <div className="meal-form-input">
                <label htmlFor={"amount_"+props.id}>Amount</label>
                <input type="number" id={"amount_"+props.id} min="1"
                    value={itemQuantity}
                    onChange={itemAmountChangeHandler}></input>
            </div>
            <button onClick={addItemToCartHandler}>+ Add</button>
        </form>
    )
}

export default MealItemForm;