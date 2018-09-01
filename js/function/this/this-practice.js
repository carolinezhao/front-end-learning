// https://github.com/forrany/Web-Project/blob/master/%E5%9B%9B%E3%80%81JavaScript%E6%8E%92%E5%9D%91%E6%8C%87%E5%8D%97(%E4%B8%89).md

var length = 10;

function fn() {
    console.log(this.length); // 浏览器中 this 指向 window 对象；node 中 undefined
}

var obj = {
    length: 5,
    method(fn) {
        fn();
        arguments[0]();
    }
};

obj.method(fn, 1);

/* 知识点
浏览器中运行结果：10 2
fn() 中的 this 没有绑定，仍指向 window，输出 10。
arguments[0]() 相当于执行第一个参数，this 指向【arguments 实例本身】。
arguments 是一个类数组，具有 length 属性，值为 2。

arguments 用法另见 ../prof-function.js
*/

console.log('');

function test() {
    this.length = 10;
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[0]());
    (function () {
        console.log(this.length);
    })();
}

test(function () {
    console.log(this.length);
    console.log(this[2]);
}, 'a', 'b')