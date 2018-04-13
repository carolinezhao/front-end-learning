var express = require('express')
var app = express.createServer()
app.use(express.bodyParser())
// 加载 express.bodyParser() 就能通过 req.body 获取 POST 数据。
app.all('/',function(req, res) {
    res.send(req.body.title + req.body.content)
})
app.listen(3000)