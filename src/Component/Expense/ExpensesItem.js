import "./ExpensesItem.css";
import ExpensesDate from "./ExpensesDate";
import Card from "../UI/Card";
function ExpensesItem(props) {
  // this is mainly used for the data from the direct js inside the return statement
  // const date = new Date().toDateString();
  // const amount = "$298.32";
  // const title = "expense";

  // this return is mainly used when the data is in the same page, so the JS expression can be inserted inside the function here
  return (
    // <div className="expense-item">
    //   <div>{date}</div>
    //   <div className="expense-item__description">
    //     <h2>{title}</h2>
    //     <div className="expense-item__price">{amount}</div>
    //   </div>
    // </div>

    // this function mainly is used for getting the props in the
    // return (
    <Card className="expense-item ">
      <div>
        <ExpensesDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpensesItem;
