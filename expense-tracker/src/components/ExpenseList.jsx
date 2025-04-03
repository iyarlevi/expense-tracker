import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div>
      {expenses.length === 0 ? (
        <p>No expenses added yet</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            deleteExpense={deleteExpense}
          />
        ))
      )}
    </div>
  );
};

export default ExpenseList;
