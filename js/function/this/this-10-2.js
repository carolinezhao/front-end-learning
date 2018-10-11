// 如果创建了一个函数的“间接引用”，调用时会应用默认绑定规则。
// 间接引用最容易在赋值时发生。
// 参考 this-6-2.js

function foo() {
    console.log(this.a);
}

var a = 2;
var o = {
    a: 3,
    foo: foo
};
var p = {
    a: 4
};

o.foo();
(p.foo = o.foo)();

// 赋值表达式 p.foo = o.foo 的返回值是目标函数的引用，因此调用位置是 foo() 而不是 p.foo() 或 o.foo()。

// 注意：对于默认绑定来说，决定 this 绑定对象的并不是调用位置是否处于严格模式，而是函数体是否处于严格模式。
// 如果函数体处于严格模式，this 会被绑定到 undefined，否则 this 被绑定到全局对象。