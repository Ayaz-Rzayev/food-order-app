import React,{useRef} from "react"
import styles from "./MealItemForm.module.css"
import Input from "../../UI/Input"

const MealItemForm = (props) => {
  const amountInputRef = useRef()
  


  const submitHandler =(event)=>{
    event.preventDefault()
    const enteredAmount = amountInputRef.current.value
    const enteredAmountNum = +enteredAmount
    if(enteredAmount.trim().length === 0 || enteredAmountNum < 1)
    {
      console.log("amount is invalid")
      return
    }
    props.onAddToCart(enteredAmountNum)
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label = "Amount"
        input = {{
          id: 'amount',
          type: 'number',
          min: '1',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button>+Add</button>
    </form>
  )
}

export default MealItemForm