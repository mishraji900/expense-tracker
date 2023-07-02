import React from 'react'
import Chart from '../Chart/Chart'
const ExpensesChart = (prop) => {
    const dataPoints= [
        {lable:'Jan',value:0},
        {lable:'Feb',value:0},
        {lable:'March',value:0},
        {lable:'April',value:0},
        {lable:'May',value:0},
        {lable:'June',value:0},
        {lable:'July',value:0},
        {lable:'Aug',value:0},
        {lable:'Sept',value:0},
        {lable:'Oct',value:0},
        {lable:'Nov',value:0},
        {lable:'Dec',value:0},
    ]
    for (const expenses of prop.expenses) {
        const expensesmonth = expenses.date.getMonth();
        dataPoints[expensesmonth].value+=expenses.amount;
    }
  return (
    <Chart dataPoint = {dataPoints} />
  )
}

export default ExpensesChart
