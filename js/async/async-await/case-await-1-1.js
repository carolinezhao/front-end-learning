// https://segmentfault.com/a/1190000007535316

// 对比 async/await 和 Promise (1)

function takeLongTime(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n + 200);
        }, n)
    })
}

function step1(n) {
    console.log('step1: ' + n);
    return takeLongTime(n);
}

// 使用 step1 的结果作为参数
function step2(n) {
    console.log('step2: ' + n);
    return takeLongTime(n);
}

// 使用 step2 的结果作为参数
function step3(n) {
    console.log('step3: ' + n);
    return takeLongTime(n);
}

(function task1(time1) {
    console.time('task1');
    step1(time1)
        .then(time2 => step2(time2))
        .then(time3 => step3(time3))
        .then(result => {
            console.log('result1: ' + result);
            console.timeEnd('task1');
        })
})(300);

(async function task2(time1) {
    console.time('task2');
    const time2 = await step1(time1);
    const time3 = await step2(time2);
    const result = await step3(time3);
    console.log('result2: ' + result);
    console.timeEnd('task2');
})(300);