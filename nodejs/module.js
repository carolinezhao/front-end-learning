// Node.js 中，一个文件就是一个模块。
// 提供两个对象：
// exports 模块公开的接口；
// require 从外部获取一个模块的接口，即获取到模块的 exports 对象。

// 本例中，通过 exports 对象把 setName 和 sayHello 作为模块的访问接口。
var name;
exports.setName = function (thyName) {
    name = thyName;
};
exports.sayHello = function () {
    console.log('Hello ' + name);
};