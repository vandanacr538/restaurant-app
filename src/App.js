import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsOpen, setCartIsOpen]= useState(false);

  const closeCartHandler=()=>{
    setCartIsOpen(false);
  }
  const openCartHandler=()=>{
    setCartIsOpen(true);
  }
  return (
    <CartProvider>
      {cartIsOpen && <Cart onClose={closeCartHandler}/>}
      <Header onOpen={openCartHandler}/>
      <Meals />
    </CartProvider>
  );
}

export default App;
