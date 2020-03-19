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

  // console.log(_url);
  // console.log(pathname);
  // console.log(querydata);
  // console.log(querystring.parse(querydata));
  // console.log(querystring.parse(querydata).id);
  // console.log('--------------------');

  if(pathname === '/'){
    fs.readFile('./html/index.html', function(err, html){
      if(err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(html);
    });

  }else if(pathname === '/apply_class'){
    fs.readFile('./html/apply.html', function(err, html){
      if(err) throw error;
      res.writeHeader(200, {'Content-Type' : 'text/html'});
      res.write(html);
      res.end();
    });

  }else if(pathname === '/apply_class_process' && req.method=='POST'){
    collectRequestData(req, result => {
      console.log(result);
      // console.log(result.fname);
      // console.log(result.mobile_number);
      // console.log(result.수업신청);
      res.end('apply confirmed');
    });

  }else{
    res.writeHead(404);
    res.end('404 NOT FOUND');
  }


}).listen(8081);



function collectRequestData(request, callback) {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    if(request.headers['content-type'] === FORM_URLENCODED) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(qs.parse(body));
        });
    }
    else {
        callback(null);
    }
}
