# Cookie

- 是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器发起请求时被携带并发送到服务器上。
- 通常用于告知服务端两个请求是否来自同一浏览器，如保持用户的登录状态。
- 使基于无状态的 HTTP 协议记录稳定的状态信息成为了可能。

## 响应头和请求头

服务器使用 Set-Cookie 响应头向用户代理 (浏览器) 发送 Cookie 信息。

    HTTP/1.1 200 OK
    Set-Cookie: <cookie名>=<cookie值>

对该服务器发起的每一次新请求，浏览器都会将之前保存的 Cookie 信息通过 Cookie 请求头再发送给服务器。

    GET /index.html HTTP/1.1
    Cookie: tasty_cookie=strawberry

有效期
- 会话期 Cookie：浏览器关闭之后会被自动删除。
- 持久性 Cookie：可以指定一个特定的过期时间 (Expires) 或有效期 (Max-Age)。该过期时间只与客户端相关。

Secure 标记
- 标记为 Secure 的 Cookie 只应通过被 HTTPS 协议加密过的请求发送给服务端。
- 但即便设置了 Secure 标记，敏感信息也不应该通过 Cookie 传输。

HttpOnly 标记
- 为避免跨域脚本 (XSS) 攻击，通过 Document.cookie API 无法访问带有 HttpOnly 标记的 Cookie，它们只应该发送给服务端。
- 如果包含服务端 Session 信息的 Cookie 不想被客户端 JavaScript 脚本调用，那么就应该为其设置 HttpOnly 标记。

作用域
- Domain 标识指定了哪些主机可以接受 Cookie。如果不指定，默认为当前文档的主机 (不包含子域名)。如果指定了 Domain，则一般包含子域名。
- Path 标识指定了主机下的哪些路径可以接受 Cookie (该URL路径必须存在于请求URL中)。以 "/" 作为路径分隔符，子路径也会被匹配。

example

    Set-Cookie: Expires=Sat, 17-Nov-2018 15:23:26 GMT; Max-Age=2592000; Path=/docs; Secure

## JavaScript 访问 Cookie

可创建新的 Cookie，也可访问非 HttpOnly 标记的 Cookie。

    document.cookie = "tasty_cookie=strawberry";
