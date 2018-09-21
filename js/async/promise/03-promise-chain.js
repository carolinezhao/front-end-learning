/*
串联 Promise
Promise(p1) 每次调用 then() 或 catch()，都会创建并返回一个新的 Promise(p2)。
只有 p1 被解决，p2 才能调用 then() 或 catch()。

p1.then().then() 相当于：
p2 = p1.then(); // 结果存储在 p2 中
p2.then();

链式 Promise 调用可以捕获上游的错误。因此务必保证在链的末尾添加拒绝处理程序。

同一个 Promise 的第一个 then() 同时开始执行，互不影响。
*/

let p1 = Promise.resolve(5);

p1.then(value => console.log('case1-1: ' + value))
    .then(() => {
        console.log('case1-2: then...');
        throw new Error('Error!');
    }).catch(error => console.log('case1-3: ' + error.message)); // 捕获上游的错误

let p2 = new Promise((resolve, reject) => {
    throw new Error('Error! from executor'); // 执行器抛出错误
});

p2.then(value => console.log('case2-1: ' + value)) // 没有调用
    .catch(error => {
        console.log('case2-2: ' + error.message);
        throw new Error('Error! from second handler'); // 处理程序抛出错误
    }).catch(error => console.log('case2-3: ' + error.message));


/*
Promise 链的返回值 (回调函数中 return 的值)：给下游 Promise 传递数据
1) 没有返回值 (前面的案例)
2) 返回一个普通 value
3) 返回一个 Promise
*/

let p3 = Promise.resolve(10);

p3.then(value => {
    console.log('case3-1: ' + value);
    return value * 2;
}).then(value => console.log('case3-2: ' + value));

p3.catch(value => {
    console.log('case4-1: ' + value);
    return value + 20; // 没有调用
}).then(value => console.log('case4-2: ' + value));

let p4 = Promise.reject(10);

// 拒绝处理程序中返回的值仍可用在下一个 Promise 的完成处理程序中。
// 因此即使其中一个 Promise 失败也能恢复整条链的执行。
p4.catch(value => {
    console.log('case5-1: ' + value);
    return value + 20; // 调用
}).then(value => console.log('case5-2: ' + value)); // 调用


// 在 Promise 链中返回一个 Promise(p2)
// - 如果 p2 已完成，则调用第二个完成处理程序；
// - 如果 p2 被拒绝，则调用拒绝处理程序，不会调用第二个完成处理程序。
// 注意：第二个完成处理程序被添加到第三个 Promise (p1 调用 then 返回的) 而不是 p2 (回调函数的返回值)。
// 区分：调用 then 返回的值 vs. then 中回调函数的返回值
let promise1 = Promise.resolve('Resolve!');
let promise2 = Promise.reject('Reject!');

promise1.then(value => {
        console.log('case6-1: ' + value);
        return promise2; // 被拒绝的
    }).then(value => console.log('case6-2: ' + value)) // 没有调用
    .catch(err => console.log('case6-3: ' + err));


// 在 promise1 的完成处理程序中创建新的 Promise，直到 promise3 被完成才会执行第二个完成处理程序。
// 可应用于以下情况：
// - 推迟完成处理程序的执行；
// - 在一个 Promise 被解决后触发另一个 Promise。
promise1.then(value => {
    console.log('case7-1: ' + value);
    let promise3 = Promise.resolve('Nested.');
    return promise3;
}).then(value => console.log('case7-2: ' + value));