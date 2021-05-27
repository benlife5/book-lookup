import BookLookup from "./BookLookup";
import AddBook from "./AddBook";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [view, setView] = useState("search");

  return (
    <div className="App">
      {view === "search" && <BookLookup setView={setView} />}
      {view === "add" && <AddBook setView={setView} />}
    </div>
  );
}

export default App;
