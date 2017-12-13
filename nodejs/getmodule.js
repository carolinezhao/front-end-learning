// 通过 require 加载 module 模块，就可以直接访问 module.js 中 exports 对象的成员函数了。
// 注意引入文件时的 ./ 不可以省略。
var myModule = require('./module');
// myModule 中存储的是一个object，即 exports
// 以下是调用函数 object.method();
myModule.setName('Rabbit');
myModule.sayHello();