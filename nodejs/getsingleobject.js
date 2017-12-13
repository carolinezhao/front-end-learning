// 对应 singleobject 中的方法 1
// var HelloConstructor = require('./singleobject').Hello;
// // require('./singleobject') 得到的是 object；
// // require('./singleobject').Hello 是调用 method 得到一个 constructor
// hello = new HelloConstructor();
// hello.setName('bear');
// hello.sayHello();

// 对应 singleobject 中的方法 2
var Hello = require('./singleobject');
hello = new Hello();
hello.setName('bear');
hello.sayHello();