let p1 = new Promise(function (resolve, reject) {
    resolve(11);
});

let p2 = new Promise(function (resolve, reject) {
    resolve(22);
});

let p3 = new Promise(function (resolve, reject) {
    resolve(33);
});

// 所有传入的 Promise 都处于完成状态后 promise1 才被完成。
// 只要有一个被拒绝，则无需等到所有 Promise 都完成就立即被拒绝。
let promise1 = Promise.all([p1, p2, p3]);

promise1.then(function (value) {
    console.log(Array.isArray(value));
    console.log(value[0]);
    console.log(value[1]);
    console.log(value[2]);
})

// 拒绝处理程序的参数是一个值——来自被拒绝的 Promise 的拒绝值。
// 比如 p2 被拒绝，不等 p1 和 p3 结束执行，promise1 的拒绝处理程序就立即被调用。
promise1.catch(function (value) {
    console.log(Array.isArray(value)); // false
    console.log(value); // 22 (当 p2 被拒绝时)
});

let p4 = Promise.resolve(55);

// 只要有一个 Promise 被解决，返回的 Promise 就被解决，无需等到所有都被完成。
// 如果先解决的是已拒绝的 Promise，则返回已拒绝 Promise。
let promise2 = Promise.race([p4, p2, p3]);

promise2.then(function (value) {
    console.log(Array.isArray(value)); // false
    console.log(value); // 55
});