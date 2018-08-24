// ----------------------------------------------------------------- Needed libs
const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

const dbConnection = require("./helpers/db.js");
const users = require("./helpers/users.js");
const configkeys = require("./helpers/configkeys.js");

// ----------------------------------------------------------- App configuration
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

dbConnection.connect(function(err) {
  if (err) {
    return;
  }
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false
    },
    function(email, password, callback) {
      users.findByUsername(email, function(err, user) {
        //Crashed
        if (err) return callback(err);

        //No user
        if (!user) return callback(null, false);

        //Password mismatch
        if (!bcrypt.compareSync(password, user.password))
          return callback(null, false);

        //All went well
        return callback(null, user);
      });
    }
  )
);
passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: configkeys.tokenJWT
    },
    function(jwtPayload, cb) {
      return cb(null, jwtPayload);
    }
  )
);

// ---------------------------------------------------------- API implementation
// Auth Routes
var auth = require("./routes/auth/auth");
app.use("/auth", auth);

// Other routes
//require("./routes/auth/auth")(app);

app.get("/profile", passport.authenticate("jwt", { session: false }), function(
  req,
  res
) {
  const value = {
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname
  };
  res.send(value);
});

// #404 'Not Found'
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// ------------------------------------------------------------- Node server run
let server = app.listen(process.env.PORT || 5000, function() {
  console.log("Listening on port " + server.address().port);
});
