# 第3章 Node.js 快速入门

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
具体内容见 app.js

### 开发调试

开发 Node.js 实现的 HTTP 应用时，修改代码后，必须先终止再重新运行才有效。这是因为 Node.js 只有在第一次引用到某部分时才会解析脚本文件，以后都会直接访问内存，避免重复载入。这种设计有利于提高性能，却不利于开发调试。<br>
希望在开发过程中立刻看到效果，可以使用 **supervisor**。它会监视代码的改动，自动重启 Node.js。<br>

`npm install -g supervisor` Mac 安装到系统目录，需要先提权 `sudo`

`supervisor filename.js` 运行文件

---

## 3.2 异步式 I/O 与事件式编程

### 3.2.1 阻塞与线程

**同步式I/O（Synchronous I/O）或阻塞式I/O（Blocking I/O）**<br>

线程在执行中如果遇到磁盘读写或网络通信（统称为I/O操作），通常要耗费较长的时间，这时操作系统会剥夺这个线程的 CPU 控制权，使其暂停执行，同时将资源让给其他的工作线程，这种线程调度方式称为**阻塞**。<br>
当I/O操作完毕时，操作系统将这个线程的阻塞状态解除，恢复其对 CPU 的控制权，令其继续执行。<br>
阻塞模式下，一个线程只能处理一项任务，想提高吞吐量必须通过多线程。

**异步式I/O（Asynchronous I/O）或非阻塞式I/O（Non-blocking I/O）**<br>

当线程遇到I/O操作时，不会以阻塞的方式等待其操作完成或数据返回，而只是将I/O请求发送给操作系统，继续执行下一条语句。<br>
当操作系统完成I/O操作时，以事件的形式通知执行I/O操作的线程，线程会在特定时候处理这个事件。<br>
为了处理异步I/O，线程必须有事件循环，不断地检查有没有未处理的事件，依次予以处理。<br>
非阻塞模式下，一个线程永远在执行计算操作，这个线程所使用的 CPU 核心利用率永远是 100%，I/O以事件的方式通知。

优势：少了多线程的开销。对操作系统来说，创建一个线程的代价十分昂贵：分配内存、列入调度，线程切换时执行内存换页，CPU 的缓存被清空，切换回来时还要重新从内存中读取信息，破坏了数据的局部性。<br>
缺点：异步式编程不符合一般的程序设计思维，编码和调试都比较困难。好在已经有了很多专门解决异步式编程问题的库（async），见6.2.2节。

### 3.2.2 回调函数

用异步方式读取文件，通过**回调函数**实现。<br>
用同步方式读取文件，仅用于对比。<br>
【参考 readfile.js 和 readfilesync.js】

### 3.2.3 事件

【参考 event.js】<br>
Node.js 的事件循环机制

---

## 3.3 模块和包

* 模块 Module
* 包 Package

两者没有本质区别。<br>
一个 Node.js 文件 (.js/.json/编译过的C/C++扩展) 就是一个模块。<br>
比如，http就是一个模块【参考app.js中的使用】

模块和包是 Node.js 最重要的支柱，用于功能拆分、封装、组合。<br>
浏览器js中，脚本模块的拆分和组合是用HTML中的 `<script>` 来实现。

### 创建模块
创建一个文件，就是一个模块。<br>
如何在其它文件中获取这个模块？Node.js 提供两个对象：

* exports 模块公开的接口；
* require 从外部获取一个模块的接口，即获取到模块的 exports 对象。

【参考 module.js 和 getmodule.js】

### 单次加载
require 不会重复加载模块，无论调用多少次，获得的模块都是同一个。<br>
如果多次调用，后边的结果会覆盖前边的。<br>
【参考 loadmodule.js】

### 覆盖 exports
当只想把一个对象封装到模块中时，可以用自定义的对象替代 exports。<br>
【参考 singleobject.js 和 getsingleobject.js】

### 3.3.3 创建包
包是在模块基础上更深一步的抽象。将某个独立功能封装，用于开发、更新、依赖管理和版本控制。用 npm 解决包的发布和获取需求。

包是一个目录 (尽量遵守 CommonJS 规范)

* package.json 包说明文件，必须在包的顶层目录下；
* 二进制文件应该在 bin 目录下；
* js 代码应该在 lib 目录下；
* 文档应该在 doc 目录下；
* 单元测试应该在 test 目录下。

### 作为文件夹的模块
模块与文件是一一对应的。文件不仅可以是js或二进制代码，还可以是一个文件夹。<br>
最简单的包，就是一个作为文件夹的模块。<br>
【参考 getpackage.js 和 package文件夹】<br>
包通常是一些模块的集合，在此基础上提供更高层的抽象，相当于提供一些固定接口的函数库。

### package.json
.json 中的字段必须使用双引号。

	/package
	|
	|--- package.json
	|
	|--- index.js
	|
	|--- /lib
	|     |
	|     |---interface.js

