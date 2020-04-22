var mysql = require('mysql');
var db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'000000',
  database:'nodelogin'
});
db.connect();
module.exports = db;
