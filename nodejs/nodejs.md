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

package.json 是规范规定的用来描述包的文件。
【参考 package.json 实例】

***

### 3.3.4 包管理器
npm = node package manager
npm 是 Node.js 包的标准发布平台，用于包的发布、传播、依赖控制，提供了命令行工具。

### 获取一个包：本地模式和全局模式
A. 把包安装到当前目录(本地)

* 避免不同程序依赖不同版本包的冲突问题；减轻包作者的 API 兼容性压力；
* 同一个包被安装许多次。

`npm install [package_name]`
默认安装到当前目录下的 `node_modules` 子目录下。
require 在加载模块时会搜索 `node_modules` 子目录，因此使用本地模式安装的包可以直接被引用。

B. 把包安装到全局

* 提高程序的复用程度；避免多份副本；
* 难以处理不同的版本依赖。

`npm install -g [package_name]`
比如在安装 supervisor 时就用了全局安装。
全局安装的包不能通过 require 直接获得。

多数时候使用全局模式另有原因：本地模式不会注册 PATH 环境变量。
在命令行中运行 supervisor script.js，需要在PATH环境变量中注册 supervisor。
本地模式下，包中的bin目录没有包含在PATH环境变量中，不能在命令行中调用。
全局模式下，包安装到系统目录，`/usr/local/lib/node_modules/`，同时 package.json 文件中 bin 字段包含的文件会被链接到 `/usr/local/bin`。
`/usr/local/bin`是在PATH环境变量中默认定义的，因此就可以在cl中运行。

总结：

* 要把某个包作为工程运行的一部分时，使用本地模式安装；
* 要在命令行下使用，使用全局模式安装。

### 创建全局链接
`npm link` 在本地包和全局包之间创建符号链接。
通过这个命令，全局模式安装的包也可以通过 require 使用。
比如已经全局安装了 express，在工程的目录下运行命令：
`npm link express`
`./node_modules/express -> /usr/local/lib/node_modules/express`
可以在 node_modules 子目录中发现一个指向安装到全局的包的符号链接。从而可以把全局包当本地包来使用。
【参考 package 文件夹下的 node_modules 子目录】

此命令也可以将本地的包链接到全局。方法是在包目录(package.json所在的目录)中运行 `npm link` 命令。
如果要开发一个包，通过这种方法便于在不同工程之间进行测试。
【参考 暂无】