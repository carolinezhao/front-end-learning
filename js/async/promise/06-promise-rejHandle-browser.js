/*
全局 Promise 拒绝处理

浏览器环境的拒绝处理
这些事件用于识别被拒绝但是没被处理过的 Promise。
区别是：
- unhandledrejection 事件循环中被调用
- rejectionhandled 事件循环后被调用

事件处理程序的参数为一个事件对象，包含以下属性：
type 事件名称
promise 被拒绝的 Promise 对象
reason 来自 Promise 的拒绝值
*/

let rejected;

// 使用 DOM0 (on...) 级或 DOM2 级 (addEventListener) 均可。

window.onunhandledrejection = function (event) {
    console.log(event);
    console.log(event.type);
    console.log(event.reason.message);
    console.log(rejected === event.promise);
};

window.addEventListener('rejectionhandled', function (event) { // 调用时机？
    console.log(event.type);
    console.log(event.reason.message);
    console.log(rejected === event.promise);
});

rejected = Promise.reject(new Error('Boom!'));

// 等待添加拒绝处理程序
setTimeout(() => {
    rejected.catch((err) => console.log(err.message));
}, 1000);

// 跟踪未处理拒绝的代码同 Node.js