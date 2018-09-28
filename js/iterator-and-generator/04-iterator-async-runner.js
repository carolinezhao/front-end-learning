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

// 当 result.value 是一个函数，会传入一个回调函数作为参数来调用它。
// 这个回调函数遵循 Node 中 error-first 的规定。

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