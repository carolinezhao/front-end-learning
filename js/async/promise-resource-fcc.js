var httpGet = (url) => {
    return new Promise((resolve, reject) => {
        request.get(url, (err, res) => {
            if (!err) {
                resolve(res);
            } else {
                reject(err);
            }
        });
    });
}

httpGet('http://abc.com').then();


// https://mp.weixin.qq.com/s/FWmlMe-kgIuU0ycknSDtXQ

// Promise 和 callback 的差别
// Promise：先执行异步调用，延迟传递处理的方式

// Promise 的状态
// Promise 初始化后, 内部状态为 pending，然后开始执行异步操作；
// 当异步操作完成，内部状态转换为 resolved 或 rejected (失败时)。
// 一旦状态改变，就会被固化，不会再改变。
// 一个状态已经确定的 Promise, 无论你调动多少次 then，它都会返回正确且唯一的结果，因为 Promise 的结果，是完全依赖它自己的内部状态。

// then 的作用
// 除了注册回调函数，还会检查 Promise 状态，只要不是 pending 状态，就回调用相应状态的回调。

// 回调地狱改写为串联 Promise

// http://www.lanhao.name/article/293