import React from "react";
import './ExpensesList.css';
import ExpensesItem from "./ExpensesItem";
const ExpenseList = (props) => {
    if (props.item.length === 0) {
        return <h2 className="expenses-list__fallback">No items found </h2>
    }
    return <ul className="expenses-list">{props.item.map((expense) => (
        <ExpensesItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}</ul>
}
export default ExpenseList;

//This is the component where we make rendering the list items of the particular year.