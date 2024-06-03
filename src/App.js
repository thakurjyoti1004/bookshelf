import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import BookList from "./container/BookList";
import BookShelf from "./container/BookShelf";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/my-books" element={<BookShelf />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
