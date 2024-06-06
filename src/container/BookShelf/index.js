import { useNavigate } from "react-router-dom";
import Book from "../BookList/Books/book";

import { Box, Button, Grid } from "@mui/material";

const BookShelf = () => {
  const navigate = useNavigate();
  const getMyBooks = () => {
    return JSON.parse(localStorage.getItem("shelf"));
  };
  return (
    <Box my={4}>
      <Button
        variant="text"
        onClick={() => navigate("/")}
        sx={{ marginBottom: "20px" }}
      >
        ← Back
      </Button>
      <Grid container spacing={2}>
        {getMyBooks().length &&
          getMyBooks().map((book) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Book key={book.key} book={book} showAddBtn={false} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default BookShelf;
