import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Card, Typography } from "@mui/material";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ExpenseChart = ({ expenses }) => {
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const chartData = Object.keys(categoryTotals).map((category, index) => ({
    name: category,
    value: categoryTotals[category],
    color: COLORS[index % COLORS.length],
  }));

  return (
    <Card sx={{ padding: 2, marginTop: 2 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Expense Breakdown
      </Typography>

      {chartData.length === 0 ? (
        <Typography color="textSecondary" align="center">
          No expenses to show
        </Typography>
      ) : (
        <PieChart width={800} height={300}>
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
    </Card>
  );
};

export default ExpenseChart;
