import React, {useContext} from "react"
import styles from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"
import CartContext from "../../store/cart-context"

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)
  const numOfCartItems = cartCtx.items.reduce((quantity, item) => {return quantity + item.amount}, 0)

  return(
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton