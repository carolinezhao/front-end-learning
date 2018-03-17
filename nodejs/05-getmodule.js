// 通过 require 加载 module 模块，就可以直接访问 module.js 中 exports 对象的成员函数了。
// 注意引入文件时的 ./ 不可以省略。
var myModule = require('./05-module.js');
// myModule 中存储的是一个object，即 exports
console.log(myModule)
// 调用 exports 对象的成员函数 object.method();
myModule.setName('Rabbit');
myModule.sayHello();

// 这个例子有点类似于创建一个对象，但实际上和对象有本质的区别。
// 因为 require 不会重复加载模块，无论调用多少次，获得的模块都是同一个。