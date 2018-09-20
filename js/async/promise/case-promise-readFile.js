// 用 Promise 包裹原生 Node.js 的 fs.readFile() 异步调用

let fs = require('fs');

function readFile(filename) {
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

promise.then(function (contents) {
    // 完成：传递文件内容
    console.log(contents);
}, function (err) {
    // 拒绝：传递错误对象
    console.error(err.message);
});