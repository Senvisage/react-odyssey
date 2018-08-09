const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'dev',
  password : 'dev',
  database : 'react_odyssey'
});
module.exports  =  connection;
