/*
Promise.all() 和 Promise.race()
1 个参数：包含多个 Promise 的可迭代对象
返回值：Promise

Promise.all() 的规则
所有 Promise 都被解决后，返回的 Promise 才被解决；
所有 Promise 都被完成后，返回的 Promise 才被完成；
只要有一个 Promise 被拒绝，返回的 Promise 无需等到所有 Promise 都完成就立即被拒绝。

Promise.race() 的规则
传入的 Promise 会竞选，以决出哪一个先被解决。
只要有一个 Promise 被解决 (无论完成还是拒绝)，返回的 Promise 就被解决。

Promise.all() 由最慢的或者被拒绝的决定；
Promise.race() 由最快的决定。
*/

let p1 = new Promise(function (resolve, reject) {
    resolve(11);
});

let p2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(22);
    }, 1000);
});

let p3 = Promise.resolve(33);

let p4 = Promise.reject('Reject');


let promise1 = Promise.all([p1, p2, p3]);
// 完成处理程序的参数是一个包含每个解决值的数组，这些值与传入的 Promise 顺序对应。
promise1.then(function (value) {
    console.log(Array.isArray(value)); // true
    console.log(value[0]);
    console.log(value[1]);
    console.log(value[2]);
});

let promise2 = Promise.all([p1, p4, p2]);
// 拒绝处理程序的参数是一个值——来自被拒绝的 Promise 的拒绝值。
promise2.catch(function (value) {
    console.log(Array.isArray(value)); // false
    console.log(value);
});


let promise3 = Promise.race([p2, p1, p3]);
promise3.then(function (value) {
    console.log(value);
});

let promise4 = Promise.race([p2, p4, p1]);
promise4.then(function (value) {
    console.log(value);
}).catch(function (value) {
    console.log(value);
});