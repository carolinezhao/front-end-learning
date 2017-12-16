var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);

/*==================
操作：
终端中
supervisor filename.js //开发调试工具
node //执行

在浏览器中输入
http://127.0.0.1:3000/user?name=rabbit&email=rabbit@gmail.com

浏览器返回的结果
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?name=rabbit&email=rabbit@gmail.com',
  query: { name: 'rabbit', email: 'rabbit@gmail.com' },
  pathname: '/user',
  path: '/user?name=rabbit&email=rabbit@gmail.com',
  href: '/user?name=rabbit&email=rabbit@gmail.com' }

通过 url.parse，原始的 path 被解析为一个对象，其中 query 就是 GET 请求的内容，路径则是 pathname。
==================*/