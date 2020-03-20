var fs = require('fs');


exports.main = function(req, res){
  fs.readFile('./front-end/index.html', function(err, html){
    if(err) throw err;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
  });
}

exports.apply = function(req, res){
  fs.readFile('./html/form.html', function(err, html){
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
  console.log(body);
  res.writeHead(302, {Location:`/`});
  res.end();
  });
}

exports.directory = function(current_dir, pathname){
  var res = current_dir;
  var temp = '\\';
  res = res.slice(0,68);
  res = res.replace(/\\/g,'/');
  res = res+'/front-end'+pathname;
  // console.log(`res : ${res}`);
  return res;
}
