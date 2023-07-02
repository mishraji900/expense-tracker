import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
  const yearFilterHandler = (event) => {
    props.onChangeFilter({
      ...props.selectedFilters,
      year: event.target.value,
    });
  };

  const monthFilterHandler = (event) => {
    props.onChangeFilter({
      ...props.selectedFilters,
      month: event.target.value,
    });
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by:</label>

        <select value={props.selectedFilters.year} onChange={yearFilterHandler}>
          <option value=''>--Year--</option>
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
          <option value='2023'>2023</option>
          <option value='2024'>2024</option>
          <option value='2025'>2025</option>
        </select>

        <select value={props.selectedFilters.month} onChange={monthFilterHandler}>
          <option value=''>--Month--</option>
          <option value='00'>January</option>
          <option value='01'>February</option>
          <option value='02'>March</option>
          <option value='03'>April</option>
          <option value='04'>May</option>
          <option value='05'>June</option>
          <option value='06'>July</option>
          <option value='07'>August</option>
          <option value='08'>September</option>
          <option value='09'>October</option>
          <option value='10'>November</option>
          <option value='11'>December</option>
          {/* Add more months as needed */}
        </select>

        
      </div>
    </div>
  );
};

export default ExpenseFilter;
