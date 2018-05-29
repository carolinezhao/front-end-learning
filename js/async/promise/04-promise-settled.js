// 返回完成态 Promise
let promise1 = Promise.resolve(66);

// 只调用完成处理函数
promise1.then(function(value) {
    console.log(value);
});

// 返回已拒绝的 Promise
let promise2 = Promise.reject(77);

// 只调用拒绝处理函数
promise2.catch(function(value) {
    console.log(value);
});