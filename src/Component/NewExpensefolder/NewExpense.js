import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import React from "react";
const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
      {/* here we are making custom event Handlers using custom name */}
    </div>
  );
};

export default NewExpense;
