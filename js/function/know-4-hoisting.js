// 第4章 提升

// 所有声明（变量声明，函数声明）都会在任何代码执行前被首先处理。

// 只有声明会被提升，赋值或其他运行逻辑会留在原地。
// 对于 var a = 2; 定义声明 (var a;) 在编译阶段进行，赋值声明 (a = 2;) 留在原地等待执行。
// --> example 1&2

// 每个作用域都会进行提升操作 (函数声明本身，及其内部的变量声明)。
// --> example 3

// 函数声明会被提升，函数表达式不会被提升。
// --> example 4

// 函数先被提升，然后才是变量 (会出现在有多个“重复”声明的代码中)。
// 出现在后面的函数声明可以覆盖前面同名的。
// --> example 5

// 一个普通块 (比如if) 内部的函数声明通常会被提升到所在作用域的顶部，应避免在块内部声明函数。


// example 1 变量声明的提升
a = 2
var a
console.log(a) // 2
// 实际的顺序
// var a --> 编译
// a = 2 --> 执行
// console.log(a)


// example 2 变量声明的提升
console.log(b) // undefined
var b = 2
// 实际的顺序
// var b
// console.log(b)
// b = 2

// example 3 函数声明及其内部变量声明的提升
foo()
function foo() {
    console.log(a) // undefined
    var a = 2
}
// 实际的顺序
// function foo() {
//     var a // 函数自身会对内部的变量声明提升
//     console.log(a)
//     a = 2
// }
// foo()


// example 4 函数表达式不会被提升

// bar() // TypeError
// 变量标识符 bar() 被提升并分配给所在作用域，因此不会导致 ReferenceError。
// 但 bar 此时没有赋值 (如果它是函数声明就会赋值？？？)
// bar() 由于对 undefined 值进行函数调用而导致非法操作，抛出 TypeError。

// baz() // ReferenceError
// 即使是具名函数表达式，名称标识符在赋值之前也无法在所在作用域中使用。？？？
var bar = function baz() {
    console.log('bar')
}
// 实际的顺序
// var bar
// bar()
// baz()
// bar = function() {
//     var baz = ... ？？？
// }


// example 5 函数声明会被提升到普通变量之前
hey() // 1
var hey // 尽管出现在 function hey() 之前，但它是重复的声明（因此被忽略了）
function hey() {
    console.log(1)
}
hey = function() {
    console.log(2)
}
// function hey() {
//     console.log(3) 
// } // 此情况下最前面的 hey() 输出3
// 实际的顺序
// function hey() {
//     console.log(1)
// }
// hey()
// hey = function() {
//     console.log(2)
// }