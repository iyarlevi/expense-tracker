import { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  Card,
  Box,
} from "@mui/material";

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !category) return;

    addExpense({
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      date: new Date().toISOString().split("T")[0],
    });
    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <Card sx={{ padding: 2, marginBottom: 2 }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6" align="left" gutterBottom>
          Add Expense
        </Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Expense Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            label="Amount"
            type="number"
            variant="outlined"
            fullWidth
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            displayEmpty
            variant="outlined"
            fullWidth
          >
            <MenuItem value="">Select Category</MenuItem>
            <MenuItem value="Fun">Fun</MenuItem>
            <MenuItem value="Food">Food</MenuItem>
            <MenuItem value="House">House</MenuItem>
            <MenuItem value="Transport">Transport</MenuItem>
          </Select>

          <Button type="submit" variant="contained" color="primary">
            Add Expense
          </Button>
        </Box>
      </form>
    </Card>
  );
};

export default ExpenseForm;
