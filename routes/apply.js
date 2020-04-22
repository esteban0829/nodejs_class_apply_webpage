const express = require('express');
const router = express.Router();
const fs = require('fs');
const qs = require('querystring');
const db = require('../lib/db');
const db2 = require('../lib/db2');

router.get('/class', (req,res) => {
  fs.readFile('./front-end/pages/apply.html', function(err, html){
    if(err) throw err;
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(html);
  });
});

router.post('/class_process', (req, res) => {
  db.query(`
    INSERT INTO customer (first_name, last_name, email, phone_number, book_date) VALUES(?,?,?,?,NOW())`,
    [req.body.first_name, req.body.last_name, req.body.email, req.body.phone_number],(err, result)=>{if(err) throw err;}
  );
  db2.query(`
    INSERT INTO accounts (username, password, email) VALUES(?,?,?)`,
    [req.body.user_name, req.body.password, req.body.email],(err, result)=>{if(err) throw err;}
  );
  res.writeHead(302, {Location:`/`});
  res.end();
});

module.exports = router;