// 用 Promise 包裹原生 Node.js 的 fs.readFile() 异步调用

let fs = require('fs');

function readFile(filename) {
    // Promise 构造函数，参数是执行器函数
    return new Promise(function (resolve, reject) {
        // 触发异步操作
        fs.readFile(filename, {
            encoding: 'utf-8'
        }, function (err, contents) {
            // 检查是否有错误
            if (err) {
                reject(err);
                return;
            }
            // 成功读取文件
            resolve(contents);
        });
    });
}

let promise = readFile('file.txt');

// readFile() 被调用时执行器会立即执行，在执行器中，无论是调用 resolve 还是 reject，都会向任务队列中添加一个任务来解决这个 Promise。

promise.then(function (contents) {
    // 完成
    console.log(contents);
}, function (err) {
    // 拒绝
    console.error(err.message);
});