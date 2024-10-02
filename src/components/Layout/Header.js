import React from "react";
import "./Header.css";
import mealsImage from "../../assets/meals.jpg";

const Header=()=>{
    return(
        <React.Fragment>
            <header className="header">
                <h1>ReactMeals</h1>
                <button>Cart 0</button>
            </header>
            <div className="header-image">
                <img src={mealsImage} alt="A table full of meals"></img>
            </div>
        </React.Fragment>
    )
}

export default Header;