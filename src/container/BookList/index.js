import { useEffect, useState } from "react";
import Books from "./Books/books";
import Header from "./Header";

const BooksList = () => {
  const [search, setSearch] = useState("YOUR_QUERY");
  const [books, setBooks] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchBooks = async (searchText) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${searchText}&limit=10&page=1`
      );
      const data = await response.json();
      if (data.docs && data.docs.length > 0) {
        setBooks(data.docs);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const onSearchChange = (value) => {
    if (isLoading) return;
    fetchBooks(value);
    setSearch(value);
  };

  return (
    <div className="content-wrapper">
      <Header searchValue={search} onSearchChange={onSearchChange} />
      {isLoading ? (
        <div className="loader">Data Loading... 🙇</div>
      ) : (
        <Books books={books} />
      )}
    </div>
  );
};

export default BooksList;
