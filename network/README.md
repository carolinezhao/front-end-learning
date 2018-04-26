# Network

## index

- 《网络是怎样连接的》 --> _how-networks-work.md_

- 《图解 HTTP》 --> _http-系列_

- session

## 开发环境服务器

在浏览器中打开本地 HTML，当某个属性不支持跨域时，需要开启服务器。<br>
比如使用 Vue.js DevTools，用此方式打开才能检测到。

安装

    $ npm install -g httpserver

启动

    $ httpserver

返回

```shell
lo0: 127.0.0.1
en0: 192.168.x.x
awdl0: null
utun0: null
utun1: null
server started: http://0.0.0.0:8080
```
cmd + 点击上面的地址 --> 在浏览器中打开当前目录 --> 打开目标文件

127.0.0.1 / localhost --> 启动某个服务器，只有本机能通过此地址访问

192.168.x.x 是本机在局域网中的 IP 地址 --> 指定服务器的 host 为 0.0.0.0，局域网内的电脑都能通过该 IP 地址访问

另一种查询方法
```shell
$ ifconfig

返回内容中的
inet 192.168.x.x
```