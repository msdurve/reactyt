import "./ExpensesDate.css";
function ExpensesDate(props) {
  const year = props.date.getFullYear();
  const month = props.date.getMonth();
  const day = props.date.getDate();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expenses-date__year">{year}</div>
      <div className="expenses-date__day">{day}</div>
    </div>
  );
}

export default ExpensesDate;
