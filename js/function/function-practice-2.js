// https://segmentfault.com/a/1190000016163499

// 考察：参数作用域，默认参数值

// 如果参数默认值是一个变量，则该变量所处的作用域，与其他变量的作用域规则一样。

let x = 1;

(function f(x, y = x) {
    console.log(y); // 2
})(2);
// 函数调用时，函数作用域内部的变量 x 已经生成。

(function f(y = x) {
    let x = 2;
    console.log(y); // 1
})();
// 函数调用时，y 的默认值变量 x 尚未在函数内部生成，所以 x 指向全局变量。

(function f(x, y = function () {
    x = 2;
}) {
    var x = 3;
    // x = 3;
    y();
    console.log(x);
})();
// 函数调用时，参数 x 的值为 undefined，所以 y 函数内部的 x 一开始是 undefined，后来被赋值 2。
// 函数内部重新声明了一个 x，与 y 中的 x 互不影响，输出 3。
// 如果直接给 x 赋值，不是重新声明，则输出 2。
// let 不能用于重复声明，如果用 let 会报错。