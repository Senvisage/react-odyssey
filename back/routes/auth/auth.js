var express = require("express");
var router = express.Router();
const dbConnection = require("./../../helpers/db.js");
const bcrypt = require("bcrypt");
const passport = require("passport");

// Routes
// Don't forget that the "/auth" prefix is already specified in app.js !

router.post("/signup", function(req, res) {
  const newUser = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    name: req.body.name,
    lastname: req.body.lastname
  };
  var query = dbConnection.query("INSERT INTO users SET ?", newUser, function(
    error,
    results,
    fields
  ) {
    if (error) res.status(500).json({ flash: error.message });
    else res.status(200).json({ flash: "User has been signed up !" });
    res.end();
  });
});

router.post("/signin", function(req, res) {
  passport.authenticate("local", (err, user, info) => {
    //Crashed
    if (err) return res.status(500).send(err);

    //No user
    if (!user)
      return res.status(400).json({ flash: "No matching user found !" });

    //All went well
    return res.json({ user });
  })(req, res);
});

//Final export
module.exports = router;
