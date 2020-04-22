const express = require('express');
const router = express.Router();
const db2 = require('../lib/db2');


router.post('/', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		db2.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/');
			} else {
        response.send("Incorrect Username and/or Password!");
			}			
			response.end();
		});
	} else {
		response.writeHead(302, {Location:`/`});
		response.end();
	}
});

module.exports = router;