import { useNavigate } from "react-router-dom";

import "./header.css";
import { Box, Button, TextField } from "@mui/material";

const Header = ({ search, onSearchChange }) => {
  const navigate = useNavigate();
  const goToMyBooks = () => {
    navigate("/my-books ");
  };

  return (
    <Box my={4} display="flex" alignItems="center" sx={{ width: "100%" }}>
      <TextField
        id="standard-search"
        label="Search Books..."
        type="search"
        value={search}
        variant="outlined"
        sx={{ width: "50%" }}
        size="small"
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <Button
        sx={{ marginLeft: "auto" }}
        variant="contained"
        onClick={goToMyBooks}
      >
        My Book Shelf
      </Button>
    </Box>
  );
};

export default Header;
