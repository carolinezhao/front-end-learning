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

### 安装 Express (v4.16.3 | March 2018)

Express 提供 Quick Start 工具，功能是建立一个网站最小的基础框架。为了使用这个工具，需要全局模式安装 Express，从而在命令行中使用。

    $ npm install -g express

安装在 root 路径下：`/usr/local/lib/node_modules/express`\
在终端中打开：`$ open [path]`

在命令行中使用 Express 相关命令需要安装命令行工具。\
The [express-generator](http://expressjs.com/en/starter/generator.html) package installs the express command-line tool.

    $ npm install express-generator -g

查看帮助信息

    $ express --help

### 建立工程

Express 初始化一个项目时需要指定模板引擎，默认支持 jade 和 ejs。现在还有 pug 等。

本项目中使用 ejs (Embedded JavaScript) 是一个标签替换引擎，语法类似于 ASP 和 PHP。

Create an Express app named microblog. The app will be created in a folder named microblog in the current working directory and the view engine will be set to ejs:

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

启动服务器 (在项目目录下)

    $ DEBUG=microblog:* npm start (官网)

或者

    $ npm start

运行后显示：`> node ./bin/www`

在浏览器中访问 `http://127.0.0.1:3000/` 可以看到欢迎页面。

修改代码后需要重启服务器。想实现修改后自动重启，[使用 supervisor](https://blog.csdn.net/u013758116/article/details/38982325)。

关闭服务器 `ctrl + c`

此时服务器是在开发模式 (development mode) 下运行。6.3 节介绍如何在生产环境下部署。

### 工程的结构

    ./microblog
        ├── app.js
        ├── bin
        │   └── www
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

`bin/www 和 app.js`

书中 app.js 的内容拆分为现文件的 bin/www 和 app.js。<br>
旧版 Express 中 app.js 是工程的入口；<br>
新版 Express 的启动模块分离到了 bin/www 中，在 www 中创建服务器和端口。启动服务器后，终端中会显示 `node ./bin/www`。
这是因为 package.json 中的配置为：

    "scripts": {
        "start": "node ./bin/www"
    }

在终端中查看

    $ file bin/www

返回 `bin/www: a /usr/bin/env node script text executable, ASCII text`

什么叫可执行的 node 脚本呢？通常要执行一个 node.js 文件，会采用这种形式：`$ node hello.js`，但如果是一个可执行的脚本，则无须使用 node 命令，`./hello.js` 就可以了。

`app.js`

用 require 方法加载模块，返回的是各模块的 `module.exports` 对象。与 package.json 中 "dependencies" 的内容对应。(为什么没有 path？？)<br>
书中使用 `exports` 对象作为各模块接口，两种方法的区别见 --> _05-module.js 和 07-singleobject.js_
> review 3.3.2 创建及加载模块

routes 是一个文件夹形式的本地模块，功能是为指定路径组织返回内容，是 MVC 架构中的控制器。
> routes 更多内容见 5.3 路由控制

书中：三个 app.configure 函数分别指定通用、开发和产品环境下的参数。第一个直接接受了一个回调函数，后两个只能在开发和产品环境中调用。<br>
新版：Express 4.x 不再支持 app.configure，旧版中其包含的 app.set 等内容可以直接使用。<br>
基于 environments 配置路由的方法见 bin/www。
[示例](https://scotch.io/bar-talk/expressjs-4-0-new-features-and-upgrading-from-3-0#removed-appconfigure)

app.set 是 Express 的参数设置工具，接受一个 key 和一个 value。可用参数如下 (书中提供，不确定现在是否改了)：
* basepath 基础地址，通常用于 res.redirect() 跳转
* views 视图文件的目录，存放模板文件 (app.js 中有)
* view engine 视图模板引擎 (app.js 中有)
* view options 全局视图参数对象
* view cache 启用视图缓存
* case sensitive routes 路径区分大小写
* strict routing 严格路径，启用后不会忽略路径末尾的“/”
* jsonp callback 开启透明的 JSONP 支持
* port (www line 16)

--

[使用中间件](http://expressjs.com/zh-cn/guide/using-middleware.html)

应用层中间件和路由层中间件

``` JavaScript
var app = express() //应用程序对象的实例
app.use('', function(req,res,next) {
    // app.use() 和 app.METHOD() 函数用于绑定应用层中间件
})

var router = express.Router()
router.use('', function(req,res,next) {
    // router.use() 和 router.METHOD() 函数装入路由器层中间件
})

// 其中 METHOD 可以是 get, post, put 等。
```
第三方中间件

旧版 Express 使用的中间件依赖于 Connect，书中的写法已过时。
Express 4.x 不再支持 Connect，使用第三方中间件需要通过模块的方式调用。
[第三方中间件的变更](http://expressjs.com/zh-cn/resources/middleware.html)<br>
使用方法：在 package.json 的 "dependencies" 中添加要使用的包；文件中用 require 加载。

书中：app.get('/', routes.index) 是一个路由控制器，用户如果访问“/”路径，则由 routes.index 控制。<br>
现有：使用 app.use (与下个文件有关)

`routes/index.js`

路由文件，相当于控制器，用于组织展示的内容。<br>
书中：app.js 中的 app.get('/', routes.index) 将“/”路径映射到 index.js 中的 exports.index 函数下。<br>
现有：app.js 中使用 app.use('/', indexRouter) 将“/”路径映射到 index.js 中的 router 对象，由 router 执行 get 请求。<br>
函数中 res.render 调用模板解析引擎 (见文件)。

`index.ejs` 

模板文件，即 routes/index.js 中调用的模板。<br>
基础是 HTML，包含的标签 (如 `<%= title %>`) 是为了显示引用的变量，即 res.render 函数第二个参数传入的对象的属性。(index.js line 6)<br>
旧版：只显示 layouts.ejs 中 `<%- body %>` 的内容。<br>
现有：全部 HTML 标签都在 index.ejs 中。<br>

layout.ejs (现在没有了)<br>
旧版：显示页面框架，即共有内容--除了 `<%- body %>` 之外的部分。<br>
现有：取消此文件，内容合并到 index.ejs。

<br>

## 5.3 路由控制

### 工作原理

访问 `http://127.0.0.1:3000/`，浏览器会向服务器发送请求。<br>
查看请求：打开 Chrome 开发者工具 -> Network -> 刷新页面 -> 点开 127.0.0.1 -> `Request Headers` (点击 view source)

> 具体内容的含义参考《图解 HTTP》第3章。

生成 HTML 页面

书中：app.js 中的 `app.get('/', routes.index)`，规定路径“/”的 GET 请求由 routers.index 函数处理。<br>
routers.index 通过 res.render 调用视图模板 index，传递 title 变量。

现在：app.js 中的 `app.use('/', indexRouter)` 将路由指向 index.js 中的 `router.get` 处理 GET 请求。<br>
通过 res.render 调用视图模板 index.ejs，传递 title 变量。

最终视图模板生成 HTML 页面，返回给浏览器，根据上面查看请求的相同方法查看响应 `Response Headers`。

加载 CSS

浏览器收到内容后，经过分析发现要获取 `/stylesheets/style.css`，会再次向服务器发起请求。<br>
app.js 中并没有一个路由规则指派到该文件，但程序通过 `app.use(express.static(path.join(__dirname, 'public')));` 配置了静态文件服务器，因此 `/stylesheets/style.css` 会定向到 app.js 所在目录的子目录中的文件 `public/stylesheets/style.css`，向客户端返回响应 (也在浏览器中查看)。

Express 网站架构见书中图 5-3

这是一个典型的 MVC 架构，浏览器发起请求，由路由控制器接收，然后根据不同的路径定向到不同的控制器。控制器处理用户的具体请求 -- 模板引擎，静态文件，对象模型。最后控制器返回给浏览器，完成一次请求。

### 创建路由规则

在浏览器中访问一个不存在的页面时，比如 `http://127.0.0.1:3000/abc`，服务器会在响应头中返回 404 Not Found 错误。因为 `/abc` 是一个不存在的路由规则，而且也不是 public 目录下的文件。

现文件中的路由规则示例：

``` JavaScript
// routes/app.js
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
app.use('/', indexRouter);
app.use('/users', usersRouter);

// routes/users.js
var router = express.Router();
router.get('/', function(req, res, next) { // 这里的路径是什么？为什么不是 /users ？
  res.send('respond with a resource');
});
module.exports = router;
```

增加地址为 `/hello` 的页面：<br>
书中：在 app.js 中使用 `app.get('/hello', routes.hello)` 添加，然后在 index.js 中添加页面内容 `exports.hello=function(req, res) {res.send(...)}`。<br>
现文件：app.js 中使用 app.use<br> 
try1: 在 index.js 中的 router.get 中添加 res.send 没有成功<br>
    res.send 之后不能再有 res.send，否则会报错：Error: Can't set headers after they are sent.<br>
    解释：https://cnodejs.org/topic/53774ffecbcc396349ca1155<br>
    [res.send 文档](http://expressjs.com/zh-cn/4x/api.html#res.send)<br>
try2: 另写一个 router.get 也没有效果，但是没有报错。<br>
    相同的 get 无效吗？？<br>
try3: 单独写一个文件 hello.js。<br>
打开 `http://127.0.0.1:3000/hello` 可以看到当前时间，刷新页面时间也会刷新。

服务器在开始监听之前，设置好了所有的路由规则，当请求到达时直接分配到响应函数。

app.get（旧）是路由规则创建函数，第一个参数是请求路径，第二个参数是回调函数，在路由规则被触发时调用。

现文件：用 app.use 和 router.get 代替。

### 路径匹配

除了为固定路径设置路由规则，还可以与变动的路由匹配，比如用户的个人页面，路径为 /user/[username]

``` JavaScript
app.get('/user/:username', function(req, res, next) {
  res.send('user: ' + req.params.username)
})
```
写在 app.js 中<br>
[路由文档](http://expressjs.com/zh-cn/guide/routing.html)<br>
res.send 之后不能有 next()

路径规则 `/user/:username` 会被自动编译为正则表达式，类似于 `\/user\/([^\/]+)\/?`。<br>
路径参数可以在响应函数中通过 req.params 的属性访问。<br>
上述函数中可以直接使用正则，好处是可以定义更复杂的路径规则，不同之处在于匹配的参数是匿名的，因此需要通过 req.params[0] 这样的形式访问。

### REST 风格的路由规则

### 控制权转移

<br>

## 5.4 模板引擎

<br>

## 5.5 建立微博网站

### 路由规划

<br>

## 5.6 用户注册和登录

### MongoDB

[MongoDB Node.JS Driver](https://mongodb.github.io/node-mongodb-native/)

Download the MongoDB driver and add a dependency entry in `package.json` file.

    npm install mongodb --save

<br>

## 参考文献

* [Express 4.0 与 3.0 特性对比](https://scotch.io/bar-talk/expressjs-4-0-new-features-and-upgrading-from-3-0)
* [使用 Express 4.x 实现书中的微博示例](http://www.cnblogs.com/SheilaSun/p/4746749.html)
* [对 bin/www 和 app.js 的解读](https://www.jianshu.com/p/a7b47778e734)
* [讲解中间件的使用](http://www.html-js.com/article/1603)