/*
全局 Promise 拒绝处理

Node.js 环境的拒绝处理
处理 Promise 拒绝时会触发 process 对象上的两个事件。
这些事件用于识别被拒绝但是没被处理过的 Promise。
区别是：
- unhandledRejection 事件循环中被调用
- rejectionHandled 事件循环后被调用
*/

let rejected;

process.on('unhandledRejection', (reason, promise) => {
    console.log(reason.message);
    console.log(rejected);
});

process.on('rejectionHandled', (promise) => {
    console.log(rejected === promise);
});

rejected = Promise.reject(new Error('Error!'));

// 等待添加拒绝处理程序
setTimeout(() => {
    rejected.catch((err) => console.log(err.message));
}, 1000);

// 如果创建 rejected 之后直接添加拒绝处理程序，则 rejectionHandled 事件不会被触发。
// 因为 rejected 创建的过程与拒绝处理程序的调用在同一个事件循环中，此时 rejectionHandled 事件尚未生效。


// 通过两个事件将潜在未处理的拒绝存储为一个列表，等待一段时间后检查列表，从而正确跟踪潜在的未处理拒绝。
let possiblyUnhandledRejections = new Map();

process.on('unhandledRejection', (reason, promise) => {
    possiblyUnhandledRejections.set(promise, reason);
});

process.on('rejectionHandled', (promise) => {
    possiblyUnhandledRejections.delete(promise);
});

setInterval(() => {
    possiblyUnhandledRejections.forEach((reason, promise) => {
        console.log(reason.message ? reason.message : reason);
        // 处理这些拒绝
        // handleRejection(promise, reason);
    });
    possiblyUnhandledRejections.clear();
}, 60000);