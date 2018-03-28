var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
    // 调用模板解析引擎，翻译名为 index 的模板 (.ejs)，并传入一个对象作为参数，这个对象只有一个属性，即 title:'Express'。
});

// 目前写在 users.js 中
// router.get('/u/:user', function (req, res) {})

router.post('/post', function (req, res) {

})

router.get('/reg', function (req, res) {

})

router.post('/reg', function (req, res) {

})

router.get('/login', function (req, res) {

})

router.post('/login', function (req, res) {

})

router.get('/logout', function (req, res) {

})

module.exports = router;