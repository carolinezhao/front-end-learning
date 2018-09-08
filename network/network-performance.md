# 网络性能

## 报头的开销

数据从应用经过 HTTP 层沿着网络堆栈进行传递。每一层都会加入自己的报头。

- HTTP 层报头是简单文本 (0.7~2 KB)，开销大。
- TCP 层和 IP 层的报头信息是二进制的。

## 网络性能的度量标准

网络吞吐量 (throughput) 或带宽 (bandwidth)：给定时间内所能传输的原始数据量。

延时 (latency)：1 位数据在两台计算机间的传输时间。
- 当请求很多，而且这些请求的传输都依赖于之前的请求能否顺利完成的情况下，延时是非常重要的因素。
- HTTP 的报头含有缓存信息，可以让客户端重用缓存资源，从而降低延时。
- 当数据很小且唯一，就无法从缓存机制中获益，传输报头失去意义。

## 轮询与事件驱动

传统的客户端轮询：向服务器询问是否存在新信息。

事件驱动机制：当出现新信息时，服务器主动发送给客户端，适用于实时应用。

两种 HTML/JS 的 hack 技巧：
- 长轮询 (long polling)：服务器不会立刻响应请求，而是一直开放连接，直到有新数据生成才响应。浏览器接收到新数据后，就初始化另一个长轮询。
- 持久数据帧 (forever frame)：Web 页面被加载到隐藏的 `<iframe>` 元素中。

## 事件驱动 Web 应用的服务器端选择

HTML5 中有两种新的事件驱动的客户端-服务器端 API：
- 服务器发送事件 SSE
- WebSocket

传统的 Web 服务器中，每个网络连接都会被分配一个专门的线程或进程。
- 适用的模式：网络连接数据密集，但生命周期较短。比如资源下载。
- Apache

事件驱动通信机制
- 适用的模式：网络连接生命周期较长，但更新活动相对较少。
- Lighttpd 和 nginx，通过在连接间分享进程，使处理能力大大提高。

## WebSocket

WebSocket 协议能在客户端与服务器间形成一种代价极小且十分简单的网络连接。
- WebSocket 协议：浏览器和服务器必须实现的后台内容。
- WebSocket API：需要在 DOM 中获取的接口，以便用 js 来使用 WebSocket。

WebSocket 协议描述了具体步骤：建立 WebSocket 连接，交换消息，最终关闭连接。
- WebSocket 握手有意遵循了 HTTP 请求的模式。报头表明希望从 HTTP 升级到 WebSocket。
- 服务器响应接收更新请求：状态码 101 Switching Protocols

WebSocket 数据帧
- 帧是一种轻量级的数据容器。
- 非数据部分仅占 48 位，6 个字符长度。

## reference

《HTML5 实战》附录 D