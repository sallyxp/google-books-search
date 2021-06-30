const router = require("express").Router();

const path = require("path");
const googleRoutes = require("./google");
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

// Google routes
router.use("/google", googleRoutes);


// For anything else, render the html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/public/index.html"));
  });

module.exports = router;