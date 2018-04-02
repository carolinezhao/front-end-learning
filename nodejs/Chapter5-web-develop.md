> Chapter2-4 见 [README.md](https://github.com/carolinezhao/front-end-learning/blob/master/nodejs/README.md)

> 本章内容需参考[Express 官网](http://expressjs.com/)使用最新命令。书中使用的版本过旧，很多命令已不再支持。

# Index

- 5.1 背景知识
- 5.2 快速开始
- 5.3 路由控制
- 5.4 模板引擎
- 5.5 建立微博网站
- 5.6 用户注册和登录
    - 数据库
    - 会话支持
    - 登入登出
- 5.7 发表微博

# Chapter5 Web Development

## 5.1 背景知识

Node.js 和 PHP、Perl、ASP、JSP 一样，都是为了由服务器动态生成 HTML 页面。

静态的局限：
* 可扩展性非常有限，无法与用户有效交互。
* 维护大量相似内容的页面 (如产品介绍) 效率低下。

动态网页的历程：
* Perl 和 CGI：在 Perl 程序中输出 HTML，由 HTTP 服务器调用 Perl，结果返回给客户端。
* 以模板为中心的架构：PHP (源自 Personal Home Page Tools)、ASP、JSP，以 HTML 为主的模板中插入程序代码。
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

如果只是修改了模板, CSS文件, 或者客户端的 js 代码, 无需重新启动。

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

[第三方中间件的变更](http://expressjs.com/zh-cn/resources/middleware.html)

旧版 Express 使用的中间件依赖于 Connect，书中的写法已过时。<br>
Express 4 不再依赖于 Connect，从其核心移除了所有内置的中间件（除了 express.static 函数）。<br>
Express 现在是独立的路由和中间件 Web 框架，其版本控制和发行不受中间件更新的影响。<br>
由于没有内置中间件，因此必须显式添加所需的所有中间件才能运行应用程序。

安装模块：`npm install --save <module-name>`<br>
在应用程序中需要此模块：`require('module-name')`<br>
根据文档使用模块：`app.use( ... )`

--

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
旧版：显示页面框架，即共有内容--除了 `<%- body %>` 之外的部分（head，页眉，页脚）。<br>
现有：取消此文件，内容合并到 index.ejs。

<br>

## 5.3 路由控制

MVC 架构中的控制器。

### 5.3.1 工作原理

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

[用户请求处理逻辑图](https://blog.csdn.net/congyihao/article/details/60747076)

Express 网站架构见书中图 5-3

这是一个典型的 MVC 架构，浏览器发起请求，由路由控制器接收，然后根据不同的路径定向到不同的控制器。控制器处理用户的具体请求 -- 模板引擎，静态文件，对象模型。最后控制器返回给浏览器，完成一次请求。

### 5.3.2 创建路由规则

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
router.get('/', function(req, res, next) { // 这里的路径与 app.use 中的路径接起来
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
    解释：可以写，加 next()，见 5.3.5 控制权转移<br>
try3: 单独写一个文件 hello.js。<br>
打开 `http://127.0.0.1:3000/hello` 可以看到当前时间，刷新页面时间也会刷新。

服务器在开始监听之前，设置好了所有的路由规则，当请求到达时直接分配到响应函数。

app.get（旧）是路由规则创建函数，第一个参数是请求路径，第二个参数是回调函数，在路由规则被触发时调用。

现文件：用 app.use 和 router.get 代替。

### 5.3.3 路径匹配

除了为固定路径设置路由规则，还可以与变动的路由匹配，比如用户的个人页面，路径为 /user/[username]

``` JavaScript
app.get('/user/:username', function(req, res, next) {
  res.send('user: ' + req.params.username)
})
```
路径规则 `/user/:username` 会被自动编译为正则表达式，类似于 `\/user\/([^\/]+)\/?`。<br>
路径参数可以在响应函数中通过 req.params 的属性访问。<br>
上述函数中可以直接使用正则，好处是可以定义更复杂的路径规则，不同之处在于匹配的参数是匿名的，因此需要通过 req.params[0] 这样的形式访问。

写在 app.js 中，使用完整路径。<br>
写在 users.js 中 (路由是 /users)，注意路径拼接 (get 中写 /:username)。<br>
[路由文档](http://www.expressjs.com.cn/guide/routing.html)<br>
res.send 之后不能有 next()

### 5.3.4 REST 风格的路由规则

REST 是一种基于 HTTP 协议的网络应用的接口风格。

HTTP 协议定义了8种标准的方法，常用的是以下4种：
* GET 请求获取指定资源
* POST 向指定资源提交数据
* PUT 请求服务器存储一个资源
* DELETE 请求服务器删除指定资源

根据 REST 设计模式，这4种方法分别用于实现以下功能：
* GET 获取 (安全Y；幂等Y)
* POST 新增 (安全N；幂等N)
* PUT 更新 (安全N；幂等Y)
* DELETE 删除 (安全N；幂等Y)

特点
* 安全：指没有副作用，即请求不会对资源产生变动，连续访问多次所获得的结果不受访问者的影响。
* 幂等：指的是重复请求多次与一次请求的效果是一致的，以上4种方法中只有新增不是幂等的。

Express 支持的 HTTP 请求绑定函数：[app.METHOD(path, callback [,callback...])](http://expressjs.com/en/api.html#app.METHOD)<br>
比如 app.get，表示为该路径绑定了 GET 请求，向它发起其他方式的请求不会被响应。<br>
app.all 支持把所有的请求方式绑定到同一个响应函数。

### 5.3.5 控制权转移

Express 支持同一路径绑定多个路由响应函数 (比如 app.all 和 app.get)。<br>
访问该路径时，请求只能被前一条路由规则捕获，后面的规则会被忽略。<br>
因为 Express 在处理路由规则时，会优先匹配先定义的路由规则，屏蔽后面相同的规则。

Express 提供了路由控制权转移的方法，即回调函数的第三个参数 next。通过调用 next()，路由控制权会被转移给后面的规则。

``` JavaScript
app.all('/user/:username', function(req, res, next) {
    console.log('all methods captured')
    next() // 请求被捕获后，转移控制权给第二条规则
})
app.get('/user/:username', function(req, res) {
    res.send('user: ' + req.params.username)
})
```

这个工具非常有用，可以轻易实现中间件，而且还能提高代码的复用程度。
比如针对一个用户查询信息和修改信息的操作，分别对应 GET 和 PUT 操作，而两者共有的一个步骤是检查用户名是否合法，可以用 next() 实现。

``` JavaScript
var users = {
    'caroline': {
        name: 'rabbit',
        website: 'https://github.com/carolinezhao'
    }
}

app.all('/user/:username', function(req, res, next) {
    // 检查用户是否存在
    if (users[req.params.username]) {
        next()
    } else {
        next(new Error(req.params.username + 'does not exist.'))
    }
})
app.get('/user/:username', function(req, res) {
    // 用户存在，直接展示
    res.send(JSON.stringify(users[req.params.username]))
})
app.put('/user/:username', function(req, res) {
    // 修改用户信息
    res.send('Done')
})
```

这个例子中，app.all 定义的路由规则实际上起到了中间件的作用，把相似请求的相同部分提取出来，有利于代码维护，其他 next 方法如果接受了参数，说明发生了错误。使用这种方法可以**把错误检查分段化，降低代码耦合度**。

<br>

## 5.4 模板引擎

模板引擎 (Template Engine)：将页面模板和要显示的数据结合起来生成 HTML 页面。<br>
既可以运行在服务器端，也可以运行在客户端。<br>
多数时候它都在**服务器端**直接被解析为 HTML，解析完成后再传输给客户端，因此客户端甚至无法判断页面是否是由模板引擎生成的。

MVC 架构中，模板引擎包含在服务器端。<br>
流程：控制器得到用户请求后，从模型获取数据，调用模板引擎。模板引擎以数据和页面模板为输入，生成 HTML 页面，然后返回给控制器，由控制器交回客户端。

### 使用模板引擎

本项目中使用的模板引擎是 ejs，它由标准 js 实现，因此既可以运行在服务器端，也可以运行在浏览器中。

(前边也讲了一些)<br>
在 app.js 中设置了模板引擎和页面模板的位置。<br>
在 index.js 中通过 res.render 调用模板引擎，并将其产生的页面直接返回给客户端。接受两个参数：
* 模板的名称 (views 目录下)，不需要扩展名；
* 传递给模板的数据，用于模板翻译 (替换)。比如 `<%= title %>` 的内容会替换为 `{title: ''}` 提供的值。

ejs 有3种标签
* `<% code %>` js 代码
* `<%= code %>` 显示替换过 HTML 特殊字符的内容
* `<%- code %>` 显示原始 HTML 内容

### 页面布局

新版 Express 不再支持 layout.ejs，前面介绍过。

本项目中，将页面分为三部分：header, main, footer。header 和 footer 是各页面共用的部分。

在 index.ejs 中引入 header.ejs 的方法如下：

```HTML
<header>
    <% include header.ejs %>
</header>
```

### 片段视图

新版 Express 不再支持，仅了解。

partials，用于迭代显示重复的标签。两个参数：
* 片段视图的名称；
* 一个对象或一个数组 (变量引用对象；数组中的元素依次被迭代)。

```js
res.render('list', {title: 'List', items: [1, 2, 3, 4]})
```

```HTML
<!-- list.ejs -->
<ul><%- partial('listitem', items) %></ul>
<!-- listitem.ejs -->
<li><%= listitem %></li>
```

### 视图助手

新版 Express 不再支持，仅了解。

视图助手：允许在视图中访问一个全局的函数或对象，不用每次调用视图解析的时候单独传入。partial 就是一个视图助手。

视图助手有两类：
* 静态：可以是任何类型的对象，包括接受任意参数的函数，但访问到的对象必须是与用户请求无关的。通过 app.helpers() 注册。
* 动态：只能是一个函数，不能接受参数，但可以访问 req 和 res 对象。通过 app.dynamicHelpers() 注册。

<br>

## 5.5 建立微博网站

### 路由规划

是整个网站的骨架，应该优先考虑。

* / 首页 (针对已登录和未登录用户显示不同内容)
* /u/[user] 用户的主页 (针对已登录和未登录用户显示不同内容)
* /post 发布信息 (已登录用户操作)
* /reg 用户注册 (未登录用户操作)
* /login 用户登录 (未登录用户操作)
* /logout 用户登出 (已登录用户操作)

/post，/login，/reg 要接受表单信息，使用 app.post 注册路由；<br>
/login，/reg 显示用户注册时要填写的表单，还要用 app.get 注册。

--> _index.js_

### 使用 Bootstrap 设计界面

安装 bootstrap@4.0.0 及其依赖的两个模块 jquery@3.3.1 和 popper.js@1.14.1

    $ npm install bootstrap --save
    $ npm install jquery --save
    $ npm install popper.js --save

但是需要把 bootstrap.min.css 和 bootstrap.min.js，jquery.min.js 分别拷贝到 public/stylesheets 和 public/javascripts 目录下，以静态文件的方式加载。直接按路径引用无效。<br>
min.css.map 和 min.js.map 用于定位 error 在原文件 (未压缩文件) 中的位置。

<br>

## 5.6 用户注册和登录

引入会话机制来记录用户状态，访问数据库来保存和读取用户信息。

### 5.6.1 访问数据库

选用 MongoDB 作为网站的数据库系统，它是一个开源的 NoSQL 数据库。<br>
相比 MySQL 那样的关系型数据库，它更为轻巧灵活，适合在数据规模很大、事务性不强的场合使用。

### 数据库

关系型数据库/SQL数据库

* 使用 SQL (Structured Query Language) 查询语言作为接口。
* 数据库由表 (table)、行 (row)、字段 (field) 组成。<br>表有固定的结构，规定了每行有哪些字段，在创建时被定义，之后修改很困难。<br>行的格式是相同的，由若干个固定的字段组成。
* 每个表可能有若干个字段作为索引 (index)，主键 (primary key) 用于约束表中的数据，唯一键 (unique key) 确保字段中不存放重复数据。<br>表和表之间可能还有相互的约束，为外键 (foreign key)。
* 对数据库的每次查询都要以**行**为单位，复杂的查询包括嵌套查询、连接查询和交叉表查询。

典型的 SQL 数据库：MySQL, Oracle, Microsoft SQL Server, PostgreSQL, SQLite 等。

ACID 是数据库系统中事务 (transaction) 所必须具备的四个特性，原子性 (atomicity)，一致性 (consistency)，隔离性 (isolation) 和持久性 (durability)。

NoSQL

* 可以理解为 Not Only SQL，指非关系型、分布式、不提供 ACID 的数据库系统。
* 设计的初衷并不是为了取代 SQL，而是作为一个补充，两者有各自不同的适应领域。
* 不像 SQL 那样都有统一的架构和接口，不同的 NoSQL 数据库系统从内而外可能完全不同。

### MongoDB

MongoDB 是一个对象数据库，没有表、行等概念，也没有固定的模式和结构，所有数据以文档的形式存储。<br>
MongoDB 的数据格式是 BSON (Binary JSON)，是 JSON 的一个扩展，因此与 js 的亲和性很强。<br>
在 MongoDB 中对数据的操作都是以文档为单位的，也可以修改文档的部分属性。<br>
对于查询操作，只需要指定文档的任何一个属性，就可以在数据库中筛选出满足条件的所有文档。<br>
为了加快查询，MongoDB 也对文档实现了索引，这一点和 SQL 数据库一样。

### 连接数据库

在 [MongoDB 官网](https://www.mongodb.com/) 下载 Community 版本

[安装和运行步骤](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

把解压后的文件夹放在目标路径下 `~/Workplace/mongodb`。文件结构：

    mongodb
        ├── 4个其他文件
        └── bin
            └── 可执行文件们

The MongoDB binaries are in the bin/ directory of the archive. To ensure that the binaries are in your PATH, you can modify your PATH. 

只有把路径添加到 PATH 变量中才能全局使用，否则在其他终端窗口中不可用，或在不同文件目录下也不可用。

两种检查方法：

查看 PATH 变量包含哪些路径，返回的结果是以冒号分隔的路径，比如 `/usr/local/bin:/usr/bin:/bin:...`，如果不包含目标路径则需要手动添加。

    $ echo $PATH

查看路径是否包含在 PATH 变量中，返回 `not found` 则需要手动添加该路径。

    $ which mongo

在 rc 文件中手动添加路径，如果是 bash 终端，则 `$ open ~/.bashrc` 修改；如果是 zsh 终端，则 `$ open ~/.zshrc` 修改。各终端只读取自己的文件。用实际路径替换其中的 `<directory>`，查看所在路径 `$ pwd`。

`export PATH=<directory>/bin:$PATH`

添加后以下命令使其立即生效，或者新开一个终端窗口 (自动执行 source)。如果修改了 .bashrc 文件，使用 zsh 终端打开，则必须手动执行该命令。

    $ source ~/.zshrc

确认是否添加成功，若成功则返回所在路径 `.../mongodb/bin/mongo`

    $ which mongo

--

Run MongoDB

By default, the mongod process uses the `/data/db` directory.<br>
也可以使用其他路径，需要手动配置，见文档。<br>
以 `/` 开头意味着在 root 目录下创建文件，需要加 `sudo`。

    $ sudo mkdir -p /data/db

To run MongoDB, run the mongod process at the system prompt.<br>
使用 mongod 也需要加 `sudo`。

    $ sudo mongod

看到打印以下语句则说明成功启动

`[initandlisten] waiting for connections on port 27017`

操作数据库

Start a mongo shell on the same host machine as the mongod. Use the --host command line option to specify the localhost address and port that the mongod listens on.

在新窗口中执行此命令，因为刚才的命令是持续运行的。

    $ mongo --host 127.0.0.1:27017

To stop MongoDB, press `Control+C` in the terminal where the mongod instance is running.

--

什么时候运行数据库？<br>
运行项目 ($ DEBUG=microblog:* npm start) 前都需要启动数据库 ($ sudo mongod)，否则相关设置会报错。<br>
如果不是直接操作数据库，一般不需要 `$ mongo --host 127.0.0.1:27017`

--

在 Node.js 中使用 MongoDB，需要获取一个模块。

书中安装的是 "mongodb": ">= 0.9.9"

这个安装的是 "mongodb": "^3.0.5"<br>
Download the [MongoDB Node.JS Driver](https://mongodb.github.io/node-mongodb-native/) and add a dependency entry in `package.json` file.

    $ npm install mongodb --save

另一个常用的是 [Mongoose](http://mongoosejs.com/docs/index.html) (还没研究)

    $ npm install mongoose

"mongoose": "^5.0.12"

在工程目录中创建 _settings.js_，用于保存数据库的连接信息。

在 models 子目录中创建 _db.js_，创建数据库连接。

### 5.6.2 会话支持 Session

会话是一种持久的网络协议，用于完成服务器和客户端之间的一些交互行为。<br>
会话是一个比连接粒度更大的概念，一次会话可能包含多次连接，每次连接都是会话的一次操作。<br>
网络应用开发中，有必要实现会话以帮助用户交互。比如网上购物场景，用户浏览了多个页面，购买了一些物品，这些请求在多次连接中完成。

许多应用层网络协议都是由会话支持的，如 FTP、Telnet 等，而 HTTP 协议是无状态的，本身不支持会话，因此在没有额外手段的帮助下，购物场景中服务器不知道用户购买了什么。

为了在无状态的 HTTP 协议上实现会话，Cookie 诞生了。Cookie 是一些存储在客户端的信息，每次连接的时候由浏览器向服务器递交，服务器也向浏览器发起存储 Cookie 的请求，依靠这样的手段，服务器可以识别客户端。通常意义上的 HTTP 会话功能就是这样实现的。<br>
具体来说，浏览器首次向服务器发起请求时，服务器生成一个唯一标识符并发送给客户端浏览器，浏览器将这个唯一标识符存储在 Cookie 中，以后每次再发起请求，客户端浏览器都会向服务器传送这个唯一标识符，服务器由此来识别用户。

对于开发者来说，无须关心浏览器端的存储，需要关注的仅仅是如何通过唯一标识符来识别用户。<br>
很多服务端脚本语言都有会话功能，如 PHP 把每个唯一标识符存储到文件中。<br>
Express 也提供了会话中间件，默认情况下是把用户信息存储在内存中，但既然已经有了 MongoDB，不妨把会话信息存储在数据库中，便于持久维护。

connect-mongo: MongoDB session store for Express

安装模块

    $ npm install express-session --save
    $ npm install connect-mongo --save

[配置信息](https://github.com/jdesboeufs/connect-mongo) 写入 _app.js_

### 5.6.3 注册和登入

### 注册页

注册页内容 --> _views/reg.ejs_ (见 5.4 中的页面布局)

书中：把路由规则分离出去，app.use(app.router) 用 app.use(express.router(routes)) 代替。<br>
新版 Express 中直接就把路由规则分离出去了：(前边写过)

``` js
// app.js 引入路由模块
var indexRouter = require('./routes/index');
app.use('/', indexRouter);

// index.js 路由模块
var router = express.Router()
router.get('/', ...) // 实际路径 localhost/
router.post('/reg', ...) // 实际路径 localhost/reg.ejs
module.exports = router
```

### 注册响应 

--> _index.js_ 中的 router.post('/reg', function() {})

* req.body 是 POST 请求信息解析后的对象。<br>比如 reg.ejs 中表单提交的是 name='value' 的内容，则 post 事件中 req.body['value'] = 内容。
* **req.flash** 是 Express 提供的很有用的工具。通过它保存的变量只会在用户当前和下一次的请求中被访问，之后会被清除，通过它可以实现页面通知和显示错误信息。(learn more in 视图交互)
* res.redirect 重定向功能，通过它向用户返回 303 See Other 状态，通知浏览器转向相应页面。
* crypto 是 Node.js 的核心模块，功能是加密并生成各种散列，使用前声明 `var crypto = require('crypto')`
* User 是项目中设计的用户对象，具体介绍见下一节**用户模型**，这里假设它的接口都是可用的，使用前声明 `var User = require('../models/user.js')`
* User.get 通过用户名获取已知用户，这里用于判断用户名是否已经存在。
* User.save 将用户对象的修改写入数据库。
* req.session.user = newUser 向会话对象写入当前用户的信息，后面会通过它判断用户是否已经登录。

### 用户模型

--> _index.js_ 中使用了 User 对象。

User 是一个描述数据的对象，即 MVC 架构中的模型，模型是真正与数据打交道的工具，没有它，网站就只是一个外壳。

在 models 目录中创建 _user.js_ (即上一节中引入 User 对象的路径)

[数据库，session 相关设置参考](https://blog.csdn.net/sinat_25127047/article/details/54644989)

    ├── models
    │   ├── user.js //用户对象，引入 db 模块
    │   └── db.js //创建数据库连接，引入 settings 模块
    └── settings.js //数据库设置，app.js 中的 session 和 db 都以此为基础

### 视图交互

不同登录状态下，页面呈现不同内容。<br>

书中：创建动态视图助手，从而在视图中访问会话中的用户数据。为了显示错误和成功的信息，需要在动态视图助手中增加响应函数。使用 app.dynamicHelpers<br>
新版本：不再支持 dynamicHelpers，[改用 locals](http://www.cnblogs.com/yumianhu/p/3713380.html)。--> _app.js_<br>
locals 的用法还不了解？？？

响应函数中用到 req.flash，尝试支持的模块
req-flash：报错。<br>
connect-flash：可用，[安装及使用](https://www.npmjs.com/package/connect-flash)

    $ npm install connect-flash

[参考](https://github.com/JianjunZU/Microblog/blob/master/app.js)

--

app.js 中的 user，error，success 是怎样和模板中的建立联系的？？？

为已登录和未登录用户显示不同信息，在 header.ejs 中的菜单处添加：

    <% if (!user) { %>
    ...登录，注册
    <% } else { %>
    ...登出
    <% } %>

显示通知，在 reg.ejs 页面主要内容前加入：

    <% if (success) { %>
    ...显示成功信息
    <% } %>
    <% if (error) { %>
    ...显示错误信息
    <% } %>

### 登入和登出

--> _index.js_ 添加登录登出方法

登入登出仅仅是 req.session.user 变量的标记。不会有安全性问题，因为这个变量只有服务端才能访问，如果服务器没有被攻破，就无法从外部改动。

--> _login.ejs_ 登录页面

### 5.6.4 页面权限控制

登出功能应该只对已登入用户开放，注册和登录页眉应该阻止已登录用户访问。

简单的方法是在每个页面的路由响应函数内检查用户是否已经登录，但是这会带来很多重复代码，违反了 DRY (Don't Repeat Yourself) 原则。因此利用路由中间件实现这个功能。

5.3.5 节介绍了同一路径绑定多个响应函数的方法，通过调用 next() 转移控制权，这种方法叫做路由中间件。<br>
可以把用户登录状态检查放到路由中间件中，在每个路径前增加路由中间件，即可实现页面权限控制。

router.METHOD('/', checkNotLogin) --> _index.js_

<br>

## 5.7 发表微博

<br>

## 参考文献

* [Express 4.0 相对于 3.0 的特性更改](http://expressjs.com/zh-cn/guide/migrating-4.html)
* [使用 Express 4.x 实现书中的微博示例](http://www.cnblogs.com/SheilaSun/p/4746749.html)
* [对 bin/www 和 app.js 的解读](https://www.jianshu.com/p/a7b47778e734)
* [讲解中间件的使用](http://www.html-js.com/article/1603)
* [Linux 下查看和添加 PATH 环境变量](https://blog.csdn.net/dlutbrucezhang/article/details/8811456)
* [使用Heroku进行网站的对外在线演示](https://blog.csdn.net/congyihao/article/details/60747076)