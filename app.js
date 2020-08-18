var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
var pug = require('pug');
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
/*var multer  = require('multer')
var upload = multer({dast:'uploads/'})*/
//var logger = require('morgan');

//var indexRouter = require('./routes/index');


var app=pug;
var app = express();



//var userRegister=require('./rcd 

// view engine setup

var usersRouter = require('./routes/users');
var teacherRouter=require('./routes/teacherRoutes');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');




//app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));
app.use(cookieParser());

var token = jwt.sign({ foo: 'bar' }, 'shhhhh');


/*app.use(express.json());
app.use(express.urlencoded({ extended:false})); 
app.use(express.static(path.join(__dirname, 'public')));*/

app.use('/student', usersRouter);
app.use('/teacher', teacherRouter);

mongoose.connect('mongodb://localhost/test',{useNewUrlParser:true, useUnifiedTopology: true });

const db=mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
db.once('open',function(){
  console.log('connected');
});

//app.use('/userregister',userRegister);

//app.use('/', indexRouter);





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
    res.status(400).json({
error:"page not found"
  });
  /*res.status(500).json({
    error:"internal server error"
  });*/
});

module.exports = app;
