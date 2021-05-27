const express = require("express");
let bookData = require("./books_simple.json");
const cors = require("cors");
const fs = require("fs");
const app = express();
app.use(cors());
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.get("/book", (req, res) => {
  console.log(bookData);
  if (req.query.title in bookData) {
    const title = req.query.title;
    res.json({
      status: { success: true, message: "Book found" },
      query: req.query,
      data: { title: title, author: bookData[title] },
    });
  } else {
    res.json({
      status: { success: false, message: "Book not found" },
      query: req.query,
    });
  }
});

app.post("/addBook", (req, res) => {
  if (req.query.title && req.query.author) {
    if (!(req.query.title in bookData)) {
      bookData[req.query.title] = req.query.author;
      res.json({
        status: { success: true, message: "Book added successfully" },
        query: req.query,
      });
      fs.writeFile("./books_simple.json", JSON.stringify(bookData), (error) =>
        console.log(error)
      );
      console.log(bookData);
    } else {
      res.json({
        status: { success: false, message: "Title already exists" },
        query: req.query,
      });
    }
  } else {
    res.json({
      status: { success: false, message: "Invalid request" },
      query: req.query,
    });
  }
});

app.delete("/removeBook", (req, res) => {
  console.log(req.query);
  if (req.query.title) {
    if (req.query.title in bookData) {
      delete bookData[req.query.title];
      res.json({
        status: { success: true, message: "Book removed successfully" },
        query: req.query,
      });
      fs.writeFile("./books_simple.json", JSON.stringify(bookData), (error) =>
        console.log(error)
      );
      console.log(bookData);
    } else {
      res.json({
        status: { success: false, message: "Title does not exists" },
        query: req.query,
      });
    }
  } else {
    res.json({
      status: { success: false, message: "Invalid request" },
      query: req.query,
    });
  }
});

app.listen(port, () => {
  console.log(`Book-Lookup app listening at http://localhost:${port}`);
});
