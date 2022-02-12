import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals"
import Cart from "../src/components/Cart/Cart"


function App() {
  const [displayCart, setDisplayCart] = useState(false)

  const displayCartHandler =() =>{
    setDisplayCart(true)
  }
  const hideCartHandler =() =>{
    setDisplayCart(false)
  }
  return (
    <Fragment>
      {displayCart && <Cart onHideCart = {hideCartHandler}/>}
      <Header onDisplayCart = {displayCartHandler} />
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
