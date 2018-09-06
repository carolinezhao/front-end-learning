// https://juejin.im/post/58f1fa6a44d904006cf25d22

// 改进任务1：代码输出 5 -> 0,1,2,3,4 (-> 表示间隔 1秒 , 表示间隔忽略不计)

// 用 IIFE
for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j, new Date);
        }, 1000);
    })(i);
}
console.log(i, new Date);

// 利用参数是按值传递的
let print = function (j) {
    setTimeout(function () {
        console.log(j, new Date);
    }, 1000);
}
for (var i = 0; i < 5; i++) {
    print(i)
}
console.log(i, new Date);


// 改进任务2：代码输出 0 -> 1 -> 2 -> 3 -> 4 -> 5 (-> 表示间隔 1秒)

// 用 Promise 实现
let tasks = [];
let output = (i) => new Promise((resolve) => {
    setTimeout(() => {
        console.log(new Date, i);
        resolve();
    }, 1000 * i);
});

// 生成全部的异步操作
for (var i = 0; i < 5; i++) {
    tasks.push(output(i));
}

// 异步操作完成之后，输出最后的 i
Promise.all(tasks).then(() => {
    setTimeout(() => {
        console.log(new Date, i);
    }, 1000);
});


// 用 async/await 实现
let sleep = (seconds) => new Promise((resolve) => {
    setTimeout(resolve, seconds);
});

(async () => {
    for (var i = 0; i < 5; i++) {
        if (i > 0) {
            await sleep(1000);
        }
        console.log(new Date, i);
    }

    await sleep(1000);
    console.log(new Date, i);
})();