const express = require('express');
const app = express();


app.use(express.static('front-end'));


var indexRouter = require('./routes/index');
var applyRouter = require('./routes/apply');
var customerInfoRouter = require('./routes/customer');

app.use('/', indexRouter);
app.use('/apply',applyRouter);
app.use('/customer_list',customerInfoRouter);


app.use(function(req, res, next){
  res.send('404 NOT FOUND');
});

app.listen(8081);
