import React from "react";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";

const MealItem=(props)=>{
    return(
        <li className="meal-item">
            <div className="meal-details">
                <h3 className="meal-name">{props.name}</h3>
                <div className="meal-description">{props.description}</div>
                <div className="meal-price">${props.price}</div>
            </div>
            <MealItemForm/>
        </li>
    )
}

export default MealItem;