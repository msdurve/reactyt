import ExpensesItem from "./ExpensesItem";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesData.css";
import Card from "../UI/Card";
import { useState } from "react";
const ExpensesData = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.expenses.map((e) => (
          <ExpensesItem title={e.title} amount={e.amount} date={e.date} />
        ))}
      </Card>
    </div>
  );
};

export default ExpensesData;
