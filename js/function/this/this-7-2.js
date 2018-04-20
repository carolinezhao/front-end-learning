function foo() {
    console.log(this.a)
}

var obj = {
    a: 2
}

// 硬绑定：显式的强制绑定
// 把 foo 的 this 绑定到 obj，无论如何调用 bar，它总会在 obj 上调用 foo？？
var bar = function () {
    foo.call(obj);
}

bar(); // 2
setTimeout(bar, 1000); // 2

// 硬绑定的 bar 不可能再修改它的 this
// bar.call(window); // 2 (chrome)

// 硬绑定的典型应用场景：创建一个包裹函数，传入所有的参数并返回接收到的所有值。
function foo1(sth) {
    console.log(this.a, sth);
    return this.a + sth;
}

var baz = function () {
    return foo1.apply(obj, arguments);
}

var z = baz(3); // 2 3
console.log(z) // 5

// 或者创建一个 i 可以重复使用的辅助函数
function bind(fn, obj) {
    return function () {
        return fn.apply(obj, arguments);
    };
}

var bah = bind(foo1, obj);

var h = bah(6); // 2 6
console.log(h); // 8

// 由于硬绑定是一种非常常用的模式，ES5 提供了内置的方法 Function.prototype.bind
// bind(..) 会返回一个硬编码的新函数，它会把参数设置为 this 的上下文并调用原始函数。
var bak = foo1.bind(obj); // 2 8
var k = bak(8); // 10
console.log(k);

// 没有标注的结果, node 和 chrome 一致。