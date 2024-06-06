import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import BookList from "./container/BookList";
import BookShelf from "./container/BookShelf";
import { Box } from "@mui/material";

function App() {
  return (
    <Box gap={2} px={8}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/my-books" element={<BookShelf />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
