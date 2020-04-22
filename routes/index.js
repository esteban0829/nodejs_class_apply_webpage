const express = require('express');
const router = express.Router();
const fs = require('fs');


router.get('/', (req,res) => {
  
  if (request.session.loggedin) {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end(`Welcome back, ${request.session.username}!`);
    // fs.readFile('./front-end/index.html', function(err, html){
    //   if(err) throw err;
    //   res.writeHead(200, {'Content-Type' : 'text/html'});
    //   res.end(html);
    // });
	} else {
    res.send('Please login to view this page!');
    res.end();
	}
  
});



module.exports = router;