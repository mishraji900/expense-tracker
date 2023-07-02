import React, { useState } from 'react';
import ExpenseItem from './Expenseitem';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2023');
  const [filterMonth, setFilterMonth] = useState('');
  

  const filterChangeHandler = (selectedFilters) => {
    setFilterYear(selectedFilters.year);
    setFilterMonth(selectedFilters.month);
    
  };

  const filteredExpenses = props.items.filter((expense) => {
    const expenseYear = expense.date.getFullYear().toString();
    const expenseMonth = (expense.date.getMonth()).toString().padStart(2, '0');
    if (filterYear && expenseYear !== filterYear) {
      return false;
    }
    if (filterMonth && expenseMonth !== filterMonth) {
      return false;
    }

    return true;
  });

  return (
    <div className='expenses'>
      <ExpenseFilter selectedFilters={{ year: filterYear, month: filterMonth }} onChangeFilter={filterChangeHandler} />
      <ExpensesChart  expenses={filteredExpenses}/>
      {filteredExpenses.length === 0 ? (
        <p>No expenses found for the selected filters.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))
      )}
    </div>
  );
};

export default Expenses;
