import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <Card sx={{ padding: 2, marginBottom: 2 }}>
      <Typography variant="h5" gutterBottom>
        Your Expenses
      </Typography>

      {expenses.length === 0 ? (
        <Typography color="textSecondary">No expenses yet.</Typography>
      ) : (
        <List>
          {expenses.map((expense) => (
            <ListItem
              key={expense.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  color="error"
                  onClick={() => deleteExpense(expense.id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary={`${expense.title} - $${expense.amount}`}
                secondary={expense.category}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Card>
  );
};

export default ExpenseList;
