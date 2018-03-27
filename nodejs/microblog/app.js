var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var helloRouter = require('./routes/hello');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // 视图模板的路径
app.set('view engine', 'ejs'); // 设置模板引擎

// 当 http 请求到来时，会依次被括号里这些中间件函数处理。
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // 提供静态文件支持

// 路由
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hello', helloRouter);

// 路径匹配
app.get('/users/:username', function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next();
}, function (req, res) {
    res.send('user: ' + req.params.username);
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
