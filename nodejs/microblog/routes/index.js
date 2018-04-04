var express = require('express');
var router = express.Router();
var crypto = require('crypto'); // Node.js 的核心模块，加密并生成散列
var User = require('../models/user.js'); // 用户模型
var Post = require('../models/post.js'); // 发布模型

/* GET home page. */
router.get('/', function (req, res, next) {
    Post.get(null, function (err, posts) {
        if (err) {
            posts = []
        }
        // 调用模板解析引擎，翻译名为 index 的模板 (.ejs)，并传入一个对象作为参数。            
        res.render('index', {
            title: 'Microblog',
            posts: posts // 读取所有用户微博传递给 posts
        });
    })    
});

router.get('/u/:user', function (req, res) {
    User.get(req.params.user, function (err, user) {
        if (!user) {
            req.flash('error', '用户不存在')
            return res.redirect('/')
        }
        // 如果用户存在，则从数据库中获取该用户的微博，通过 posts 属性传递给 user 视图
        Post.get(user.name, function (err, posts) {
            if (err) {
                req.flash('error', err)
                return res.redirect('/')
            }
            res.render('user', {
                title: user.name,
                posts: posts
            })
        })
    })
})

router.post('/post', checkLogin)
router.post('/post', function (req, res) {
    var currentUser = req.session.user // 获取当前用户信息
    var post = new Post(currentUser.name, req.body.post) // 获取用户发表内容，建立 Post 对象
    post.save(function (err) { // 调用 save 方法存储信息
        if (err) {
            // console.log(JSON.stringify(err)) // object
            req.flash('error', '发布失败')
            return res.redirect('/')
        }
        req.flash('success', '发布成功')
        res.redirect('/u/' + currentUser.name)
    })
})

router.get('/reg', checkNotLogin)
router.get('/reg', function (req, res) {
    res.render('reg', {
        title: 'Signin'
    })
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
        title: 'Login'
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