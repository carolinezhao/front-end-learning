# 《Node.js 开发指南》学习笔记

> 理论知识见学习笔记，具体代码见 --> 对应的文件。

> 书中使用的 Node.js 版本较老 (0.7.5)，部分示例与最新版本有出入。

> 参考[API官方文档](https://nodejs.org/api/)和[CNode社区](http://cnodejs.org/)。

# Index

- [第2章 安装和配置 Node.js](#chapter2-install)
- [第3章 Node.js 快速入门](#chapter3-quick-start)
	- 3.1 开始
	- 3.2 异步式 I/O 与事件式编程
	- 3.3 模块和包
	- 3.4 调试
- [第4章 Node.js 核心模块](#chapter4-core-module)
	- 4.1 global
	- 4.2 util
	- 4.3 events
	- 4.4 fs
	- 4.5 HTTP server and client
- 第5章 使用 Node.js 进行 Web 开发 --> [microblog project](https://github.com/carolinezhao/microblog)
- [第6章 Node.js 进阶话题](#chapter6-advanced)

# Chapter2 Install

Node.js 的生态系统建立在遵循 POSIX 标准的操作系统上，如 Linux、Mac OS X、Solaris 等。0.6版本以后也支持 Windows。<br>
从[Node.js 官网](https://nodejs.org/)下载安装包，Node.js 和 npm 会被安装到 `/usr/local/bin` 目录下。

# Chapter3 Quick Start

## 3.1 开始

### Node.js 命令行工具

`node filename.js` 在文件所在目录下，运行脚本文件 (.txt 也可以) --> _01-hello.js_

`node --help` 显示帮助信息，常用命令

`node -e "console.log('Hello Node.js');"` 语句作为 node -e 的参数直接执行

REPL 模式 (Read-eval-print loop，输入-求值-输出 循环)<br>
`node` 进入 js 的交互式 shell<br>
`ctrl + d` 退出

### 创建 HTTP 服务器

Node.js 与 PHP 架构的区别

* 浏览器 - HTTP服务器 (Apache/IIS/Nginx) - PHP解释器
* 浏览器 - Node

用 Node.js 创建 HTTP 服务器:

1. 建立 app.js 文件 --> _02-app.js_
2. 运行 `node app.js`;
3. 在浏览器中访问 http://127.0.0.1:3000 查看输出。

127.0.0.1 是回送地址，指本地机，一般用来测试使用。<br>

### 开发调试

开发 Node.js 实现的 HTTP 应用时，修改代码后，必须先终止再重新运行才有效。这是因为 Node.js 只有在第一次引用到某部分时才会解析脚本文件，以后都会直接访问内存，避免重复载入。这种设计有利于提高性能，却不利于开发调试。<br>
希望在开发过程中立刻看到效果，可以使用 **supervisor**。它会监视代码的改动，自动重启 Node.js。<br>

`npm install -g supervisor` Mac 安装到系统目录，需要先提权 `sudo`

`supervisor filename.js` 运行文件

<br>

## 3.2 异步式 I/O 与事件式编程

### 3.2.1 阻塞与线程

**同步式I/O（Synchronous I/O）或阻塞式I/O（Blocking I/O）**

线程在执行中如果遇到磁盘读写或网络通信（统称为I/O操作），通常要耗费较长的时间，这时操作系统会剥夺这个线程的 CPU 控制权，使其暂停执行，同时将资源让给其他的工作线程，这种线程调度方式称为**阻塞**。<br>
当I/O操作完毕时，操作系统将这个线程的阻塞状态解除，恢复其对 CPU 的控制权，令其继续执行。<br>
阻塞模式下，一个线程只能处理一项任务，想提高吞吐量必须通过**多线程**。

**异步式I/O（Asynchronous I/O）或非阻塞式I/O（Non-blocking I/O）**

当线程遇到I/O操作时，不会以阻塞的方式等待其操作完成或数据返回，而只是将I/O请求发送给操作系统，继续执行下一条语句。<br>
当操作系统完成I/O操作时，以**事件**的形式通知执行I/O操作的线程，线程会在特定时候处理这个事件。<br>
为了处理异步I/O，线程必须有事件循环，不断地检查有没有未处理的事件，依次予以处理。<br>
非阻塞模式下，**一个线程**永远在执行计算操作，这个线程所使用的 CPU 核心利用率永远是 100%，I/O以事件的方式通知。

【参考书中的图表对比】

**Node.js 使用单线程、非阻塞的事件编程模式**

* 优势：少了多线程的开销。对操作系统来说，创建一个线程的代价十分昂贵：分配内存、列入调度，线程切换时执行内存换页，CPU 的缓存被清空，切换回来时还要重新从内存中读取信息，破坏了数据的局部性。
* 缺点：异步式编程不符合一般的程序设计思维，编码和调试都比较困难。好在已经有了很多专门解决异步式编程问题的库（async），见6.2.2节。

### 3.2.2 回调函数

用异步方式读取文件，通过**回调函数**实现。<br>
用同步方式读取文件，仅用于对比，不使用。<br>
--> _03-readfile.js 和 03-readfilesync.js_

### 3.2.3 事件

异步I/O操作在完成时都会发送一个事件到事件队列。事件由 EventEmitter 对象提供 (用法详见 4.3.1 节)。 --> _04-event.js_

**Node.js 的事件循环机制**

Node.js 程序由事件循环开始，到事件循环结束，所有的逻辑都是事件的回调函数。<br>
事件的回调函数在执行的过程中，可能会发出 I/O 请求或直接 emit 事件，执行完毕后再返回事件循环。<br>
然后检查事件队列中是否有未处理的事件，直到程序结束。<br>
Node.js 的事件循环对开发者不可见，由 libev 库实现，支持多种类型事件，均由 EventEmitter 封装。

注册事件监听器.on - 触发事件.emit - 运行监听器中的回调函数

<br>

## 3.3 模块和包

### 3.3.1 什么是模块

* 模块 Module
* 包 Package

模块和包是 Node.js 最重要的支柱，用于功能拆分、封装、组合。<br>
浏览器 js 中，脚本模块的拆分和组合通过 HTML 中的 `<script>` 实现。<br>
Node.js 中，通过 require 函数调用其他模块。

两者没有本质区别。可以把包理解为实现了某个功能模块的集合，用于发布和维护。<br>
一个 Node.js 文件 (.js/.json/编译过的C/C++扩展) 就是一个模块。<br>
比如，http 就是一个模块 --> _01-hello.js_

### 3.3.2 创建及加载模块

### 创建模块

创建一个文件，就是一个模块。<br>
只需关注：如何在其它文件中获取这个模块？Node.js 提供两个对象：

* exports 是模块公开的接口；
* require 用于从外部获取一个模块的接口，获取到的是该模块的 exports 对象。

--> _05-module.js 和 05-getmodule.js_

require 的文件不需要加后缀, 它会自动依以下顺序搜索：

* 同名 js 文件 
* 同名文件夹下的 index.js 文件

### 单次加载

require 不会重复加载模块，无论调用多少次，获得的模块都是同一个。<br>
如果多次调用，后边的结果会覆盖前边的。<br>
--> _06-loadmodule.js_

### 覆盖 exports

当只想把一个对象封装到模块中时，可以用自定义的对象替代 exports。<br>
exports 本身只是一个空对象 {}，专门用来声明接口，本质上是通过它为模块闭包的内部建了一个有限的访问接口。<br>
--> _07-singleobject.js 和 07-getsingleobject.js_

**闭包**：[本书附录和其他教程对闭包的讲解见 closure 系列](https://github.com/carolinezhao/front-end-learning/tree/master/js/function)

### 3.3.3 创建包

包是在模块基础上更深一步的抽象。将某个独立功能封装，用于开发、更新、依赖管理和版本控制。<br>
用 npm 解决包的发布和获取需求。

包是一个目录 (遵守 CommonJS 规范)

* package.json 包说明文件，必须在包的顶层目录下；
* 二进制文件应该在 bin 目录下；
* js 代码应该在 lib 目录下；
* 文档应该在 doc 目录下；
* 单元测试应该在 test 目录下。

### 作为文件夹的模块

模块与文件是一一对应的。模块不仅可以是js或二进制代码，还可以是一个文件夹。<br>
最简单的包，就是一个作为文件夹的模块。<br>
--> _08-getpackage.js 和 package文件夹_

包通常是一些模块的集合，在此基础上提供更高层的抽象，相当于提供一些固定接口的函数库。<br>
通过定制 package.json，可以创建更复杂、完善、规范的包用于发布。

### package.json

在项目目录中运行如下命令，根据交互式问答生成符合 npm 标准的 package.json 文件。

	npm init

.json 中的字段必须使用双引号。

	./package
		│
		├── package.json
		│
		├── index.js
		│
		└── lib
		    └── interface.js

Node.js 在调用某个包时，会首先检查包中 package.json 的 main 字段，将其作为包的接口模块。如果该文件或字段不存在，则会寻找 index.js 或 index.node 作为包的接口。

package.json 是 CommonJS 规范规定的用来描述包的文件。具体要求见书中，示例见下文件。<br>
--> _package.json_

### 3.3.4 包管理器

npm = node package manager<br>
[npm](https://www.npmjs.com/) 是 Node.js 官方提供的包管理工具，用于包的发布、传播、依赖控制，提供了命令行工具。

### 获取一个包：本地模式和全局模式

A. 把包安装到当前目录 (本地)

	npm install [package_name]

默认安装到当前目录下的 `node_modules` 子目录下。<br>
require 在加载模块时会搜索 `node_modules` 子目录，因此使用本地模式安装的包可以直接被引用。

* pro：避免不同程序依赖不同版本包的冲突问题；减轻包作者的 API 兼容性压力；
* con：同一个包被安装许多次。

B. 把包安装到全局

	npm install -g [package_name]

在 Linux/Mac 上全局安装需要获得 root 权限，即在命令前加 `sudo`。<br>
包安装到系统目录 `/usr/local/lib/node_modules/`。<br>
全局安装的包不能通过 require 直接获得，因为 require 不会搜索 `/usr/local/lib/node_modules/`。

* pro：提高程序的复用程度；避免多份副本；
* con：难以处理不同的版本依赖。

使用全局模式另有原因：本地模式不会注册 PATH 环境变量。<br>
比如，在命令行中运行 supervisor script.js，需要在 PATH 环境变量中注册 supervisor。<br>
本地模式下，包中的 bin 目录没有包含在 PATH 环境变量中，不能在命令行中调用。<br>
全局模式下，包安装到系统目录 `/usr/local/lib/node_modules/`，同时 package.json 文件中 bin 字段包含的文件会被链接到 `/usr/local/bin`。<br>
`/usr/local/bin` 是在 PATH 环境变量中默认定义的，因此就可以在 CL 中运行。

总结：

* 要把某个包作为工程运行的一部分时，使用本地模式安装；
* 要在命令行下使用，使用全局模式安装。

### 创建全局链接

	npm link [package_name]

在本地包和全局包之间创建符号链接。<br>
通过这个命令，全局模式安装的包也可以通过 require 使用。<br>

比如已经全局安装了 express，在工程的目录下运行命令：

	npm link express

执行后显示 `./node_modules/express -> /usr/local/lib/node_modules/express`<br>
可以在本地 `node_modules` 子目录中发现一个指向安装到全局的包的符号链接。从而可以把全局包当本地包来使用。<br>
--> _package文件夹_

此命令也可以将本地的包链接到全局。方法是在包目录 (package.json所在的目录) 中运行 `npm link` 命令。<br>
如果要开发一个包，通过这种方法便于在不同工程之间进行测试。

### 包的发布

暂略

## 3.4 调试

暂略

<br>

# Chapter4 Core Module

核心模块由一些精简而高效的库组成，为 Node.js 提供了基本的 API。

## 4.1 全局对象 global object

* 浏览器 js 中，全局对象是 window；
* Node.js 中，全局对象是 global，所有全局变量都是 global 对象的属性。

应使用 var 声明变量以避免引入全局变量，否则会污染命名空间。

### process

全局变量，是用于描述当前 Node.js 进程状态的对象，提供了一个与操作系统的简单接口。

常用的成员方法：

* process.argv 命令行参数数组。 --> _argv.js_
* process.stdout 标准输出流。<br>
  通常使用 console.log() 向标准输出打印字符，process.stdout.write() 函数提供更底层的接口。
* process.stdin 标准输入流。使用略。
* process.nextTick(callback) 为事件循环设置一项任务，Node.js 在下次事件循环响应时调用 callback。使用略。

### console

用于向标准输出流 (stdout) 或标准错误流 (stderr) 输出字符。

* console.log()
* console.error() 向标准错误流输出。 --> _readfile.js_
* console.trace() 向标准错误流输出当前的调用栈。使用略。

<br>

## 4.2 常用工具 util

核心模块，提供常用函数的集合，弥补核心 js 功能过于精简的不足。

### util.inherits

	util.inherits(constructor, superConstructor) 

实现对象间原型继承的函数。 --> _inherits.js_

js 的面向对象特性是基于原型的。js 没有提供对象继承的语言级别特性，而是通过原型复制实现的。

**原型**：[本书附录和其他教程对原型的讲解见 prototype 系列](https://github.com/carolinezhao/front-end-learning/tree/master/js/object)

### util.inspect

	util.inspect(object, [showHidden], [depth], [colors]) 

将任意对象转换为字符串，用于调试和错误输出。 --> _inspect.js 和 formsubmit.js_

* object 必选参数，要转换的对象。
* showHidden 若值为 true，输出更多隐藏信息。
* depth 最大递归层数。若不指定，默认递归2层。值为 null，完整遍历对象。
* colors 若值为 true，输出格式以 ANSI 颜色编码。

？？？但并不会简单地直接把对象转换为字符串，即使定义了 toString 也不会调用。

### 其他

[了解以下方法](http://nodejs.org/api/util.html)

util.isArray(), util.isRegExp(), util.isDate(), util.isError()

util.format(), util.debug()

<br>

## 4.3 事件驱动 events

events 是 Node.js 最重要的模块！

* 因为 Node.js 架构是事件式的，它提供了唯一的接口，是事件编程的基石。
* 不仅用于用户代码与 Node.js 下层事件循环的交互，还几乎被所有的模块依赖。

### 事件发射器

events 只提供一个对象：events.EventEmitter，其核心是事件发射与事件监听器功能的封装。 --> _events.js_

常用 API (其中 [] 为可选参数)

var emitter = new events.EventEmitter()

* .on(event, listener) 为指定事件 (字符串) 注册一个监听器 (回调函数)
* .emit(event, [arg1], [arg2], [...]) 发射事件和若干可选参数 (作为回调函数的参数)
* .once(event, listener) 为指定事件注册一个单次监听器，最多触发一次，触发后立即解除
* .removeListener(event, listener) 移除指定事件的某个监听器 (必须是已经注册过的)
* .removeAllListeners([event]) 移除所有事件的所有监听器 (可指定某个事件)

### error 事件

EventEmitter 定义了一个特殊的事件 error，遇到异常时通常会发射 error 事件。<br>
如果没有响应的监听器，Node.js 会把它当作异常，退出程序并打印调用栈。<br>
为了避免遇到错误后整个程序崩溃，要为会发射 error 事件的对象设置监听器。<br>
--> _error.js_

### 继承 EventEmitter

大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。<br>
包括 fs，net，http 在内，只要是支持事件响应的核心模块都是 EventEmitter 的子类。<br>
原因如下：(？不理解 ？怎么用)

* 具有某个实体功能的对象实现事件符合语义，事件的监听和发射应该是一个对象的方法。
* js 的对象机制是基于原型的，支持部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。

<br>

## 4.4 文件系统 fs

fs 模块是文件操作的封装。与其他模块不同的是，fs 模块中所有操作都提供了异步和同步两个版本。

### fs.readFile 异步读取

	fs.readFile(filename, [encoding], [callback(err,data)])

参数：文件名，字符编码 ('utf-8')，回调函数 (是否报错，文件内容)；<br>
如果指定了 encoding，data 是一个解析后的字符串，否则 data 是以 Buffer 形式表示的二进制数据。<br>
--> _readfile.js_

Node.js 的异步编程接口习惯是以函数的最后一个参数为回调函数，通常只有一个。<br>
回调函数实际参数中第一个是 err，其余参数是其他返回内容。<br>
如果没有错误，err 的值是 null 或 undefined；如果发生错误，err 是 Error 对象的实例。<br>
Node.js 中的异步函数大多没有返回值。

其他例子：3.2.2 回调函数 以异步和同步读取文件为例 --> _03-readfile.js 和 03-readfilesync.js_

### fs.readFileSync 同步读取

	fs.readFile(filename, [encoding])

读取到的文件内容以函数返回值的形式返回。<br>
如果发生错误，fs 会抛出异常，需要使用 try 和 catch 捕捉并处理异常。

### fs.open

	fs.open(path, flags, [mode], [callback(err,fd)])

fs.open 是 POSIX open 函数的封装。 --> _open.js_

flags 可以是以下值：

* r 读取模式打开
* r+ 读写模式打开
* w 写入模式打开，如果文件不存在则创建
* w+ 读写模式打开，如果文件不存在则创建
* a 追加模式打开，如果文件不存在则创建
* a+ 读取追加模式打开，如果文件不存在则创建

mode 用于创建文件时给文件指定权限，默认是 0666。<br>
文件权限是 POSIX 操作系统中对文件读取和访问权限的规范，用八进制数表示。<br>
比如 0754 表示文件所有者的权限是 7（读/写/执行），同组的用户权限是 5（读/执行），其他用户权限是 4（读），字符表示为 -rwxr-xr--。

回调函数会传递一个文件描述符 fd (非负整数，表示操作系统内核为当前进程所维护的打开文件的记录表索引)。

### fs.read

	fs.read(fd, buffer, offset, length, position, [callback(err, bytesRead, buffer)])

fs.read 是 POSIX read 函数的封装。相比 fs.readFile 提供了更底层的接口。<br>
fs.read 的功能是从指定的文件描述符 fd 中读取数据并写入 buffer 指向的缓冲区对象。 --> _read.js_

* var buffer = new Buffer(8) ？
* offset 是 buffer 的写入偏移量。？
* length 是要从文件中读取的字节数。
* position 是文件读取的起始位置，如果值为 null，则从当前文件指针的位置读取。
* 回调函数传递 bytesRead 和 buffer，分别表示读取的字节数和缓冲区对象。

_前后两个 buffer 是什么关系？前者传入回调函数？使用这个方法的意义是？_

除非必要，一般不使用这种方式读取文件。

fs 其他函数见书中 表4-1

<br>

## 4.5 HTTP 服务器与客户端

Node.js 标准库提供了 http 模块，封装了一个高效的 HTTP 服务器和一个简易的 HTTP 客户端。<br>
http.Server 是一个基于事件的 HTTP 服务器。<br>
http.request 是一个 HTTP 客户端工具，用于向 HTTP 服务器发起请求 (例如实现 Pingback 或内容抓取)。

### 4.5.1 HTTP 服务器

http.Server 是 http 模块中的 HTTP 服务器对象。用 Node.js 做的所有基于 HTTP 协议的系统，都是基于它实现的。<br>
它提供了一套封装级别很低的 API，仅仅是流控制和简单的消息解析，所有的高层功能都要通过它的接口实现。<br>
--> _02-app.js_

### http.Server 的事件

http.Server 是一个基于事件的 HTTP 服务器，所有请求都被封装为独立事件，只需要对它的事件编写响应函数即可实现 HTTP 服务器的所有功能。<br>

	var http = require('http')
	var server = new http.Server()
	server.on('事件', function(参数) {})

它继承自 EventEmitter，提供以下事件：

* **request** 在客户端请求到来时被触发。提供2个参数 req 和 res，分别是 [http.ServerRequest]() 和 [http.ServerResponse]() 的实例，表示请求和响应信息。<br> 更多 --> _02-app.js_
* connection 在 TCP 连接建立时被触发。提供1个参数 socket，是 net.Socket 的实例。connection 事件的粒度(?)大于 request，因为客户端在 Keep-Alive 模式下可能会在同一个连接内发送多次请求(?)。
* close 在服务器关闭时被触发。注意不是在用户连接断开时。

### http.ServerRequest

http.ServerRequest 是 HTTP 请求的信息，一般由 http.Server 的 request 事件发送，作为第一个参数传递，简称 request 或 req。<br>
http.ServerRequest 提供很多属性，见书中 表4-2。(用在哪里？)

HTTP 请求分为两部分：请求头 (Request Header)；请求体 (Request Body)。<br>
请求体可能较长，需要一定时间传输，以下3个事件用于控制其传输：

* data 在请求体数据到来时被触发。提供一个参数 chunk，表示接收到的数据。如果此事件没有被监听，请求体将会被抛弃。可能会被调用多次。
* end 在请求体数据传输完成时被触发，此后不会再有数据到来。
* close 在用户当前请求结束时被触发。不同于 end，如果用户强制终止了传输，还是调用 close。

--> _requestpost.js_

### 获取 GET 请求内容

GET 请求把所有内容编码到访问路径中，URL是完整的请求路径，包括了 `?` 后面的部分，可以手动解析后面的内容作为 GET 请求的参数。<br>
Node.js 的 `url 模块` 中的 parse 函数提供了这个功能。<br>
--> _requestget.js_

GET 是默认的请求方式。 --> _02-app.js_

### 获取 POST 请求内容

POST 请求的内容全部在请求体中。<br>
http.ServerRequest 并没有一个属性内容为请求体(?)，原因是等待请求体传输可能是一件耗时的工作，比如上传文件。<br>
很多时候不需要理会请求体的内容，恶意的 POST 请求会大大消耗服务器的资源。因此 Node.js 默认不解析请求体，需要的时候需手动解析。<br>
--> _requestpost.js_

### http.ServerResponse

http.ServerResponse 是返回给客户端的信息，决定了用户最终能看到的结果。<br>
它是由 http.Server 的 request 事件发送的，作为第二个参数传递，简称 response 或 res。<br>
http.ServerResponse 有三个重要的成员函数，用于返回响应头、响应内容、结束请求。

* response.writeHead(statusCode, [headers]) 向请求的客户端发送响应头。<br>statusCode 是 HTTP 状态码，如 200 (请求成功)，404 (未找到)。<br>headers 是一个类似关联数组的对象，表示响应头的每个属性。(解释得不太清楚)<br>该函数在一个请求内最多只能调用一次，如果不调用，则自动生成一个响应头。

* response.write(data, [encoding]) 向请求的客户端发送响应内容。<br>data 是一个 Buffer 或字符串，表示要发送的内容。如果是字符串，需要指定 encoding 说明它的编码方式，默认是 utf-8。<br>在 response.end 调用之前，response.write 可被多次调用。

* response.end([data], [encoding]) 结束响应，告知客户端所有发送已经完成。<br>所有要返回的内容发送完毕时，该函数必须被调用一次。如果不调用，客户端永远处于等待状态。<br>两个可选参数，意义同上。

--> _02-app.js_

### 4.5.2 HTTP 客户端

http.request 和 http.get，作为客户端向 HTTP 服务器发起请求。

	http.request(options, callback)

发起 HTTP 请求。两个参数：option 是一个类似关联数组的对象，表示请求的参数；callback 是请求的回调函数，传递一个参数，为 http.ClientResponse 的实例。

option 常用参数如下：

* host 请求网站的域名或 IP 地址。
* port 请求网站的端口，默认 80。
* method 请求方法，默认是 GET。
* path 请求的相对于根的路径，默认是“/”。QueryString 应该包含在其中。比如 /search?query=rabbit。
* headers 一个关联数组对象，为请求头的内容。

http.request 返回一个 http.ClientRequest 的实例。<br>
--> _clientrequest.js_

	http.get(options, callback)

http 模块提供了更简便的 http.get 方法用于处理 GET 请求。<br>
它是 http.request 的简化版，唯一区别在于 http.get 自动将请求方法设为 GET，且不需要手动调用 req.end。<br>
--> _clientget.js_

### http.ClientRequest

http.ClientRequest 是由 http.request 或 http.get 返回产生的对象，表示一个已经产生而且正在进行中的 HTTP 请求。<br>
它提供一个 response 事件，即 http.request 或 http.get 第二个参数指定的回调函数的绑定对象。<br>
--> _clientget.js 和 clientrequest.js_

http.ClientRequest 像 http.ServerResponse 一样也提供了 write 和 end 函数，用于向服务器发送请求体，通常用于 POST、PUT 等操作。<br>
所有内容结束后必须调用 end 函数以通知服务器，否则请求无效。

其他函数：
* request.abort() 终止正在发送的请求。
* request.setTimeout(timeout, [callback]) 设置请求超时时间，timeout 为毫秒数。请求超时后，callback 会被调用。

### http.ClientResponse

http.ClientResponse 提供三个事件 data, end 和 close，分别在数据到达、传输结束和连接结束时触发，参考 http.ServerRequest 的内容。

提供一些属性，用于表示请求的结果状态：
* statusCode HTTP 状态码，如 200，404
* httpVersion HTTP 协议版本
* headers HTTP 请求头
* trailers HTTP 请求尾 (不常见)

提供几个特殊的函数：
* response.setEncoding([encoding]) 设置默认的编码，当 data 事件被触发时，数据会以 encoding 编码。默认值 null (不编码)，以 Buffer 形式存储。常用编码 utf-8。
* response.pause() 暂停接收数据和发送事件，方便实现下载功能。
* response.resume() 从暂停的状态中恢复。

<br>

# Chapter6 Advanced