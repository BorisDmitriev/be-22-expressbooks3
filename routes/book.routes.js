const express = require("express");
const router = express.Router();
const {
    httpAddBook,
    httpPurgeBooks,
    httpGetBookById,
    httpGetAllBooks,
    httpUpdateBook,
    httpDeleteBook
} = require("../controllers/book.controller");

router.get("/", httpGetAllBooks);
router.post("/add", httpAddBook);
router.delete("/purgeBooks", httpPurgeBooks);
router.route("/:id").get(httpGetBookById)
                    .put(httpUpdateBook)
                    .delete(httpDeleteBook)

module.exports = router;
