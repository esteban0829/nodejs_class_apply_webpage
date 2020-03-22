var fs = require('fs');
var db = require('./db');

exports.main = function(req, res){
  fs.readFile('./front-end/index.html', function(err, html){
    if(err) throw err;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
  });
}

exports.apply = function(req, res){
  fs.readFile('./front-end/pages/apply.html', function(err, html){
    if(err) throw err;
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(html);
  });
}

exports.apply_class_process = function(req, res){
  var body='';
  req.on('data', function(data){//gives the data to the body which we got from the method post
    body+=data;
  });
  console.log(`1body : ${body}`);
  req.on('end', function(){//write a new file that has the name as title and file data as description
    console.log(`2body : ${body}`);
    res.writeHead(302, {Location:`/`});
    res.end();
  });
}
