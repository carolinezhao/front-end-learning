// 此文件为 know-3-scope.md 中示例代码的实际执行

// ===== 理论见 3.2 =====
function doSomething(a) {
    function doSomethingElse(a) {
        return a - 1
    }
    var b
    b = a + doSomethingElse(a * 2)
    console.log(b * 3)
}
doSomething(2)

function foo() {
    function bar(a) {
        var i = 3
        console.log(a, i)
    }
    for (var i = 0; i < 10; i++) {
        bar(i * 2)
    }
}
foo()

// ===== 理论见 3.3 =====
var b = 2; // 此处必须有分号，否则无法识别函数表达式

(function foo() {
    var b = 3
    console.log(b)
})();

console.log(b);

// ===== 理论见 3.3.2 =====

// 以下代码在 chrome 中执行
var a = 2;

// (function IIFE(global) {
//     var a = 3
//     console.log(a)
//     console.log(global.a)
// })(window);

// 等同于
// (function IIFE() {
//     var a = 3
//     console.log(a)
//     console.log(window.a)
// })();

console.log(a);