var express = require('express');
var router = express.Router();


app.get('/', (req,res) => {
  fs.readFile('./front-end/index.html', function(err, html){
    if(err) throw err;
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(html);
  });
});

module.exports = router;