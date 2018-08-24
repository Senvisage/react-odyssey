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
      user = {
        id: results[0].id,
        email: results[0].email,
        password: results[0].password,
        name: results[0].name,
        lastname: results[0].lastname
      };
      return cb(null, user);
    }
  );
};
