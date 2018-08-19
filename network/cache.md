## 与缓存相关的首部字段和常用指令

通用首部字段
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

请求首部字段
- `If-None-Match` 字段值就是 ETag 的内容，与服务器中资源的 ETag 比较。若不一致，则服务器处理请求。
- `If-Modified-Since` 字段值是 Last-Modified 的内容，与服务器中资源的 Last-Modified 比较。若资源的日期较新，则服务器处理请求。

响应首部字段
- `ETag` 资源的唯一标识，资源改动则更新。
    - 强 ETag 无论发生多细微的变化都会更新。
    - 弱 ETag 以 W/ 开头，发生根本性改变时才更新。

实体首部字段
- `Expires` 资源失效的日期。优先级低于 Cache-Control 的 max-age。
- `Last-Modified` 优先级低于 ETag。