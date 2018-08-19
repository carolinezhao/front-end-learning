# 缓存

## 缓存是 Web 性能优化的重要方式

具体原因见：[reference-1](https://juejin.im/post/5ae081aaf265da0b767d263a)

## 与缓存相关的首部字段和常用指令

通用首部字段 General Header Fields
- `Cache-Control`

    缓存请求指令
    - no-cache 强制向服务器再次验证 (可以缓存，但必须先确认)
    - no-store 不缓存
    - max-age 资源保存为缓存的最长时间 (单位：秒)

    缓存响应指令
    - public
    - private 仅向特定用户返回缓存
    - no-cache
    - no-store
    - max-age
    - must-revalidate

请求首部字段 Request Header Fields
- `If-None-Match` 字段值就是 ETag 的内容，与服务器中资源的 ETag 比较。若不一致，则服务器处理请求。
- `If-Modified-Since` 字段值是 Last-Modified 的内容，与服务器中资源的 Last-Modified 比较。若资源的日期较新，则服务器处理请求。

响应首部字段 Response Header Fields
- `ETag` 资源的唯一标识，资源改动则更新。
    - 强 ETag 无论发生多细微的变化都会更新。
    - 弱 ETag 以 W/ 开头，发生根本性改变时才更新。

实体首部字段 Entity Header Fields
- `Expires` 资源失效的日期。优先级低于 Cache-Control 的 max-age。
- `Last-Modified` 优先级低于 ETag。

## 缓存的过程

### 第一次请求

客户端本地无缓存，向服务器发送请求，服务器响应请求，客户端缓存。

客户端会保存以下由服务器发来的内容：Cache-Control, Expires, ETag, Last-Modified 等。

### 第二次请求

> 关键词：强缓存和协商缓存；状态码 304 Not Modified

图示见 [reference-2](https://segmentfault.com/a/1190000008956069)

强缓存

- 请求某资源时，先获取该资源缓存的信息，根据 Cache-Control 和 Expires 判断是否过期。
- 若没过期，则直接从缓存中获取资源信息，强缓存命中。

协商缓存

- 如果缓存已过期，浏览器会向服务器发送请求，携带第一次请求返回的有关缓存的首部字段信息。
- 服务器先验证请求中的 If-None-Match (值为 ETag) 和 服务器中资源的 ETag；再验证请求中的 If-Modified-Since (值为 Last-Modified) 和服务器中资源的 Last-Modified。
- 如果 ETag 不一致或者 Last-Modified 比请求中的值新，则服务器返回最新数据 (状态 200)；否则，返回状态 304，客户端继续使用本地缓存。