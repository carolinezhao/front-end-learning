### 向服务器发送异步请求 send asynchronous requests to server

使用 [json-server](https://github.com/typicode/json-server) 模拟服务器

* 在 db.json 所在目录下，开启服务器。db.json 作为模拟后端的数据。
	
		json-server --watch db.json

* Resources 表示可访问路径，即可作为 ajax 访问的 URL 写在 ajax-login.js 的 getToken 函数中。

		http://localhost:3000/login
	
* 前端向服务器发出请求后，终端会显示由前端传入的数据。ajax-login.html 中定义需要输入 email 和 password 进行登录。

		GET /login?email=happy@anniversary&password=1101 200 7.468 ms - 40
		
* 前端可读取服务器返回的数据，此处即写在 json 文件内的数据。

		{ "token": "I'm a token from server" }