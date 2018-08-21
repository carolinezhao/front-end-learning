// reference: MDN

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

// 调用 async 函数时，会返回一个 Promise 对象。当 async 函数返回一个值，Promise 的 resolve 方法会传递这个值；当 async 函数抛出异常时，由 Promise 的 reject 方法传递。
// await 表达式会使 async 函数暂停执行，等待表达式中的 Promise 解析完成后继续执行 async 函数并返回解决结果。

async function add1(num) {
    let a = await resolveAfter2Seconds(20);
    let b = await resolveAfter2Seconds(30);
    return a + b + num;
}

// 函数 add1 中，第一个计时器结束后，第二个计时器才被创建。
// 程序为第一个 await 停留了 2 秒，为第二个 await 又停留了 2 秒。

add1(10).then(v => {
    console.log(v);
});

async function add2(num) {
    let a = resolveAfter2Seconds(20);
    let b = resolveAfter2Seconds(30);
    return await a + await b + num;
}

// 函数 add2 中，两个计时器同时被创建，然后一起被 await。因此运行出结果需要 2 秒而非 4 秒。
// 但是这两个 await 调用仍然是串行而非并行的。

add2(10).then(v => {
    console.log(v);
})