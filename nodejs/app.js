// 3.1.3 HTTP 服务器简介re
var http = require('http');
// http 是 Node.js 的一个核心模块，其内部用 C++ 实现，外部用 js 封装。
// 通过 require 函数获取这个模块，才能使用其中的对象。

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    res.write('<h1>Node.js</h1>');
    res.end('<p>Hello Rabbit</p>');
}).listen(3000);
console.log('HTTP server is listening at port 3000.');

// 这个程序调用了 Node.js 提供的 http 模块，对所有 HTTP 请求答复同样的内容并监听 3000 端口。
// 运行这个脚本后，它不像 hello.js 一样运行后立刻退出，而是一直等待，按下 ctrl+c 才会退出。
// 这是因为 listen 函数中创建了事件监听器，使 Node.js 进程不会退出事件循环。（不太懂，后面会讲）
// 想要在修改后立刻看到结果，而不是退出再运行，使用 supervisor，见.md文件详述。

/*==========================
4.5.1 HTTP 服务器
http.createServer 创建了一个 http.Server 的实例，将一个函数作为 HTTP 请求处理函数。
这个函数接受两个参数，分别是请求对象(req)和响应对象(res)。
res 显式地写回了？？响应代码 200（表示请求成功）
指定响应头 'Content-type': 'text/html'
写入响应体 '<h1>Node.js</h1>'
res.end 结束并发送；
最后调用 listen 函数，启动服务器并监听 3000 端口。

http.Server 的事件
request 是最常用的事件，http 提供了一个捷径：http.createServer([requestListener]) 
功能是创建一个 HTTP 服务器并将 requestListener 作为 request 事件的监听函数。

显式的实现方法为：
var server = new http.server();
server.on('request', function(req,res) {
    ......
});
server.listen(3000);
==========================*/
