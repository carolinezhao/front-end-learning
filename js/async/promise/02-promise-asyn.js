/*
Promise 中的异步

Promise 执行器会立即执行 (同步任务)；
调用 resolve 或 reject，会向任务队列中添加一个任务来解决这个 Promise (异步任务)。
then 方法中的回调函数添加到微任务 (microtask) 队列中异步执行。
对比：setTimeout 中的函数添加到宏任务 (macrotask) 队列中异步执行。

更多案例见 event-loop.md
*/

setTimeout(() => {
    console.log('Timeout!'); // 6
}, 0)

console.log('Hello!'); // 1

let promise1 = new Promise((resolve, reject) => {
    console.log('Promise!'); // 2
    resolve('Resolved!');
});

promise1.then(value => {
    console.log(value); // 4
})

let promise2 = Promise.resolve('Settled!');

promise2.then(value => {
    console.log(value); // 5
})

console.log('Hi!'); // 3