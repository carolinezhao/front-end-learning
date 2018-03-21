var http = require('http')
var querystring = require('querystring')
var util = require('util')

// 这只是一个帮助理解的示例。
// 不要在真正的生产应用中使用这种简单方法来获取 POST 请求，因为它有严重的效率问题和安全问题。
http.createServer(function(req, res) {
    var post = ''
    req.on('data', function(chunk) {
        post += chunk
    })
    req.on('end', function() {
        post = querystring.parse(post)
        res.end(util.inspect(post))
    })
}).listen(3000)

// 定义一个 post 变量，用于在闭包中暂存请求体的信息。
// 通过 req 的 data 事件监听函数，每当接收到请求体的数据，就累加到 post 变量中。
// 在 end 事件触发后，通过 querystring.parse 将 post 解析为真正的 POST 请求格式，然后向客户端返回。