import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import React,{useState} from "react";
const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false)
  };
  const [isEditing, setIsEditing] = useState(false)
  const listHandlerButton =() => {setIsEditing(true)}
  const onClickCancelButton = () => {setIsEditing(false)};
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={listHandlerButton}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} 
      onCancel={onClickCancelButton} />}
    </div>
  );
};

export default NewExpense;
