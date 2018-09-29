// 前续内容见 iterator-and-generator/04-iterator-async-runner.js
// 后续内容见 async-await/ 基本思想是用 async 标记的函数代替生成器，用 await 代替 yield 调用函数。

// 基于 Promise 的异步任务执行器
// 使每个异步操作都返回 Promise，以 Promise 作为通用接口，简化任务执行器。

function run(taskDef) {
    let task = taskDef();
    let result = task.next();

    (function step() {
        console.log(result);
        if (!result.done) {
            // Promise.resolve() 会将 Promise 直接返回，将非 Promise 包裹为 Promise
            let p = Promise.resolve(result.value);
            p.then(value => {
                result = task.next(value);
                step();
            }).catch(err => {
                result = task.throw(err);
                step();
            });
        }
    })();
}

function fetchData(text) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 1000);
    });
}

let fs = require('fs');

function readFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, {
            encoding: 'utf-8'
        }, (err, contents) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(contents);
        });
    });
}

function* task() {
    let content = yield readFile('file.txt');
    console.log(content);
    content = yield fetchData(content);
    console.log(content);
}

run(task);