var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var studentRouter = require('./routes/student');
var lecturerRouter = require('./routes/lecturer')
var app = express();

////Cau hinh database (-> vao app cho sau doan var app = express();)
var mongoose = require("mongoose")
const url = "mongodb+srv://codecode12345:123456789m@cluster0.ik5tvr8.mongodb.net/cloud" //sau 27017/tên database



//cau hinh  body parser
var bodyParser = require("body-parser");

mongoose.connect(url, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connect to db succeed !");
    }
});

app.use(bodyParser.urlencoded({ extended: false }));

////////////////////////

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/student', studentRouter); //tên đường dẫn
app.use('/lecturer', lecturerRouter);

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

///cho cai nay vao app.js o cuoi

var port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server is running http://localhost:5000");
});

////////////

var hbs = require('hbs');
hbs.registerHelper('dateFormat', require('handlebars-dateformat'));

module.exports = app;