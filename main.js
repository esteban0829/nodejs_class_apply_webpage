const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');


// leting Express know we'll be using some of its packages:
app.use(session({
	secret: 'asdfbnsadf90u2j03ifna9fj',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//access static files
app.use(express.static('front-end'));

var indexRouter = require('./routes/index');
var applyRouter = require('./routes/apply');
var loginRouter = require('./routes/login');
var authRouter = require('./routes/auth');
var customerInfoRouter = require('./routes/customer');

app.use('/', indexRouter);
app.use('/apply', applyRouter);
app.use('/customer_list', customerInfoRouter);
app.use('/login', loginRouter);
app.use('/auth', authRouter);

app.use(function (req, res, next) {
	res.send('404 NOT FOUND');
});

app.listen(8081);
