import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { addBook } from "./BookUtils";

function BookLookup(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [response, setResponse] = useState();

  const submit = (e) => {
    e.preventDefault();
    addBook(title, author).then((data) => setResponse(data));
  };

  return (
    <Card className="mainCard">
      <Card.Body>
        <Card.Title>Add a Book</Card.Title>
        <Form onSubmit={submit}>
          <Form.Group>
            <Form.Label>Book Title</Form.Label>
            <Form.Control
              placeholder="Title"
              value={title}
              onChange={({ target: { value } }) => setTitle(value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Book Author</Form.Label>
            <Form.Control
              placeholder="Author"
              value={author}
              onChange={({ target: { value } }) => setAuthor(value)}
            ></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Book
          </Button>
        </Form>
        <br />
        {response && response.status.success && (
          <Card.Text>
            Success: <br /> {response.status.message}
          </Card.Text>
        )}
        {response && !response.status.success && (
          <Card.Text>
            Error: <br /> {response.status.message}
          </Card.Text>
        )}

        <Button variant="primary" onClick={() => props.setView("search")}>
          Switch to Search
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BookLookup;
