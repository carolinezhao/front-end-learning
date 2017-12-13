// 通过 exports 对象把 setName 和 sayHello 作为模块的访问接口。
var name;
exports.setName = function (thyName) {
    name = thyName;
};
exports.sayHello = function () {
    console.log('Hello ' + name);
};