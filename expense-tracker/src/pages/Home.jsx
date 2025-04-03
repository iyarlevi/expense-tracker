import { useState, useEffect } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

const Home = () => {
  const [expenses, setExpenses] = useState(() => {
    // Load stored expenses when the app starts
    return JSON.parse(localStorage.getItem("expenses")) || [];
  });

  useEffect(() => {
    // Save expenses whenever they change
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => setExpenses([...expenses, expense]);
  const deleteExpense = (id) =>
    setExpenses(expenses.filter((exp) => exp.id !== id));

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
};

export default Home;
