import { useState } from "react";
import Book from "./book";

import "./bookStyles.css";

const Books = ({ books }) => {
  // eslint-disable-next-line
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
    <div className="book-container">
      {books.map((book) => (
        <Book
          key={book.key}
          book={book}
          onAddToShelf={onAddToShelf}
          isBookAddedToShelf={isBookAddedToShelf}
        />
      ))}
    </div>
  );
};

export default Books;
