var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// 这里的 / 啥意思？
// 只能有一个 send？

// 自定义, 没有显示。怎么在同一个路由里定义多个函数？
router.get('/', function(req, res, next) {
  res.send('The time is ' + new Date().toString())
})

module.exports = router;
