import { useState, useEffect } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

const Home = () => {
  const [filterCategory, setFilterCategory] = useState("");
  const [expenses, setExpenses] = useState(
    // Load the list from local storage
    () => JSON.parse(localStorage.getItem("expenses")) || []
  );

  // Save the list from local storage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => setExpenses([...expenses, expense]);
  const deleteExpense = (id) =>
    setExpenses(expenses.filter((exp) => exp.id !== id));

  // Filter the list base on the user filter input
  const filteredExpenses = expenses.filter((exp) => {
    return !filterCategory || exp.category === filterCategory;
  });

  return (
    <div>
      <h1>Expense Tracker</h1>

      <div className="filter-section">
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>

      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={filteredExpenses} deleteExpense={deleteExpense} />
    </div>
  );
};

export default Home;
