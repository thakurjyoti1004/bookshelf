import { useNavigate } from "react-router-dom";
import Book from "../BookList/Books/book";

import "../BookList/Books/bookStyles.css";
import "./bookShelf.css";

const BookShelf = () => {
  const navigate = useNavigate();

  const getMyBooks = () => {
    return JSON.parse(localStorage.getItem("shelf")) || [];
  };

  return (
    <div className="shelf">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back
      </button>
      <div className="book-container">
        {getMyBooks().length ? (
          getMyBooks().map((book) => (
            <Book key={book.key} book={book} showAddBtn={false} />
          ))
        ) : (
          <h4>No books found</h4>
        )}
      </div>
    </div>
  );
};

export default BookShelf;
