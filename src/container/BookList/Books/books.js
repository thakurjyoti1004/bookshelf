import { useState } from "react";
import Book from "./book";

import { Grid } from "@mui/material";

const Books = ({ books }) => {
  const [_, setLoad] = useState(false);

  const onAddToShelf = (book) => {
    const shelf = JSON.parse(localStorage.getItem("shelf")) || [];
    localStorage.setItem("shelf", JSON.stringify([...shelf, book]));
    setLoad((prev) => !prev);
  };

  const isBookAddedToShelf = (book) => {
    const shelf = JSON.parse(localStorage.getItem("shelf")) || [];
    return shelf.some((shelfBook) => shelfBook.key === book.key);
  };

  return (
    <Grid container spacing={2}>
      {books.map((book) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Book
            key={book.key}
            book={book}
            onAddToShelf={onAddToShelf}
            isBookAddedToShelf={isBookAddedToShelf}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Books;
