// 通过 require 加载 module 模块，就可以直接访问 module.js 中 exports 对象的成员函数了。

var myModule = require('./module');
myModule.setName('Rabbit');
myModule.sayHello();