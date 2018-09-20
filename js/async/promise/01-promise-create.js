/*
Creating Promises

1) Creating Unsettled Promises
构造函数 new Promise(function (resolve, reject) {...});
- 构造函数 1 个参数：初始化 Promise 代码的执行器 (executor) 函数；
- 执行器 2 个参数：resolve() 和 reject()，分别用于成功时和失败时调用。

2) Creating Settled Promises
--> 01-promise-settled.js

---

then() 方法
两个参数都是可选的
- 参数1: 完成函数，即 Promise 状态为 fulfilled (resolved) 时调用的函数。接收 resolve() 传递的结果数据。
- 参数2: 拒绝函数，即 Promise 状态为 rejected 时调用的函数。接收 reject() 传递的错误原因。

catch() 方法
相当于只传入拒绝函数的 then() 方法。

then() 和 catch() 结合使用能更好地处理异步操作结果。
*/

let promise0 = new Promise((resolve, reject) => {}); // 执行器不可省略，否则会报错。

let promise1 = new Promise((resolve, reject) => {
    resolve('Resolved!');
});

let promise2 = new Promise((resolve, reject) => {
    reject('Error!');
});

console.log(promise0); // <pending>
console.log(promise1); // <resolved>
console.log(promise2); // <rejected>

console.log(Promise.length); // 1
console.log(promise1.__proto__ === Promise.prototype); // true
console.log(promise1.__proto__.__proto__ === Object.prototype); // true

promise1.then(contents => {
    // 完成
    console.log(contents);
}, err => {
    // 拒绝
    console.log(err);
});

promise2.catch(err => {
    // 拒绝
    console.log(err);
});