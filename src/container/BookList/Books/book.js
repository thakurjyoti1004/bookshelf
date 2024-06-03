import "./bookStyles.css";

const Book = ({
  book,
  onAddToShelf,
  isBookAddedToShelf,
  showAddBtn = true,
}) => {
  const getTitle = (title) => {
    if (title) {
      if (title.length >= 40) {
        return title.substring(0, 40);
      }
      return title;
    }
    return "Harry Potter";
  };

  return (
    <div key={book.key} className="book">
      <img
        src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
        alt={book.title}
        className="book-cover"
      />
      <div className="book-details">
        <h4>{getTitle(book.title)}</h4>
        <p>{book.author_name && book.author_name.join(", ")}</p>
        <p>{book.first_publish_year}</p>
        {showAddBtn &&
          (isBookAddedToShelf(book) ? (
            <button className="add-btn added-btn">Added to Shelf</button>
          ) : (
            <button className="add-btn" onClick={() => onAddToShelf(book)}>
              Add to Shelf
            </button>
          ))}
      </div>
    </div>
  );
};

export default Book;
