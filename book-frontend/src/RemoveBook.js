import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { removeBook } from "./BookUtils";

function RemoveBook() {
  const [title, setTitle] = useState("");
  const [response, setResponse] = useState();

  const submit = (e) => {
    e.preventDefault();
    removeBook(title).then((data) => setResponse(data));
  };

  return (
    <Card.Body>
      <Card.Title>Remove Book</Card.Title>
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
          Remove
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
    </Card.Body>
  );
}

export default RemoveBook;
