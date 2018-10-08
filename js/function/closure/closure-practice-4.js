// https://www.cnblogs.com/xxcanghai/p/4991870.html

// 考察：函数，作用域，闭包

// 具名函数 vs. 匿名函数
// 1) 函数声明
function fn1() {}
console.log(fn1.name);

// 2) 匿名函数表达式：变量的内容为一个匿名函数
var fn2 = function () {}

// 3) 具名函数表达式：变量的内容为一个带有名称的函数，但是该函数名只能在函数内部使用
var fn3 = function fn4() {
    console.log(fn4.name); // fn4
}
fn3();
// console.log(fn4.name); // fn4 is not defined

// 在对象内定义的函数属于函数表达式 (匿名？)
// IIFE 属于函数表达式

// 在函数表达式内部是否能访问存放当前函数的变量？
// 使用 var 或非对象内部的函数表达式内，可以访问到存放当前函数的变量；
// 在对象内部的不能访问到。


function fun(n, o) {
    console.log(o)
    return {
        fun: function (m) { // 新创建的匿名函数表达式
            return fun(m, n); // 与最外层是同一个函数
        }
    };
}

var a = fun(0); // n=0，返回对象
console.log(a);
a.fun(1); // m=1, n 拿到的是第一次调用传入的 n 的值 0 (闭包)
a.fun(2);
a.fun(3);
// 结果：undefined, 0, 0, 0

var b = fun(0).fun(1).fun(2).fun(3);
// 第二步参数：1,0; 第三步参数：2,1; 第四步参数：3,2
// 结果：undefined, 0, 1, 2

var c = fun(0).fun(1);
console.log(c);
c.fun(2);
c.fun(3);
// 结果：undefined, 0, 1, 1