Node.js 在调用某个包时，会首先检查包中 package.json 的 main 字段，将其作为包的接口模块。如果该文件或字段不存在，则会寻找 index.js 或 index.node 作为包的接口。

package.json 是规范规定的用来描述包的文件。<br>
【参考 package.json 实例】

***

### 3.3.4 包管理器
npm = node package manager<br>
npm 是 Node.js 包的标准发布平台，用于包的发布、传播、依赖控制，提供了命令行工具。

### 获取一个包：本地模式和全局模式
A. 把包安装到当前目录(本地)

* 避免不同程序依赖不同版本包的冲突问题；减轻包作者的 API 兼容性压力；
* 同一个包被安装许多次。

`npm install [package_name]`<br>
默认安装到当前目录下的 `node_modules` 子目录下。<br>
require 在加载模块时会搜索 `node_modules` 子目录，因此使用本地模式安装的包可以直接被引用。

B. 把包安装到全局

* 提高程序的复用程度；避免多份副本；
* 难以处理不同的版本依赖。

`npm install -g [package_name]`<br>
比如在安装 supervisor 时就用了全局安装。<br>
全局安装的包不能通过 require 直接获得。

多数时候使用全局模式另有原因：本地模式不会注册 PATH 环境变量。<br>
在命令行中运行 supervisor script.js，需要在PATH环境变量中注册 supervisor。<br>
本地模式下，包中的bin目录没有包含在PATH环境变量中，不能在命令行中调用。<br>
全局模式下，包安装到系统目录，`/usr/local/lib/node_modules/`，同时 package.json 文件中 bin 字段包含的文件会被链接到 `/usr/local/bin`。<br>
`/usr/local/bin`是在PATH环境变量中默认定义的，因此就可以在cl中运行。

总结：

* 要把某个包作为工程运行的一部分时，使用本地模式安装；
* 要在命令行下使用，使用全局模式安装。

### 创建全局链接
`npm link` 在本地包和全局包之间创建符号链接。<br>
通过这个命令，全局模式安装的包也可以通过 require 使用。<br>
比如已经全局安装了 express，在工程的目录下运行命令：<br>
`npm link express`<br>
`./node_modules/express -> /usr/local/lib/node_modules/express`<br>
可以在 `node_modules` 子目录中发现一个指向安装到全局的包的符号链接。从而可以把全局包当本地包来使用。<br>
【参考 package 文件夹下的 `node_modules` 子目录】

此命令也可以将本地的包链接到全局。方法是在包目录(package.json所在的目录)中运行 `npm link` 命令。<br>
如果要开发一个包，通过这种方法便于在不同工程之间进行测试。<br>
【参考 暂无】

### 包的发布
暂略

## 3.4 调试
暂略

---

# 第4章 Node.js 核心模块
核心模块由一些精简而高效的库组成，为 Node.js 提供了基本的 API。

## 4.1 全局对象

### 全局对象与全局变量

### process

### console

## 4.2 常用工具 util

### util.inherits
### util.inspect

## 4.3 事件驱动 events

### 事件发射器
### error 事件
### 继承 EventEmitter

## 4.4 文件系统 fs

### fs.readFile
### fs.readFileSync
### fs.open
### fs.read

## 4.5 HTTP 服务器与客户端
Node.js 标准库提供了 http 模块，封装了一个高效的 HTTP 服务器和一个简易的 HTTP 客户端。<br>
http.Server 是一个基于事件的 HTTP 服务器。<br>
http.request 是一个 HTTP 客户端工具，用于向 HTTP 服务器发起请求。

### HTTP 服务器
http.Server 是 http 模块中的 HTTP 服务器对象。用 Node.js 做的所有基于 HTTP 协议的系统，都是基于它实现的。<br>
【参考 app.js】

#### http.Server 的事件
http.Server 是一个基于事件的 HTTP 服务器，所有的请求都被封装为独立的事件，只需要对它的事件编写响应函数即可实现 HTTP 服务器的所有功能。它继承自 EventEmitter，提供以下事件：

* request: 在客户端请求到来时被触发。提供两个参数req和res，分别是 http.ServerRequest 和 http.ServerResponse 的实例。【参考 app.js】
* connection
* close

#### http.ServerRequest
HTTP 请求的信息，一般由 http.Server 的 request 事件发送，作为第一个参数传递，简称 req。提供很多属性。<br>
请求分为两部分：请求头 Request Header；请求体 Request Body。<br>
请求体可能较长，需要一定时间传输，有3个事件用于控制其传输。

* data
* end
* close

#### 获取 GET 请求内容
由于 GET 请求直接被嵌入在路径中，URL是完整的请求路径，包括了？后面的部分。<br>
Node.js 的 url 模块中的 parse 函数用于解析后面的内容。<br>
【参考 requestget.js】

#### 获取 POST 请求内容