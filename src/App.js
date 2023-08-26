import Expenses from "./components/Expenses/Expenses";

import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Chai",
    amount: 10,
    date: new Date(2020, 7, 14),
    location: "Neeladri",
  },
  {
    id: "e2",
    title: "Coffee",
    amount: 15,
    date: new Date(2021, 2, 12),
    location: "Hulimangala",
  },
  {
    id: "e3",
    title: "Lime Soda",
    amount: 25,
    date: new Date(2021, 2, 28),
    location: "Thogur",
  },
  {
    id: "e4",
    title: "Lemon Tea",
    amount: 12,
    date: new Date(2021, 5, 12),
    location: "Kormangala",
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
