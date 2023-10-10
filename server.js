const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

mongoose
    .connect("mongodb://localhost:27017/booksDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
    });

app.use(express.json());

const bookRoutes = require("./routes/book.routes");
app.use("/books", bookRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
