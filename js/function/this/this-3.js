// 误用 this
// 1.试图通过 this.bar() 引用 bar() 函数 -- 这绝不可能成功；
//   调用 bar() 最自然的方法是省略前面的 this，直接使用词法引用标识符。
// 2.试图通过 this 联通 foo() 和 bar() 的词法作用域，从而让 bar() 可以访问 foo() 作用域里的变量 a -- 这也不可能实现。
//   不能使用 this 来引用一个词法作用域内部的东西。
// 注意！this 和词法作用域的查找不能混合使用！

function foo() {
    var a = 2;
    this.bar(); // 这是错误的写法
}

function bar() {
    console.log(this.a);
}

foo(); 

// node 运行结果：TypeError: this.bar is not a function
// chrome 运行结果：undefined
// (与网友的运行结果一致：https://book.douban.com/annotation/37398585/)
// 书上：ReferenceError