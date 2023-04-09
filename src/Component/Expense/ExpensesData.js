import ExpenseList from './ExpensesList';
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesData.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesChart from './ExpensesChart';
const ExpensesData = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  }); 
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filterExpenses}/>
        <ExpenseList item={filterExpenses}/>
      </Card>
    </div>
  );
};

export default ExpensesData;
