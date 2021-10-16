//TA04 PLACEHOLDER
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("pages/ta04V", {
    title: "Team Activity 04",
    path: "/ta04", // For pug, EJS
    activeTA04: true, // For HBS
    contentCSS: true, // For HBS,
    isLoggedIn: req.session.loggedIn,
  });
});

module.exports = router;
