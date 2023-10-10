const Book = require("./book.schema");

async function getAllBooks() {
    try {
        return await Book.find({});
    } catch (error) {
        throw new Error(error);
    }
}

async function findById(id) {
    try {
        return await Book.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

async function addBook(title, author, genre, year) {
    try {
        const book = new Book({ title, author, genre, year });
        return await book.save();
    } catch (error) {
        throw new Error(error);
    }
}

async function purgeBooks() {
    try {
        await Book.deleteMany({});
    } catch (error) {
        throw new Error(error);
    }
}

async function updateBook(id, book) {
    try {
        const updatedUser = await Book.findByIdAndUpdate(id,book, {
            new: true,
            runValidators: true,
        })
        return updatedUser
    } catch (error) {
        throw new Error(error);
    }
}

async function deleteBook(id) {
    try {
         const deletedBook = await Book.findByIdAndRemove(id)
         return deletedBook
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    addBook,
    purgeBooks,
    findById,
    getAllBooks,
    updateBook,
    deleteBook
};
