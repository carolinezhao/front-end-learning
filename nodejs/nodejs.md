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


## 开发调试
开发 Node.js 实现的HTTP应用时，修改代码后，必须先终止再重新运行才有效。这是因为 Node.js 只有在第一次引用到某部分时才会解析脚本文件，以后都会直接访问内存，避免重复载入。这种设计有利于提高性能，却不利于开发调试。
希望在开发过程中立刻看到效果，可以使用 supervisor。
`npm install -g supervisor`
此命令需要先提权 `sudo`

## 事件

## 3.3 模块和包
* 模块 Module
* 包 Package

两者没有本质区别。
一个 Node.js 文件(.js/.json/编译过的C/C++扩展)就是一个模块。
比如，http就是一个模块【参考app.js中的使用】

模块和包是 Node.js 最重要的支柱，用于功能拆分、封装、组合。
浏览器js中，脚本模块的拆分和组合是用HTML中的`<script>`来实现。

### 创建模块
创建一个文件，就是一个模块。
如何在其它文件中获取这个模块？
Node.js 提供两个对象：

* exports 模块公开的接口；
* require 从外部获取一个模块的接口，即获取到模块的 exports 对象。

【参考 module.js 和 getmodule.js】

### 单次加载
require 不会重复加载模块，无论调用多少次，获得的模块都是同一个。
如果多次调用，后边的结果会覆盖前边的。
【参考 loadmodule.js】

### 覆盖 exports
当只想把一个对象封装到模块中时，可以用自定义的对象替代 exports。
【参考 singleobject.js 和 getsingleobject.js】

***

### 3.3.3 创建包
包是在模块基础上更深一步的抽象。将某个独立功能封装，用于开发、更新、依赖管理和版本控制。用 npm 解决包的发布和获取需求。

包是一个目录 (尽量遵守 CommonJS 规范)

* package.json 包说明文件，必须在包的顶层目录下；
* 二进制文件应该在 bin 目录下；
* js 代码应该在 lib 目录下；
* 文档应该在 doc 目录下；
* 单元测试应该在 test 目录下。

### 作为文件夹的模块
模块与文件是一一对应的。文件不仅可以是js或二进制代码，还可以是一个文件夹。
最简单的包，就是一个作为文件夹的模块。
【参考 getpackage.js 和 package文件夹】
包通常是一些模块的集合，在此基础上提供更高层的抽象，相当于提供一些固定接口的库函数。



