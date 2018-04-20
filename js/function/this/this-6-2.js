// 隐式丢失
// 最常见的 this 绑定问题：被隐式绑定的函数丢失绑定对象，它会应用默认绑定，从而把 this 绑定到全局对象或者 undefined 上，取决于是否是严格模式。

function foo() {
    console.log(this.a);
}

var obj = {
    a: 30,
    foo: foo
}

obj.foo(); // 30 (node, chrome)，这是隐式绑定的结果

var a = 'oops, global'; // a 是全局对象的属性


// 隐式丢失1: 函数引用
var bar = obj.foo; // 函数别名
// 虽然 bar 是 obj3.foo2 的一个引用，但它引用的是 foo2 函数本身。
// 因此 bar() 其实是一个不带任何修饰的函数调用，应用了默认绑定。

bar();
// node 结果：undefined
// chrome 结果：oops, global
// (bug: 如果文件名为 this-6.js，无法读取 foo2, obj3, bar；改为 this-6-1.js 就没问题)
// 书上结果：oops, global


// 隐式丢失2: 传入回调函数时
function doFoo(fn) {
    // fn 引用的是 foo
    fn(); // 调用位置
}
// 参数传递其实就是一种隐式赋值？？
// 会丢失 foo 原有的绑定对象，绑定到全局对象。

doFoo(obj.foo);
// node 结果：undefined
// chrome 结果：oops, global
// 书上结果：oops, global


// 隐式丢失3: 传入内置的函数
setTimeout(obj.foo, 1000)
// node 结果：undefined
// chrome 结果：oops, global
// 书上结果：oops, global

// js 环境中内置的 setTimeout() 函数实现相当于：
// function setTimeout(fn, delay) {
//     // 等待 delay 毫秒
//     fn(); // 调用位置
// }


// 回调函数丢失 this 绑定是非常常见的。
// 此外，调用回调函数的函数可能会修改 this。