const express = require('express');
const router = express.Router();
const fs = require('fs');


router.get('/', (req,res) => {
  fs.readFile('./front-end/pages/login.html', function(err, html){
    if(err) throw err;
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(html);
  });
});

module.exports = router;