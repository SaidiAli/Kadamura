const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/login',
(req, res, next) => {
    if (req.isAuthenticated()) {
      res.redirect('/admin')
      return next();
    }
    return next();
  },
   (req, res) => {
    return res.render("auth/login", {
      error: req.flash("error"),
    });
})

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/auth/login",
    failureFlash: true,
  })
);

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router