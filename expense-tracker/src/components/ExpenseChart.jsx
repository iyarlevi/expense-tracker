import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ExpenseChart = ({ expenses }) => {
  // Group expenses by category
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  // Convert data to Recharts format
  const chartData = Object.keys(categoryTotals).map((category, index) => ({
    name: category,
    value: categoryTotals[category],
    color: COLORS[index % COLORS.length],
  }));

  return (
    <div>
      <h2>Expense Breakdown</h2>
      {chartData.length === 0 ? (
        <p>No expenses to show</p>
      ) : (
        <PieChart width={500} height={400}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={100}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      )}
    </div>
  );
};

export default ExpenseChart;
