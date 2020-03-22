var fs = require('fs');
var db = require('./db');
var qs = require('querystring');


function customer_template(){
  // var script='';
  // var table='';
  // db.query(`SELECT * FROM customer`, function(err, result){
  //   if(err) throw err;
  //   table+=`<table><tr><th>First name</th><th>Last name</th><th>Email</th><th>Phone number</th><th>book date</th></tr>`;
  //   for(var i=0;i<result.length;i++){
  //     // console.log(result[i].first_name);
  //     // console.log(result[i].last_name);
  //     // console.log(result[i].email);
  //     // console.log(result[i].phone_number);
  //     // console.log(result[i].book_date);
  //     table+=`<tr><td>${result[i].first_name}</td><td>${result[i].last_name}</td><td>${result[i].email}</td><td>${result[i].phone_number}</td><td>${result[i].book_date}</td></tr>`;
  //   }
  //   table+='</table>';
  //   script=`<script type="text/javascript">table = "${table}";document.querySelector('#customer-list').innerHTML = table;</script>`;
  //   console.log(`script : ${script}`);
  //   return script;
  // });
}

exports.main = function(req, res){
  fs.readFile('./front-end/index.html', function(err, html){
    if(err) throw err;

    //TODO : clean this... its just... not clean...
    //----------------------------------------
    var script='';
    var table='';
    db.query(`SELECT * FROM customer`, function(err, result){
      if(err) throw err;
      table+=`<table><tr><th>First name</th><th>Last name</th><th>Email</th><th>Phone number</th><th>book date</th></tr>`;
      for(var i=0;i<result.length;i++){
        table+=`<tr><td>${result[i].first_name}</td><td>${result[i].last_name}</td><td>${result[i].email}</td><td>${result[i].phone_number}</td><td>${result[i].book_date}</td></tr>`;}
      table+='</table>';
      script=`<script type="text/javascript">table = "${table}";document.querySelector('#customer-list').innerHTML = table;</script>`;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(html+script);
    });
    //------------------------------------------------
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
