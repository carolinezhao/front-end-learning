// https://github.com/forrany/Web-Project/blob/master/%E5%9B%9B%E3%80%81JavaScript%E6%8E%92%E5%9D%91%E6%8C%87%E5%8D%97(%E4%B8%89).md
// https://juejin.im/post/5ae185f96fb9a07ac76e83be

// 考察：this, arguments, call()

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
    arguments[0]();
    (function () {
        console.log(this.length);
    })();
}

test(function () {
    console.log(this.length);
    console.log(this[2]);
}, 'a', 'b')

console.log('');



// 非严格模式
function sum1(a, b) {
    arguments[0] = 4;
    arguments[1] = 6;
    console.log(a + b);
}

sum1(1, 2);
sum1.call(undefined, 1, 2);
// 函数以 .call() 的方式调用，arguments 指的是第二个及之后的参数组成的伪数组。

// 严格模式
function sum2(a, b) {
    'use strict'
    arguments[0] = 4;
    arguments[1] = 6;
    console.log(a + b);
}

sum2(1, 2);
sum2.call(undefined, 1, 2);
// 严格模式下，更新 arguments 的值不会同步到参数。