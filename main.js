var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
// var qs = require('querystring');
var db = require('./lib/db.js');
var template = require('./lib/template.js')


var app = http.createServer(function (req, res) {

  var _url = req.url;
  var pathname = url.parse(req.url).pathname;
  var querydata = url.parse(req.url).query;


  console.log(`_url : ${_url}`);
  console.log(`pathanme : ${pathname}`);
  console.log(`querydata : ${querydata}`);

  if(pathname === '/'){
    template.main(req,res);

  }else if(pathname === '/apply_class'){
    template.apply(req,res);

  }else if(pathname === '/apply_class_process' && req.method=='POST'){
    template.apply_class_process(req,res);

  }else if(req.url.match("\.css$")){
    var cssPath = path.join(__dirname, 'front-end', req.url);
    var fileStream = fs.createReadStream(cssPath, "UTF-8");
    res.writeHead(200, {"Content-Type": "text/css"});
    fileStream.pipe(res);

  }else if(req.url.match("\.jpg$")){
    var imagePath = path.join(__dirname, 'front-end', req.url);
    var fileStream = fs.createReadStream(imagePath);
    res.writeHead(200, {"Content-Type": "image/jp g"});
    fileStream.pipe(res);

  }else{
    res.writeHead(404);
    res.end('404 NOT FOUND');
  }

  // console.log(path.extname(pathname));
  // if(path.extname(pathname) === '.css'){
  //   var dir = './front-end' + pathname;
  //   fs.readFile(dir, 'utf-8', function (err, data) {
  //     console.log(data);
  //     if (err) throw (err);
  //     res.writeHead(200, {'Content-Type': 'text/css'});
  //     res.write(data);
  //     res.end();
  //   });
  // }else if(path.extname(pathname) === '.js'){
  //   var dir = './front-end' + pathname;
  //   fs.readFile(dir, function (err, data) {
  //     if (err) throw (err);
  //     res.writeHead(200, {'Content-Type': 'text/javascript'});
  //     res.write(data);
  //     res.end();
  //   });
  // }else if(path.extname(pathname) === '.jpg'){
  //   var dir = './front-end' + pathname;
  //   fs.readFile(dir, function (err, data) {
  //     if (err) throw (err);
  //     res.writeHead(200, {'Content-Type': 'text/image'});
  //     res.write(data);
  //     res.end();
  //   });
  // }


});

app.listen(8081);
