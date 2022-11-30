import "./ExpensesItem.css";
import ExpensesDate from "./ExpensesDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpensesItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updated");
    console.log("Clicked!!!");
  };
  return (
    <Card className="expense-item ">
      <div>
        <ExpensesDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpensesItem;
