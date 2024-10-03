import React from "react";
import "./MealItemForm.css";

const MealItemForm=(props)=>{
    return (
        <form className="meal-form">
            <div className="meal-form-input">
                <label htmlFor={"amount_"+props.id}>Amount</label>
                <input type="number" id={"amount_"+props.id} min="1" defaultValue="1"></input>
            </div>
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm;