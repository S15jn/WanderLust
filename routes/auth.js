const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    successRedirect: "/listings",
  })
);

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/listings");
  });
});

module.exports = router;
