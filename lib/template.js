var fs = require('fs');
var db = require('./db');
var qs = require('querystring');


exports.main = function(req, res){
  fs.readFile('./front-end/index.html', function(err, html){
    var sessionKey = "129323hu23hr1903h93hf91h33f";
    if(err) throw err;
    res.writeHead(200, {
      'Set-Cookie': 'mycookie=test',
      'Content-Type': 'text/html'
    });
    res.end(html);
  });
}

exports.errorPage = function(req, res){
  fs.readFile('./front-end/pages/default.html', function(err, html){
    if(err) throw err;
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end(html);
  });
}

exports.notFound = function(req, res){
  fs.readFile('./front-end/pages/default.html', function(err, html){
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
  req.on('end', function(){//write a new file that has the name as title and file data as description
    var post = qs.parse(body);
    db.query(`
      INSERT INTO customer (first_name, last_name, email, phone_number, book_date) VALUES(?,?,?,?,NOW())`,
      [post.first_name, post.last_name, post.email, post.phone_number],
      function(err, result){
      if(err) throw err;
      res.writeHead(302, {Location:`/`});
      res.end();
    });
  });
}

exports.customer_list = function(req, res){
  db.query(`SELECT * FROM customer`, function(err, result){
    if(err) throw err;
    var response = {};
    for(var i=0;i<result.length;i++){
      response[`${result[i].id}`] = {
        "first_name" : result[i].first_name,
        "last_name" : result[i].last_name,
        "email" : result[i].email,
        "phone_number" : result[i].phone_number,
        "book_date" : result[i].book_date
      };
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
  });
}