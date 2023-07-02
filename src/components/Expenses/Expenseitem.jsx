import React,{useState} from 'react'
import './Expenseitem.css'
import ExpenseDate from './Date'

const Expenseitem = (expense) => {
  const [title,setTitle]=useState(expense.title);

  const ChangeTitle = () => {
    setTitle("updated");
    console.log('updated')
  };

  return (
    <div className='expense-item'>
      <ExpenseDate date={expense.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>₹{expense.amount}</div>
      </div>
      {/* <button onClick={ChangeTitle}>Change Title</button>*/}
      </div>
  )
}

export default Expenseitem
