var http = require('http');

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