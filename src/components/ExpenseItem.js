import "./ExpenseItem.css";
function ExpenseItem(props) {
  //const expenseDate = new Date(2022, 11, 16);
  //const expenseTitle = "Car Insurance";
  //const expenseAmount = 2000;
  return (
    <div className="expense-item">
      <div>{props.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
