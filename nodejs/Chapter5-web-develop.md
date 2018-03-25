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

Node.js 不需要另外的 HTTP 服务器，减少了一层抽象，给性能带来提升，但同时也提高了开发难度。<br>
书中对比了通过 Node.js 和 PHP 实现以 POST 方式发送数据表单的差异：PHP 只需写两行代码，而 Node.js 需要创建 http 实例并手动编写事件监听器 (见下例)。<br>
因为 PHP 已经将这些工作完全封装好，只提供了一个高层的接口；而 Node.js 的 http 模块提供的是底层的接口。<br>
Node.js 虽然提供了 http 模块，却不是让人用来直接进行 web 开发的。http 模块仅仅是一个 HTTP 服务器内核的封装，可以用它做任何 HTTP 服务器能做的事，不仅可以做网站，还可以实现 HTTP 代理服务器。如果想用它直接开发网站，就必须手动实现所有的内容 (小到 POST 请求，大到 Cookie，会话管理...)，这就相当于做好了一个完整的框架。实际开发中，没必要重复发明轮子，可以使用已有框架。

--

例：用 Node.js 实现以 POST 方式发送数据表单 --> _formsubmit.js_ [重要！]

应向表单本身所在的服务器提交表单，即打开表单的地址和表单中 action 的参数应该是一致的域名和端口。用 node 生成服务器，那么在浏览器中打开的表单应该就在该服务器的 IP 地址下。<br>
(开始犯的错误：用 HTML 写表单，本地打开)

报错：res.write(post.title) 第一个参数应为 string 或 Buffer<br>
原因：此时 post.title 是 undefined<br>
改正：res.write(util.inspect(post.title)) 转换为空字符串

调试：打印 req，查看它的属性。其中 req.method 就是请求方式。<br>
从浏览器打开的都是get请求！

服务器根据请求方式判断网页要显示哪些内容：<br>
浏览器发送 get 请求，服务器返回表单；<br>
点击按钮提交表单是 post 请求，服务器返回表单提交的内容，其中 post.key 中的 key 就是表单元素 name 属性的内容。

### Express 框架

npm 提供了大量的第三方模块，Web 框架中，Express 是最主流的一种。

Express 除了为 http 模块提供了更高层的接口外，还实现了许多功能：路由控制，模板解析支持，动态视图，用户会话，CSRF 保护，静态文件服务，错误控制器，访问日志，缓存，插件支持。

Express 不是一个无所不包的全能框架，像 Rails 或 Django 那样实现了模板引擎甚至 ORM (Object Relation Model 对象关系模型)。它只是一个轻量级的 Web 框架，多数功能只是对 HTTP 协议中常用操作的封装，更多功能需要插件或整合其他模块完成。

用 Express 实现上例 --> _expressserver.js_ (还没测)

<br>

## 5.2 快速开始 (书中代码与最新版本 Express 差异很大)

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

访问 `http://127.0.0.1:3000/`，浏览器会向服务器发送请求。
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
