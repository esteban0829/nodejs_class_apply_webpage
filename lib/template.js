var fs = require('fs');
var db = require('./db');
var qs = require('querystring');


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
  req.on('end', function(){//write a new file that has the name as title and file data as description
    var post = qs.parse(body);
    console.log(body);
    console.log(post);
    db.query(`
      INSERT INTO topic (first_name, last_name, email, phone_number, book_date) VALUES(?,?,?,?,NOW())`,
      [post.first_name, post.last_name, post.email, post.phone_number],
      function(err, result){
      // INSERT INTO topic (first_name, last_name, email, phone_number, book_date) VALUES(?,?,?,?,NOW());
      if(err) throw err;
      res.writeHead(302, {Location:`/`});
      res.end();
    });
  });
}
