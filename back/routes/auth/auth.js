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
  console.log(
    "Fetching users matching " + req.body.email + "/" + req.body.password
  );
  var query = dbConnection.query(
    //"SELECT * FROM users WHERE email=? AND password=? LIMIT 1",
    "SELECT * FROM users LIMIT 1",
    [req.body.email, req.body.password],
    function(error, results, fields) {
      //Crashed
      if (error) res.status(500).json({ flash: error.message });

      //Not found
      if (results[0] === undefined) {
        console.log("It seems we found no one...");
        res.status(500).json({ flash: "No user found !" });
      } else {
        //All went well
        console.log("Rows retrieved: ", results.length); //Debug
        res.status(200).json({
          flash:
            "User " +
            results[0].name +
            " " +
            results[0].lastname +
            " has been signed in !",
          email: results[0].email,
          name: results[0].name,
          lastname: results[0].lastname
        });
      }
    }
  );
});

//Final export
module.exports = router;
