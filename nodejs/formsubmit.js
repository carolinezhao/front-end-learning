var http = require('http')
var querystring = require('querystring')
var util = require('util')

http.createServer(function (req, res) {
    var post = ''
    req.on('data', function (chunk) {
        post += chunk
    })
    req.on('end', function () {
        post = querystring.parse(post)       
        // console.log(req) // 了解 req 的全部属性
        console.log(post)
        if (req.method === 'GET') {
            res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Form</title>
        </head>
        <body>
            <form method="post" action="http://127.0.0.1:3000">
                <input type="text" name="title">
                <textarea name="content"></textarea>
                <input type="submit">
            </form>
        </body>
        </html>`)
        }
        if (req.method === 'POST') {
            // res.write(post.title)
            // res.write(post.content)
            // 如果 post 是 undefined, 不用 inspect (转换为字符串) 就会报错。
            res.write(util.inspect(post.title))
            res.write(util.inspect(post.content))
        }
        res.end()
        // res.end(util.inspect(post))   
    })
}).listen(3000)
console.log('HTTP server is listening at port 3000.');