import React from "react";
import Chart from "../Chart/Chart";
const ExpensesChart = (props) => {
    const chartDataPoints = [
    { label: 'Jan', value: 0 }, 
    { label: 'Feb', value: 0 }, 
    { label: 'Mar', value: 0 }, 
    { label: 'Apr', value: 0 }, 
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 }, 
    { label: 'Aug', value: 0 }, 
    { label: 'Sept', value: 0 }, 
    { label: 'Oct', value: 0 }, 
    { label: 'Nov', value: 0 }, 
    { label: 'Dec', value: 0 },]
    for (const expenses of props.expenses) {
        const expenseMonth = expenses.date.getMonth(); // here the month start with the 0 
        chartDataPoints[expenseMonth].value += expenses.amount;
    }// this for loop is written for the getting the highest expense of the particular month. 
    return <Chart dataPoints={chartDataPoints}/>
}
export default ExpensesChart;

// for in loop make the looping on the object's properties.
// for of loop make the looping on the object's key values where the key values are not iterable and these are only used on the array 