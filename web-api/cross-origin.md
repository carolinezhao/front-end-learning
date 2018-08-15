# 同源策略 & 跨域访问

## 同源策略 Same-origin policy

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)

- 如果两个页面的协议，端口（如果有指定）和域名都相同，则两个页面具有相同的源。
- 同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。

使用 XMLHttpRequest 时会受到同源策略的约束。

不受同源策略限制的有：

- `<script src="..."></script>` 嵌入跨域脚本，比如 CDN
- `<link rel="stylesheet" href="...">` 嵌入CSS
- `<img>` 嵌入图片
- `<video>` 和 `<audio>` 嵌入多媒体资源
- etc.

## 跨域请求 (Cross-origin requests) 解决方案

### JSONP (前端)

[概念和例子](https://www.cnblogs.com/dowinning/archive/2012/04/19/json-jsonp-jquery.html)

- 要注意的是 jsonp 和 ajax 没有关系，jQuery 的 ajax 只是封装了 jsonp。
- ajax 的核心是通过 XMLHttpRequest 获取非本页内容，而 jsonp 的核心则是动态添加 `<script>` 标签来调用服务器提供的 js 脚本。
- jsonp 的一个缺点：只能进行 get 请求。

### CORS (Cross-Origin Resource Sharing) (服务器端)

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)

跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站有权限访问哪些资源。

```
response.setHeader("Access-Control-Allow-Origin", "允许跨域的域名");
response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
response.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
response.setHeader("Access-Control-Allow-Credentials", "true"); // 接收跨域的cookie
```

- 请求报文：请求首部字段 Origin 表明请求的来源。
- 响应报文：响应首部字段 Access-Control-Allow-Origin 应当为 * 或者包含由 Origin 首部字段所指明的域名。

### 其他方法

- [reference 1](https://segmentfault.com/a/1190000000718840)
- [reference 2](http://www.cnblogs.com/st-leslie/p/5958822.html)