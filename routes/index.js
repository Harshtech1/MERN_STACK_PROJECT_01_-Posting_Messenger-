const express = require("express");
const router = express.Router();

// Home route
router.get("/", (req, res) => {
  res.render("home", { 
    title: "Home - Prompt Manager",
    page: "home"
  });
});

module.exports = router;
