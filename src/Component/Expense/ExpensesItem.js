import "./ExpensesItem.css";
import ExpensesDate from "./ExpensesDate";
import Card from "../UI/Card";
// import { useState } from "react";

const ExpensesItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle("Updated");
  //   console.log("Clicked!!!");
  // };
  console.log(props.date);
  return (
    <li>
    <Card className="expense-item ">
      <div>
        <ExpensesDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
    </li>
  );
};

export default ExpensesItem;
