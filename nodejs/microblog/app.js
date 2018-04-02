var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 数据库设置
var settings = require('./settings');

// connect-mongo: MongoDB session store for Express
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// req.flash, depends on session
var flash = require('connect-flash');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var helloRouter = require('./routes/hello');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // 页面模板的位置
app.set('view engine', 'ejs'); // 设置模板引擎

// 注册引入的中间件 (require, app.use())
// 当 http 请求到来时，会依次被括号里这些中间件函数处理。
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser()); // Cookie 解析
app.use(session({
    secret: settings.cookieSecret,
    store: new MongoStore({
        // db: settings.db // Error: Connection strategy not found
        url: 'mongodb://localhost'
    })
})); // 提供会话支持，把会话信息存入数据库
app.use(flash());
app.use(express.static(path.join(__dirname, 'public'))); // 提供静态文件支持

// 测试 req.flash
// app.get('/test', function(req, res) {
//     req.flash('successMessage', 'You are successfully using req-flash');
//     req.flash('errorMessage', 'No errors, you\'re doing fine');
 
//     res.redirect('/');
// });
 
// app.get('/', function(req, res) {
//     res.send(req.flash());
// });
// 测试结束

// 替代书中 dynamicHelpers 实现动态视图
// 以下代码要放在指定路由的语句之前，否则访问 user、error、success 变量会出错。
// user 用于判断用户是否登录，从而显示登录/登出；error、success 用于提供页面通知。
app.use(function (req, res, next) {
    res.locals.user = req.session.user;

    var error = req.flash('error');
    var success = req.flash('success');

    res.locals.error = error.length ? error : null;
    res.locals.success = success.length ? success : null;

    next();
});

// 路由
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hello', helloRouter); // 练习

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