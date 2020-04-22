// if (req.session.loggedin) {
//   res.writeHead(200, {'Content-Type' : 'text/plain'});
//   res.end(`Welcome back, ${request.session.username}!`);
// } else {
//   res.send('Please login to view this page!');
//   res.end();
// }
var x = document.cookie;
console.log(x);