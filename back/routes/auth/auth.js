var express = require('express')
var router = express.Router()

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
  var query = connection.query(
    'INSERT INTO users (email, password, name, lastname) VALUES ('+req.body.email+','+req.body.password+','+req.body.name+','+req.body.lastname+')', 
    post, function (error, results, fields) {
      if(error)
          res.status(500).end();
      res.end();
    });
});

module.exports = router
