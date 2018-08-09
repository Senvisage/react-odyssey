/*
module.exports = function (app) {
    app.post("/auth/signup", function (req, res) {
        res.send("I am in POST signup");
    });
};
*/
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
    res.send("I am in POST signup");
});

module.exports = router
