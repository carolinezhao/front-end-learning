// 异步任务执行器

function run(taskDef) {
    let task = taskDef();
    let result = task.next();

    (function step() {
        console.log(result);
        if (!result.done) {
            if (typeof result.value === 'function') {
                result.value(function (err, data) {
                    if (err) {
                        result = task.throw(err);
                        return;
                    }
                    result = task.next(data);
                    step();
                });
            } else {
                result = task.next(result.value);
                step();
            }
        }
    })();
}

// 与 03-iterator-runner.js 中的简单任务执行器不同，如果要执行一个异步任务，任务执行器需要知道如何使用回调函数。

// 由于 yield 表达式会将值返回给任务执行器，所有的函数调用都会返回一个值，因此在某种程度上这也是一个异步操作。
// 任务执行器会一直等待直到操作完成。

// 当 result.value 是一个函数，会传入一个回调函数作为参数来调用它。
// 这个回调函数遵循 Node 中 error-first 的规定。
// 因此，要执行的异步任务需要按照执行器中规定的格式：返回值是一个函数，且 callback 作为参数。

// 进一步改进执行器，见 async/promise/07-promise-iterator-runner.js

function fetchData(text) {
    return function (callback) {
        setTimeout(() => {
            callback(null, text)
        }, 1000);
    };
}

let fs = require('fs');

function readFile(filename) {
    return function (callback) {
        fs.readFile(filename, {
            encoding: 'utf-8'
        }, callback);
    };
}

function* task() {
    let content = yield readFile('file.txt');
    console.log(content);
    content = yield fetchData(content);
    console.log(content);
}

run(task);