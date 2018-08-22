// https://juejin.im/post/58f1fa6a44d904006cf25d22

// 改进任务：代码输出 0 -> 1 -> 2 -> 3 -> 4 -> 5 (-> 表示间隔 1秒)

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