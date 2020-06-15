const express = require('express');
const router = express.Router();
const fs = require('fs');


router.get('/', (req,res) => {
  if(req.session.loggedin) {
    fs.readFile('./front-end/pages/index.html', function(err, html){
      if(err) throw err;
      res.writeHead(200, {'Content-Type' : 'text/html'});
      // console.log(req.session.username);
      res.end(html);
    });
  } else {
    res.redirect(301, '/login')
  }
});



module.exports = router;