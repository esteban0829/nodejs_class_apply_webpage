var mysql = require('mysql');
var db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'000000',
  database:'booking'
});
db.connect();
module.exports = db;
