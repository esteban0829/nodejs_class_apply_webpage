var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var qs = require('querystring');
var db = require('./lib/db.js');


http.createServer(function (req, res) {

  var _url = req.url;
  var pathname = url.parse(req.url).pathname;
  var querydata = url.parse(req.url).query;


  console.log(`_url : ${_url}`);
  console.log(`pathanme : ${pathname}`);
  console.log(`querydata : ${querydata}`);

  if(pathname === '/'){
    fs.readFile('./html/index.html', function(err, html){
      if(err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(html);
    });

  }else if(pathname === '/master.css'){
    fs.readFile('./css/master.css', function(err, css){
      if(err) throw err;
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.end(css);
    });

  }else if(pathname === '/apply_class'){
    fs.readFile('./html/form.html', function(err, html){
      if(err) throw error;
      res.writeHeader(200, {'Content-Type' : 'text/html'});
      res.write(html);
      res.end();
    });

  }else if(pathname === '/apply_class_process' && req.method=='POST'){
    var body='';
    request.on('data', function(data){//gives the data to the body which we got from the method post
      body+=data;
    });
    request.on('end', function(){//write a new file that has the name as title and file data as description
    var post = qs.parse(body);
    // [post.title, post.description, post.author],
    response.writeHead(302, {Location:`/`});
    response.end();
  });

  }else{
    res.writeHead(404);
    res.end('404 NOT FOUND');
  }


}).listen(8081);
