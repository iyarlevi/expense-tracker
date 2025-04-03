import { useState, useEffect } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ExpenseChart from "../components/ExpenseChart";
import {
  Container,
  Typography,
  Box,
  Card,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const Home = () => {
  const [expenses, setExpenses] = useState(
    () => JSON.parse(localStorage.getItem("expenses")) || []
  );
  const [filterCategory, setFilterCategory] = useState("");
  const [filterDate, setFilterDate] = useState("");

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => setExpenses([...expenses, expense]);
  const deleteExpense = (id) =>
    setExpenses(expenses.filter((exp) => exp.id !== id));

  const filteredExpenses = expenses.filter((exp) => {
    return (
      (!filterCategory || exp.category === filterCategory) &&
      (!filterDate || exp.date === filterDate)
    );
  });

  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom>
        Expense Tracker
      </Typography>

      {/* Filters */}
      <Card sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h6" align="left" gutterBottom>
          Filter
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            displayEmpty
            variant="outlined"
            sx={{ width: "48%" }}
          >
            <MenuItem value="">All Category</MenuItem>
            <MenuItem value="Fun">Fun</MenuItem>
            <MenuItem value="Food">Food</MenuItem>
            <MenuItem value="House">House</MenuItem>
            <MenuItem value="Transport">Transport</MenuItem>
          </Select>

          <TextField
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            variant="outlined"
            sx={{ width: "48%" }}
          />
        </Box>
      </Card>

      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={filteredExpenses} deleteExpense={deleteExpense} />
      <ExpenseChart expenses={expenses} />
    </Container>
  );
};

export default Home;
