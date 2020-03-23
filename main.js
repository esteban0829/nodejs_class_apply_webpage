var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var db = require('./lib/db.js');
var template = require('./lib/template.js');


var app = http.createServer(function (req, res) {

  var _url = req.url;
  var pathname = url.parse(req.url).pathname;
  var querydata = url.parse(req.url).query;

  // console.log(`_url : ${_url}`);
  // console.log(`pathanme : ${pathname}`);
  // console.log(`querydata : ${querydata}`);
  console.log(req.connection.remoteAddress);

  if(pathname === '/'){
    template.main(req,res);

  }else if(pathname === '/apply_class'){
    template.apply(req,res);

  }else if(pathname === '/apply_class_process' && req.method=='POST'){
    template.apply_class_process(req,res);

  }else if(pathname === '/customer_list' && req.method=='POST'){
    template.customer_list(req, res);

  }else if(req.url.match("\.css$")){
    var cssPath = path.join(__dirname, 'front-end', _url);
    var fileStream = fs.createReadStream(cssPath, "UTF-8");
    res.writeHead(200, {"Content-Type": "text/css"});
    fileStream.pipe(res);

  }else if(req.url.match("\.js$")){
    var javascriptPath = path.join(__dirname, 'front-end', _url);
    var fileStream = fs.createReadStream(javascriptPath, "UTF-8");
    res.writeHead(200, {"Content-Type": "text/javascript"});
    fileStream.pipe(res);

  }else if(req.url.match("\.jpg$")){
    var imagePath = path.join(__dirname, 'front-end', _url);
    var fileStream = fs.createReadStream(imagePath);
    res.writeHead(200, {"Content-Type": "image/jpg"});
    fileStream.pipe(res);

  }else{
    res.writeHead(404);
    res.end('404 NOT FOUND');
  }

});

/*
const url = require('url');

exports.sampleRequest = function (req, res) {
    const reqUrl = url.parse(req.url, true);
    var name = 'World';
    if (reqUrl.query.name) {
        name = reqUrl.query.name
    }

    var response = {
        "text": "Hello " + name
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
};
*/

app.listen(8081);
