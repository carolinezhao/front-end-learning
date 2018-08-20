// https://zhuanlan.zhihu.com/p/25407758

// 普通循环
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

// 输出五个 5
// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000 * i);
// }

// test
// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i, new Date().getSeconds())
//     }, 1000 * i)
// }

// 闭包，输出 0-4
// for (var i = 0; i < 5; i++) {
//     (function (j) {
//         setTimeout(function () {
//             console.log(j);
//         }, j * 1000);
//     })(i);
// }

// i 没有传入闭包内部，输出五个 5
// for (var i = 0; i < 5; i++) {
//     (function () {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     })(i);
// }

// setTimeout 中的 callback 必须是函数。这里是 IIFE。
// node --> TypeError
// 文章中说 IIFE 会立即执行，输出 0-4
// for (var i = 0; i < 5; i++) {
//     setTimeout((function (j) {
//         console.log(j);
//     })(i), i * 1000);
// }

// 输出顺序：2 3 5 4 1
// Promise 的 4 在 1 前面输出的原因：
// Promise.then() 里面的回调属于 microtask，会在当前 Event Loop 的最后执行；
// 而 SetTimeout 内的回调属于 macrotask，会在下一个 Event Loop 中执行。
setTimeout(function () {
    console.log(1)
}, 0);
new Promise(function executor(resolve) {
    console.log(2);
    for (var i = 0; i < 10000; i++) {
        i == 9999 && resolve();
    }
    console.log(3);
}).then(function () {
    console.log(4);
});
console.log(5);