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

export { searchByTitle };
