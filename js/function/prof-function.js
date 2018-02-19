// 第5章 引用类型
// 5.5 Function 类型
// 函数实际上是对象。每个函数都是 Function 类型的实例，而且都与其他引用类型一样具有属性和方法。

// 定义函数：函数声明语法；函数表达式；Function 构造函数（不推荐）

// 函数名实际上是一个指向函数对象的指针，不会与某个函数绑定。
function sum(num1, num2){
    return num1 + num2;
}
console.log(sum(6,10));
// 使用不带圆括号的函数名是访问函数指针，而非调用函数。
var anotherSum = sum; // 将 sum 的值赋给 anotherSum，两个函数名都指向了同一个函数
console.log(anotherSum(6,10));
sum = null;
console.log(anotherSum(6,10));
console.log('')


// 5.5.1 没有重载
// 声明两个同名函数，后面的函数会覆盖前面的函数。


// 5.5.2 函数声明与函数表达式
// 区别：什么时候可以通过变量访问函数
// 【函数声明】定义可在调用之后
// 解析器会率先读取函数声明，并使其在执行任何代码之前可用 (可以访问)；
// 通过函数声明提升 (function declaration hoisting) 的过程，读取并将函数声明添加到执行环境中。
// 【函数表达式】定义必须在调用之前
// 必须等到解析器执行到它所在的代码行，才会真正被解释执行。
// （另见 prof-function-expressions.md）


// 5.5.3 作为值的函数
// 因为函数名本身就是变量，所以函数也可以作为值来使用。
// 可以像传递参数一样把一个函数传递给另一个函数，也可以将一个函数作为另一个函数的结果返回。
function callSomeFunction(someFunction, someArgument) {
    return someFunction(someArgument)
}

function add10(num) {
    return num + 10
}

var result1 = callSomeFunction(add10, 8) // 访问函数指针，函数名后不加括号！！
console.log(result1)
