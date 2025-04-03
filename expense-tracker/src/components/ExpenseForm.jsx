import React, { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !category) return;
    addExpense({ title, amount: parseFloat(amount), category, id: Date.now() });
    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        value={amount}
        type="number"
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="House">House</option>
        <option value="Transport">Transport</option>
        <option value="Fun">Fun</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
