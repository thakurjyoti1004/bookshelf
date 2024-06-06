import { Box, Button } from "@mui/material";
import "./bookStyles.css";

const Book = ({
  book,
  onAddToShelf,
  isBookAddedToShelf,
  showAddBtn = true,
}) => {
  const getTitle = (title) => {
    if (title && title.length > 0) {
      return title.length > 30 ? `${title.substring(0, 30)}...` : title;
    }
  };

  return (
    <div key={book.key} className="book">
      <img
        src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
        alt={book.title}
        className="book-cover"
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ paddingX: 2, paddingY: 3 }}
      >
        <h3>{getTitle(book.title) || "Harry Potter"}</h3>
        <p>{book.author_name && book.author_name.join(", ")}</p>
        <p>{book.first_publish_year}</p>
        {showAddBtn &&
          (isBookAddedToShelf(book) ? (
            <Button fullWidth disabled>
              Added to Shelf
            </Button>
          ) : (
            <Button
              fullWidth
              variant="contained"
              onClick={() => onAddToShelf(book)}
            >
              Add to Shelf
            </Button>
          ))}
      </Box>
    </div>
  );
};

export default Book;
