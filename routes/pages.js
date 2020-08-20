const express = require('express')
const router = express.Router()

router.get("/", (req, res) => res.render("index"));
router.get('/vendors', (req, res) => res.render('vendors'))
router.get("/categories", (req, res) => res.render("categories"));

router.get(
  "/admin",
  (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/");
  },
  (req, res) => {
    res.render("admin");
  }
);

module.exports = router