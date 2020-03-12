var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var querystring = require('querystring');


http.createServer(function (req, res) {

  var _url = req.url;
  var pathname = url.parse(req.url).pathname;
  var querydata = url.parse(req.url).query;

  // if (req.url === '/favicon.ico') {
  //   fs.readFile('./image/favicon.ico', function(err, favicon){
  //     res.writeHeader(200, {'Content-Type': 'image/x-icon'} );
  //     res.write(favicon);
  //     res.end();
  //   });
  //   console.log('favicon requested');
  // }

  console.log(_url);
  console.log(pathname);
  console.log(querydata);
  console.log(querystring.parse(querydata));
  console.log(querystring.parse(querydata).id);
  console.log('--------------------');

  if(pathname === '/'){

    fs.readFile('./html/index.html', function(err, html){
      if(err) throw error;
      res.writeHeader(200, {'Content-Type' : 'text/html'});
      res.write(html);
      res.end();
    });
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.end('main website');
  }else if(pathname === '/apply_class'){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('apply_class');
  }else if(pathname === '/apply_class_process'){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('apply_class_process');
  }else{
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 NOT FOUND');
  }


}).listen(8081);
