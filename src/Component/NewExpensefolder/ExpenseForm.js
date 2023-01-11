import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prevState) => {                 // if we are depending on the previous for the update please the function to specify the action.
    //   return {
    //     //...userInput,
    //     //enteredTitle: event.target.value,
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
    // console.log(event.target.value); // this is to check whether is it working or not.
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  const [enteredTitle, setEnteredTitle] = useState(""); //instead of used 3 usestate for the same component make one object and store inside the object
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const submitHandler = (event) => {
    // the event.preventDefault()  method is used to prevent the request to server i.e is the local host 3000, why are we using in this project is that we have to stop the localhost to stop reloading
    event.preventDefault();

    //the expenseData function is the user input that are stored in some value
    //for example the title is a variable where the user input is stored
    const expenseData = {
      title: enteredTitle, // the enteredTitle will be the "" , i.e an empty value or string
      date: new Date(enteredDate),
      amount: enteredAmount,
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };
  return (
    // onsubmit is the default javascript event. here we use the onclick button for the submit button but the it's better to use for the onsubmit listerner
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2100-01-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

// if we want to pass the data from child to parent we have to create a function in the parent in the
