// http://www.cnblogs.com/TomXu/archive/2012/02/10/2342098.html

// chrome 环境

if (!("a" in window)) {
    var a = 1;
}
console.log(a); // undefined
/*
var 变量提升
var 用于全局作用域时，会创建一个新的全局变量作为全局对象 (浏览器中的 window 对象) 的属性。
检查属性是否存在 property in object

if 语句的结果为 false，因此没有重新赋值
*/


var c = 1,
    b = function c() {
        console.log(c);
        console.log(b);
    };
console.log(c); // 1
b();

function d(x) {
    return x * 2;
}
var d;
console.log(typeof d); // function
// 变量声明遇到同名的函数声明，不会重新定义

function d1(x) {
    return x * 2;
}
var d1 = 1;
console.log(typeof d1); // number
// 但如果变量赋了值，就会覆盖函数声明


(function e(x, y, a) {
    arguments[2] = 10;
    console.log(a); // 10
})(1, 2, 3);

(function e(x, y, a) {
    arguments[2] = 10;
    console.log(a); // undefined
})(1, 2);


function f() {
    console.log(this);
}
f.call(null);
// 当第一个参数是 null, undefined 或为空，this 指向全局对象