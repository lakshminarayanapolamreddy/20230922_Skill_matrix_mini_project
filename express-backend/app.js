var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

console.log("0.INside app.js");

// All Custom Routers
var userRouter = require('./routes/registration'); 
var login=require('./routes/login');
var adminportal=require('./routes/admin')
var userportal=require("./routes/users")

app.use('/', userRouter);
app.use('/loginDetails',login)
app.use("/admin",adminportal);
app.use("/users",userportal);

console.log("1.INside app.js");


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
