import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { searchByTitle } from "./BookUtils";

function BookLookup(props) {
  const [title, setTitle] = useState("");
  const [bookInfo, setBookInfo] = useState();

  const submit = (e) => {
    e.preventDefault();
    searchByTitle(title).then((data) => setBookInfo(data));
  };

  return (
    <Card.Body>
      <Card.Title>Author Lookup</Card.Title>
      <Form onSubmit={submit}>
        <Form.Group>
          <Form.Label>Book Title</Form.Label>
          <Form.Control
            placeholder="Title"
            value={title}
            onChange={({ target: { value } }) => setTitle(value)}
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
      <br />
      {bookInfo && bookInfo.status.success && (
        <Card.Text>
          Title: {bookInfo.data.title} <br /> Author: {bookInfo.data.author}
        </Card.Text>
      )}
      {bookInfo && !bookInfo.status.success && (
        <Card.Text>
          Error: <br /> {bookInfo.status.message}
        </Card.Text>
      )}
    </Card.Body>
  );
}

export default BookLookup;
