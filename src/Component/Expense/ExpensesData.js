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
  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found</p>;
  if (filterExpenses.length > 0) {
    expensesContent = filterExpenses.map((expense) => (
      <ExpensesItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default ExpensesData;
