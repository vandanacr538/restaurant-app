import React from "react";
import "./Header.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header=()=>{
    return(
        <React.Fragment>
            <header className="header">
                <h1>ReactMeals</h1>
                <HeaderCartButton/>
            </header>
            <div className="header-image">
                <img src={mealsImage} alt="A table full of meals"></img>
            </div>
        </React.Fragment>
    )
}

export default Header;