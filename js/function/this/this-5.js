function foo() {
    // "use strict";
    console.log(this.a)
}

var a = 2;

foo();

// node 结果：undefined
// chrome 结果：2
// 书中结果：2

// 声明在全局作用域中的变量就是全局对象的一个同名属性，本质上就是一个东西。
// 调用 foo() 时，this.a 被解析成了全局变量 a。此时应用了 this 的默认绑定，this 指向全局对象。

// 注：一般情况下，严格模式和非严格模式不能混用。
// 如果使用严格模式 (strict mode)，全局对象无法使用默认绑定，this 会绑定到 undefined。
// node 结果：TypeError: Cannot read property 'a' of undefined
// chrome 结果：2
// 书中结果：TypeError: this is undefined
// 网友运行结果：https://book.douban.com/review/7819875/

// 虽然 this 的绑定规则完全取决于调用位置，但是只有函数运行在非严格模式下，默认绑定才能绑定到全局对象。
// 严格模式下与函数的调用位置无关。

function foo1() {
    console.log(this.b);
}

var b = 3;

(function () {
    "use strict";
    foo1();
})();

// node 结果：undefined
// chrome 结果：无输出，this.b 为 undefined
// 书中结果：2