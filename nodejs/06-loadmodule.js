// 单次加载
var hello1 = require('./05-module');
hello1.setName('rabbit');

var hello2 = require('./05-module');
hello2.setName('caroline');

hello1.sayHello(); // Hello caroline
// 两个变量指向同一个实例，输出结果由最新的决定。