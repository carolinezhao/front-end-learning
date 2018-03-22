> Chapter2-4 见 [README.md](https://github.com/carolinezhao/front-end-learning/blob/master/nodejs/README.md)

# Chapter5 Web Development

[Express](http://expressjs.com/)

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

### Express 框架

<br>

## 5.2 快速开始

### 安装 Express

### 建立工程

### 启动服务器

### 工程的结构

app.js

routes/index.js

index.ejs

layout.ejs

<br>

## 5.3 路由控制

### 工作原理

### 创建路由规则

### 路径匹配

### REST 风格的路由规则

### 控制权转移

<br>

## 5.4 模板引擎