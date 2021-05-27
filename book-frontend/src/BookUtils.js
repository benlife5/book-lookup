const axios = require("axios");

const searchByTitle = async (title) => {
  try {
    const data = await fetch("http://localhost:8000/book?title=" + title);
    return data.json();
  } catch (error) {
    console.log(error);
    alert("Server Error");
    return null;
  }
};

const addBook = async (title, author) => {
  try {
    const data = await axios.post(
      "http://localhost:8000/addBook?title=" + title + "&&author=" + author
    );
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
    alert("Server error");
    return null;
  }
};

export { searchByTitle, addBook };
