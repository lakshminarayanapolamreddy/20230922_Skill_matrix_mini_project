//C:\Users\PolamreddyLakshmiNar\Desktop\20230922_Skill_matrix_mini_project\express-backend\app.js
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const skillsRoutes = require('./routes/skills');
var app = express();
const getRouter = require('./routes/admin')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
// All Custom Routers
var userRouter = require('./routes/registration'); 
var login=require('./routes/login');
var userSkill = require('./routes/userSkillsRouter')
app.use('/skills', skillsRoutes);
app.use('/userSkills', userSkill)
app.use('/', userRouter);
app.use('/loginDetails',login)
app.use('/admin',getRouter)
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


