// 简单任务执行器
function run(taskDef) {
    // 调用生成器，返回一个迭代器
    let task = taskDef();
    // 开始执行任务
    let result = task.next();

    function step() {
        console.log(result);
        // 如果任务未完成，则继续执行
        if (!result.done) {
            result = task.next();
            step();
        }
    }
    step();
}

// 生成器
function* task() {
    console.log(1);
    yield;
    console.log(2);
    yield;
    console.log(3);
}

run(task);
console.log('');


// 向任务执行器传递数据
(function run(taskDef) {
    let task = taskDef();
    let result = task.next();

    function step() {
        console.log(result);
        if (!result.done) {
            // 传入 next() 的数据作为 yield 的生成值供下次调用
            result = task.next(result.value);
            step();
        }
    }
    step();
})(function* () {
    let value = yield 1;
    console.log(value);
    value = yield value + 3;
    console.log(value);
});