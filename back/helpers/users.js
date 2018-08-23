const dbConnection = require("./db.js");

exports.findByUsername = function(username, cb) {
  var query = dbConnection.query(
    "SELECT * FROM users WHERE email=? LIMIT 1",
    [username],
    function(error, results, fields) {
      //Crashed
      if (error) return cb(null, null);

      //Not found
      if (results[0] === undefined) return cb(null, null);

      //All went well
      return cb(null, results[0]);
    }
  );
};
