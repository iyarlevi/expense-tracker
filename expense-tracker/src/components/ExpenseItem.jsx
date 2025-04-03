import React from "react";

const ExpenseItem = ({ expense, deleteExpense }) => {
  return (
    <div>
      <p>
        {expense.title} - {expense.amount} {expense.category}
      </p>
      <button onClick={() => deleteExpense(expense.id)}>Delete</button>
    </div>
  );
};

export default ExpenseItem;
