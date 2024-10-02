import React from "react";
import "./MealItem.css";

const MealItem=(props)=>{
    return(
        <li className="meal-item">
            <div className="meal-name">
                <h3>{props.name}</h3>
            </div>
            <div className="meal-description">{props.description}</div>
            <div className="meal-price">${props.price}</div>
        </li>
    )
}

export default MealItem;