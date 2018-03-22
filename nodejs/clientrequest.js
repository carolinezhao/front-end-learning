// 不理解，没有得到预期结果

// 通过 http.request 发送 POST 请求
var http = require('http')
var querystring = require('querystring')

var contents = querystring.stringify({
    name: 'byvoid',
    email: 'byvoid@byvoid.com',
    address: 'Zijing 2#, THU'
})

// var options = {
//     host: 'www.byvoid.com',
//     path: '/application/node/post.php',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Content-Length': 'contents.length'
//     }
// }

var options = {
    host: 'http://127.0.0.1:3000/',
    port: 3000,
    method: 'POST',
    headers: {
        'Content-Type': 'text/html',
        'Content-Length': 'contents.length'
    }
}

var req = http.request(options, function(res) {
    res.setEncoding('utf-8')
    res.on('data', function(data) {
        console.log(data)
    })
})

req.write(contents)
req.end()