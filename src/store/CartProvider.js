import React, {useReducer} from "react";
import CartContext from "./cart-context";

const defaultCart = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) =>{
  let newState
  switch (action.type){
    case 'ADD':
      newState = {items: state.items.concat(action.item), totalAmount: state.totalAmount + action.item.price * action.item.amount}
      break
    default:
      throw new Error ('sth wrong')
  }
  return newState
}

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart)

  const addItemToCartHandler = (item) => {
    dispatchCart({type: 'ADD', item: item})
  };
  const removeItemFromCartHandler = (item) => {
    dispatchCart({type: 'REMOVE', id:item.id})
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
