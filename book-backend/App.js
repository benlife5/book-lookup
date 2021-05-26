const express = require("express");
const bookData = require("./books_simple.json");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.get("/book", (req, res) => {
  if (req.query.title) {
    const title = req.query.title;
    res.json({ title: title, author: bookData[title] });
  } else {
    res.send("Book Lookup API: please pass arguments");
  }
});

app.listen(port, () => {
  console.log(`Book-Lookup app listening at http://localhost:${port}`);
});
