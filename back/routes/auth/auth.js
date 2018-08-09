var express = require('express')
var router = express.Router()
const dbConnection = require('./../../helpers/db.js');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// Routes
// Don't forget that the "/auth" prefix is already specified in app.js !
router.get("/signup", function (req, res) {
    res.send("I am in GET signup");
});
router.post("/signup", function (req, res) {
  const newUser = {email: req.body.email, password: req.body.password, name: req.body.name, lastname: req.body.lastname};
  var query = dbConnection.query(
    'INSERT INTO users SET ?', newUser, function (error, results, fields) {
      if(error)
        res.status(500).end();
      res.end();
    });
});
module.exports = router
