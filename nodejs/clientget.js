// 不理解

var http = require('http')

http.get({
    host: 'www.byvoid.com'
}, function (res) {
    res.setEncoding('utf-8')
    res.on('data', function (data) {
        console.log(data)
    })
})

// 也可以显式地绑定这个事件的监听函数
var req = http.get({
    host: 'www.byvoid.com'
})

req.on('response', function (res) {
    res.setEncoding('utf-8')
    res.on('data', function (data) {
        console.log(data)
    })
})