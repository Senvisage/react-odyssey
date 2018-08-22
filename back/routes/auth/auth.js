var express = require("express");
var router = express.Router();
const dbConnection = require("./../../helpers/db.js");

// Routes
// Don't forget that the "/auth" prefix is already specified in app.js !

router.post("/signup", function(req, res) {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
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
  var query = dbConnection.query(
    "SELECT * FROM users WHERE email=? AND password=? LIMIT 1",
    [req.body.email, req.body.password],
    function(error, results, fields) {
      if (error) res.status(500).json({ flash: error.message });
      res
        .status(200)
        .json({
          flash: "User has been signed up !",
          email: result.rows[0].email
        });
    }
  );
});

//Final export
module.exports = router;
