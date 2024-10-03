import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx=useContext(CartContext);
  const numberOfCartItems=cartCtx.items.reduce((currentNo, item)=>{
    return currentNo+item.quantity;
  },0)

  return (
    <button className={classes.button} onClick={props.onOpen}>
      <span className={classes.carticon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
