// 对应 07-singleobject.js 中的方法 1
// var HelloConstructor = require('./07-singleobject').Hello;
// // require('./07-singleobject') 得到的是 object；
// // require('./07-singleobject').Hello 是调用 method 得到一个 constructor
// hello = new HelloConstructor();
// hello.setName('bear');
// hello.sayHello();


// 对应 07-singleobject.js 中的方法 2
var Hello = require('./07-singleobject');
hello = new Hello();
hello.setName('bear');
hello.sayHello();
// 可以创建新对象，不会覆盖上一个结果。
var Hey = require('./07-singleobject');
hey = new Hey()
hey.setName('rabbit')
hey.sayHello()