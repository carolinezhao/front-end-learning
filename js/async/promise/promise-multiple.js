let p1 = new Promise(function (resolve, reject) {
    resolve(11);
});

let p2 = new Promise(function (resolve, reject) {
    resolve(22);
});

let p3 = new Promise(function (resolve, reject) {
    resolve(33);
});

let p4 = Promise.resolve('已完成');
let p5 = Promise.reject('已拒绝');


// Promise.all()
// 所有传入的 Promise 都处于完成状态后 promise1 才被完成。
let promise1 = Promise.all([p1, p2, p3]);

promise1.then(function (value) {
    console.log(Array.isArray(value));
    console.log(value[0]);
    console.log(value[1]);
    console.log(value[2]);
});

// 只要有一个被拒绝，则无需等到所有 Promise 都完成就立即被拒绝。
let promise3 = Promise.all([p1, p5, p2]);

// 拒绝处理程序的参数是一个值——来自被拒绝的 Promise 的拒绝值。
promise3.catch(function (value) {
    console.log(Array.isArray(value)); // false
    console.log(value);
});


// Promise.race()
// 只要有一个 Promise 被解决，返回的 Promise 就被解决，无需等到所有都被完成。
let promise2 = Promise.race([p4, p2, p3]);

promise2.then(function (value) {
    console.log(value);
});

// 如果先解决的是已拒绝的 Promise，则返回已拒绝 Promise。
let promise4 = Promise.race([p5, p1, p3]);

promise4.catch(function (value) {
    console.log(value);
});