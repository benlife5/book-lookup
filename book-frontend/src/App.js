import BookLookup from "./BookLookup";
import AddBook from "./AddBook";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { Card, ButtonGroup, Button } from "react-bootstrap";

function App() {
  const [view, setView] = useState("search");

  return (
    <div className="App">
      <Card className="mainCard">
        {view === "search" && <BookLookup setView={setView} />}
        {view === "add" && <AddBook setView={setView} />}
        <ButtonGroup size="sm">
          <Button onClick={() => setView("search")}>Search</Button>
          <Button onClick={() => setView("add")}>Add</Button>
          <Button onClick={() => setView("remove")}>Remove</Button>
        </ButtonGroup>
      </Card>
    </div>
  );
}

export default App;
