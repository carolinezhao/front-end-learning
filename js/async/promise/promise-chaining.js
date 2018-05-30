let p1 = new Promise(function (resolve, reject) {
    resolve(55);
});

// 只有当第一个 Promise 被解决之后才会调用第二个
p1.then(function (value) {
    console.log('first-1: ' + value);
}).then(function () {
    console.log('Finished.');
})

// 捕获错误
p1.then(function (value) {
    throw new Error('Boom!');
}).catch(function (error) {
    console.log(error.message);
});

// 返回值：给下游 Promise 传递数据
p1.then(function (value) {
    console.log('third-1: ' + value);
    return value * 2;
}).then(function (value) {
    console.log('third-2: ' + value);
})

// 拒绝处理程序没有执行，不影响串联的 Promise
p1.catch(function (value) {
    console.log('forth-1: ' + value);
    return value + 11;
}).then(function (value) {
    console.log('forth-2: ' + value);
})

// 注意以上结果的打印顺序

let p2 = new Promise(function (resolve, reject) {
    resolve(33);
});

// 在 Promise 链中返回 Promise
// 注意：p2 被添加到第二个完成处理程序，这个 Promise 既不是 p1 也不是 p2。
// 如果 p2 被拒绝了，则第二个完成处理程序不会被调用。
p1.then(function (value) {
    console.log('fifth-1: ' + value);
    return p2;
}).then(function (value) {
    console.log('fifth-2: ' + value);
});

// 在 p1 的完成处理程序中创建新的 Promise，直到 p3 被完成才会执行第二个完成处理程序。
p1.then(function (value) {
    console.log('sixth-1: ' + value);
    // 创建一个新的 Promise
    let p3 = new Promise(function (resolve, reject) {
        resolve(18);
    });
    return p3;
}).then(function (value) {
    console.log('sixth-2: ' + value);
});