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

router.get('/u/:user', function (req, res) {
    User.get(req.params.user, function (err, user) {
        if (!user) {
            req.flash('error', '用户不存在')
            return res.redirect('/')
        }
        Post.get(user.name, function (err, posts) {
            if (err) {
                req.flash('error', err)
                return res.redirect('/')
            }
            res.render('user', {
                title: user.name,
                post: posts
            })
        })
    })
})

router.post('/reg', checkLogin)
router.post('/post', function (req, res) {
    var currentUser = req.session.user
    var post = new Post(currentUser.name, req.body.post)
    post.save(function (err) {
        if (err) {
            req.flash('error', err)
            return res.redirect('/')
        }
        req.flash('success', '发布成功')
        res.redirect('/u/' + currentUser.name)
    })
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
        password: password // 把散列值形式的密码存入数据库
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
    console.log(req.body) // 输入的用户名和密码

    // 生成密码的散列值
    var md5 = crypto.createHash('md5')
    var password = md5.update(req.body.password).digest('base64')
    console.log(password) // 登录时输入的密码变为散列值

    User.get(req.body.username, function (err, user) {
        console.log(user) // 数据库保存的用户名和密码(散列值)
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