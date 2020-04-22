const express = require('express');
const app = express();
const router = express.Router();
const db = require('../lib/db');

app.post('/', (req,res) => {
  db.query(`SELECT * FROM customer`, function(err, result){
    if(err) throw err;
    var response = {};
    for(var i=0;i<result.length;i++){
      response[`${result[i].id}`] = {
        "first_name" : result[i].first_name,
        "last_name" : result[i].last_name,
        "email" : result[i].email,
        "phone_number" : result[i].phone_number,
        "book_date" : result[i].book_date
      };
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
  });
});

module.exports = router;