import React from "react";
import "./MealItemForm.css";

const MealItemForm=()=>{
    return (
        <form className="meal-form">
            <div className="meal-form-input">
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" min="1" defaultValue="1"></input>
            </div>
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm;