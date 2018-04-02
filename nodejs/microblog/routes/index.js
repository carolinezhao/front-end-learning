var express = require('express');
var router = express.Router();
var crypto = require('crypto'); // Node.js 的核心模块，加密并生成散列
var User = require('../models/user.js'); // 用户对象

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Microblog'
    });
    // 调用模板解析引擎，翻译名为 index 的模板 (.ejs)，并传入一个对象作为参数，这个对象只有一个属性，即 title:'Express'。
});

// 目前写在 users.js 中
// router.get('/u/:user', function (req, res) {})

router.post('/post', function (req, res) {

})

router.get('/reg', checkNotLogin)
router.get('/reg', function (req, res) {
    res.render('reg', {})
})

router.post('/reg', checkNotLogin)
router.post('/reg', function (req, res) {
    // 检查两次输入的密码是否一致
    if (req.body['password-confirm'] != req.body['password']) {
        req.flash('error', '两次输入的密码不一致')
        return res.redirect('/reg')
    }

    // 生成密码的散列值
    var md5 = crypto.createHash('md5')
    var password = md5.update(req.body.password).digest('base64')

    var newUser = new User({
        name: req.body.username,
        password: password
    })

    // 检查用户名是否已经存在
    User.get(newUser.name, function (err, user) {
        if (user) {
            err = 'Username already exists.'
        }
        if (err) {
            req.flash('error', err)
            return res.redirect('/reg')
        }
        // 如果不存在则新增用户
        newUser.save(function (err) {
            if (err) {
                req.flash('error', err)
                return res.redirect('/reg')
            }
            req.session.user = newUser
            req.flash('success', '注册成功！')
            res.redirect('/')
        })
    })
})

router.get('/login', checkNotLogin)
router.get('/login', function (req, res) {
    res.render('login', {
        title: 'Please Login'
    })
})

router.post('/login', checkNotLogin)
router.post('/login', function (req, res) {
    // 生成密码的散列值
    var md5 = crypto.createHash('md5')
    var password = md5.update(req.body.password).digest('base64')

    User.get(req.body.username, function (err, user) {
        if (!user) {
            req.flash('error', '用户不存在')
            return res.redirect('/login')
        }
        if (user.password != password) {
            req.flash('error', '用户密码错误')
            return res.redirect('/login')
        }
        req.session.user = user
        req.flash('success', '登录成功！')
        res.redirect('/')
    })

})

router.get('/logout', checkLogin)
router.get('/logout', function (req, res) {
    req.session.user = null
    req.flash('success', '登出成功。')
    res.redirect('/')
})

function checkLogin(req, res, next) {
    if (!req.session.user) {
        req.flash('error', '您还没有登录')
        return res.redirect('/login')
    }
    next()
}

function checkNotLogin(req, res, next) {
    if (req.session.user) {
        req.flash('error', '您已登录')
        return res.redirect('/')
    }
    next()
}

module.exports = router;