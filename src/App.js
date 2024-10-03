import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsOpen, setCartIsOpen]= useState(false);

  const closeCartHandler=()=>{
    setCartIsOpen(false);
  }
  const openCartHandler=()=>{
    setCartIsOpen(true);
  }
  return (
    <React.Fragment>
      {cartIsOpen && <Cart onClose={closeCartHandler}/>}
      <Header onOpen={openCartHandler}/>
      <Meals />
    </React.Fragment>
  );
}

export default App;
