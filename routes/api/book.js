const router = require("express").Router();
const booksController = require("../../controllers/bookController");

// Matches with "/api/book"
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);

// Matches with "/api/book/:id"
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;
