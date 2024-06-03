import { useNavigate } from "react-router-dom";

import "./header.css";

const Header = ({ search, onSearchChange }) => {
  const navigate = useNavigate();
  const goToMyBooks = () => {
    navigate("/my-books ");
  };

  return (
    <div className="header">
      <input
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        type="search"
        placeholder="Search for books"
      />
      <button className="my-books-btn" onClick={goToMyBooks}>
        My Books
      </button>
    </div>
  );
};

export default Header;
