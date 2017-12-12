## Node.js 命令行工具

`node filename.js` 在文件所在目录下，运行脚本文件

`node --help` 帮助信息

`node -e "console.log('Hello Node.js');"` 语句作为 node -e 的参数直接执行

REPL (Read-eval-print loop) 输入-求值-输出 循环
`node` 进入 Node.js 交互模式 (使用JS）
`ctrl + d` 退出


## HTTP 服务器
Node.js 与 PHP 架构的区别

* 浏览器 - HTTP服务器(Apache，IIS，etc.) - PHP解释器
* 浏览器 - Node

用 Node.js 创建 HTTP 服务器:

1. 建立 app.js 文件；
2. 运行 `node app.js`;
3. 在浏览器中访问 http://127.0.0.1:3000

127.0.0.1是回送地址，指本地机，一般用来测试使用。
其它注释见app.js