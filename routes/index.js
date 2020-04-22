const express = require('express');
const router = express.Router();
const fs = require('fs');


router.get('/', (req,res) => {
  if(req.session.loggedin) {
    fs.readFile('./front-end/pages/index.html', function(err, html){
      if(err) throw err;
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.end(html);
    });
  } else {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Please login to view this page!');
  }
});



module.exports = router;