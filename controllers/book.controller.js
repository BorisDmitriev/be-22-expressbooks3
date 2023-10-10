const {
    addBook,
    purgeBooks,
    findById,
    getAllBooks,
    updateBook,
    deleteBook,
} = require("../models/book.model");

async function httpGetAllBooks(req, res) {
    try {
        const books = await getAllBooks();
        res.status(200).json(books);
    } catch (error) {
        res.status(200).json([]);
    }
}

async function httpGetBookById(req, res) {
    const { id } = req.params;
    try {
        const book = await findById(id);
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json({ message: "Book not found!" });
    }
}

async function httpUpdateBook(req, res) {
    const { id } = req.params
    const book = req.body
    try {
        const updatedBook = await updateBook(id, book);
        res.status(200).json({updatedBook: updatedBook});
    } catch (error) {
        res.status(404).json({ message: "Book not found!" });
    }
}

async function httpDeleteBook(req, res) {
    const { id } = req.params;
    try {
        const deletedBook = await deleteBook(id);
        res.status(200).json({deletedBook: deletedBook});
    } catch (error) {
        res.status(404).json({ message: "Book not found!" });
    }
}


async function httpAddBook(req, res) {
    const { title, author, genre, year } = req.body;
    const { firstName, lastName } = author;
    try {
        await addBook(title, { firstName, lastName }, genre, year);
        res.status(201).json({ message: "Book added successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to add book" });
    }
}

async function httpPurgeBooks(req, res) {
    try {
        await purgeBooks();
        res.status(200).json({ message: "All books deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete books" });
    }
}

module.exports = {
    httpAddBook,
    httpPurgeBooks,
    httpGetBookById,
    httpGetAllBooks,
    httpUpdateBook,
    httpDeleteBook
};
