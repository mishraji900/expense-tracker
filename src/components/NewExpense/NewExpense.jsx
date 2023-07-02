import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const [show,setShow] = useState();
  var buttonText = show ? "Cancle" : "Add New Expense";
  const toggleShow = () =>{
    setShow(!show)
  }
  const saveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData)
  }
  return (
    <div className='new-expense'>
      {show && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>}
      
      <button type='toggle' onClick={toggleShow}>{buttonText}</button>
    </div>
  )
}

export default NewExpense
