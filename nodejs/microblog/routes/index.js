var express = require('express');
var router = express.Router();

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

router.get('/reg', function (req, res) {
    res.render('reg', {})
})

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

router.get('/login', function (req, res) {
    res.render('login', {})
})

router.post('/login', function (req, res) {

})

router.get('/logout', function (req, res) {
    res.render('logout', {})
})

module.exports = router;