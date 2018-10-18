# 开发环境服务器

安装

    $ npm install -g httpserver

启动

    $ httpserver

You can pass in arguments to change the port and host, as well as environmental variables

    $ httpserver 80 localhost

or

    $ HTTPSERVER_PORT=80 HTTPSERVER_HOST=127.0.0.1 httpserver

按照默认配置启动后，返回以下内容

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

Error: listen EADDRINUSE 0.0.0.0:8080 --> error address in use 监听的端口已被占用