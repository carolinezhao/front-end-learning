// 没有定义 readFile 函数，完整可运行代码见 promise-readFile.js

let promise = readFile('example.txt');
// readFile() 不会立即开始读取文件，函数会先返回一个表示异步读取操作的 Promise 对象。
// 未来对这个对象的操作完全取决于 Promise 的生命周期。

promise.then(function (contents) {
    // 完成
    console.log(contents);
}, function (err) {
    // 拒绝
    console.error(err.message);
});

promise.then(null, function (err) {
    // 拒绝
    console.error(err.message);
});

// 作用同上
promise.catch(function (err) {
    // 拒绝
    console.error(err.message);
});

// 如果一个 Promise 处于已处理状态，在这之后添加到任务队列中的处理程序仍将执行。？？
// 所以无论何时都可以添加新的完成/拒绝处理程序。
promise.then(function (contents) {
    console.log(contents);
    // 新的处理程序会被添加到任务队列，在前面的任务完成后才被调用。
    promise.then(function (contents) {
        console.log(contents);
    });
});