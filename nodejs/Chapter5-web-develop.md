> Chapter2-4 见 [README.md](https://github.com/carolinezhao/front-end-learning/blob/master/nodejs/README.md)

> 本章内容需参考[Express 官网](http://expressjs.com/)使用最新命令。书中使用的版本过旧，很多命令已不再支持。

# Chapter5 Web Development

## 5.1 背景知识

Node.js 和 PHP、Perl、ASP、JSP 一样，都是为了由服务器动态生成 HTML 页面。

静态的局限：
* 可扩展性非常有限，无法与用户有效交互。
* 维护大量相似内容的页面 (如产品介绍) 效率低下。

动态网页的历程：
* Perl 和 CGI：在 Perl 程序中输出 HTML，由 HTTP 服务器调用 Perl，结果返回给客户端。
* 以模板为中心的架构：PHP、ASP、JSP，以 HTML 为主的模板中插入程序代码。
* 基于 MVC 架构的平台：Ruby on Rails, Django, Zend Framework。

MVC = Model-View-Controller<br>
MVC 是一种软件的设计模式，把一个复杂的软件工程分解为三个层面：
* 模型：对象及其数据结构的实现，通常包含数据库操作。
* 视图：用户界面，HTML 的组织结构。
* 控制器：处理用户请求和数据流、复杂模型，将输出传递给视图。

Web 开发架构对比见书中 表5-1

Node.js 和其他语言的区别：
* 提供 http 模块，本身可以作为 HTTP 服务器。
* 原始封装程度较低，很多功能需要自己做，或借助第三方框架。

### 使用 http 模块

例：以 POST 的方式发送数据表单 (书中给的例子不全)

--> _formsubmit.js_

### Express 框架

<br>

## 5.2 快速开始 (新版本与书中差异很大)

### 安装 Express

Express 提供 Quick Start 工具，功能是建立一个网站最小的基础框架。为了使用这个工具，需要全局模式下的 Express。

    $ npm install -g express

安装在 root 路径下：`/usr/local/lib/node_modules/express`\
在终端中打开：`open /usr/...`

在命令行中使用 Express 相关命令需要安装命令行工具。\
The [express-generator](http://expressjs.com/en/starter/generator.html) package installs the express command-line tool.

    $ npm install express-generator -g

### 建立工程

Express 初始化一个项目时需要指定模板引擎，默认支持 jade 和 ejs。现在还有pug？

ejs = Embedded JavaScript 是一个标签替换引擎。

create an Express app named microblog. The app will be created in a folder named microblog in the current working directory and the view engine will be set to ejs:

    $ express --view=ejs microblog

生成的文件结构

    ./microblog
        ├── package.json
        ├── app.js
        ├── bin
        ├── views
        ├── routes
        └── public

change directory and install dependencies

    $ cd microblog
    $ npm install

运行无参数的 npm install，会检查当前目录下的 package.json，并自动安装所有指定的依赖。\
"dependencies" 属性中指定了 "ejs": "~2.5.7" 和 "express": "~4.16.0"\
Express 安装到了本地，文件中可以通过 require 使用。

增加的文件

    ./microblog
        ├── package-lock.json
        └── node_modules
                ├── ejs
                ├── express
                └── ...

### 启动服务器

用 Express 实现的网站实际上就是一个 Node.js 程序，因此可以直接运行。

run the app

    $ DEBUG=microblog:* npm start

运行后显示：`microblog:server Listening on port 3000`

在浏览器中访问 `http://127.0.0.1:3000/` 可以看到欢迎页面。

修改代码后需要重启服务器。想实现修改后自动重启，使用 supervisor。(如何使用？)

此时服务器是运行在开发模式下 development mode。6.3 节介绍如何在生产环境下部署。

### 工程的结构

    ./microblog
        ├── app.js
        ├── bin
        ├── views
        │       ├── index.ejs
        │       └── error.ejs
        ├── routes
        │       ├── index.js
        │       └── users.js
        ├── public
        │       ├── javascripts
        │       ├── stylesheets
        │       └── images
        ├── package.json
        ├── package-lock.json
        └── node_modules
                ├── ejs
                ├── express
                ├── qs
                ├── mime
                └── ...

app.js 工程的入口

routes/index.js 路由文件，相当于控制器，用于组织展示内容。

index.ejs 模板文件，即 routes/index.js 中调用的模板。\
基础是 HTML，包含的标签 (如<%= title %>) 是为了显示引用的变量，即 res.render 函数第二个参数传入的对象的属性。(见 line 6)
旧版：只显示 layouts.ejs 中 `<body><%- body %></body>` 的内容。
？？？css 路径是怎么回事

layout.ejs（现在没有了）
旧版：显示页面框架，即共有的部分--除了 `<%- body %>` 内容之外的部分。

<br>

## 5.3 路由控制

### 工作原理

访问 `http://127.0.0.1:3000/`，浏览器会向服务器发送请求。\
> 参考《图解 HTTP》第3章。

上例中发送两次请求：
127.0.0.1
style.css

浏览器发起请求，由路由控制器接收，然后根据不同的路径定向到不同的控制器，控制器处理用户的具体请求 (模板引擎，静态文件，对象模型)。
最后控制器返回给浏览器，完成一次请求。

### 创建路由规则

获得路由，使用路由 --> 参考 app.js

    var indexRouter = require('./routes/index');
    app.use('/', indexRouter);

    var usersRouter = require('./routes/users');
    app.use('/users', usersRouter);

app.use 是路由规则创建函数，第一个参数是请求路径，第二个参数是回调函数，在路由规则被触发时调用。

--> index.js 回调函数的参数 req res next 请求信息，响应信息，第三个是？

    router.get('/', function(req, res, next) {
        res.render('index', { title: 'Express' });
    });

host + app.use 中的第一个参数，就是访问它的路由地址
比如访问第二个路由 `http://127.0.0.1:3000/users`

### 路径匹配

### REST 风格的路由规则

### 控制权转移

<br>

## 5.4 模板引擎

<br>

## 5.5 建立微博网站
