// https://segmentfault.com/a/1190000007535316

// 对比 async/await 和 Promise (2)

function takeLongTime(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(i + 200);
        }, i)
    })
}

function step1(n) {
    console.log('step1:', n);
    return takeLongTime(n);
}

// step1 的结果，step1 的参数
function step2(m, n) {
    console.log('step2:', m + n);
    return takeLongTime(m + n);
}

// step2 的结果，step1 的结果，step1 的参数
function step3(k, m, n) {
    console.log('step3:', k + m + n);
    return takeLongTime(k + m + n);
}

(function task1(time1) {
    console.time('task1');
    step1(time1)
        .then(time2 => {
            return step2(time1, time2)
                .then(time3 => [time1, time2, time3])
        })
        .then(times => { // 无法直接拿到上一步的参数 time2，因此需要额外的步骤传递三个值。
            const [time1, time2, time3] = times;
            return step3(time1, time2, time3);
        })
        .then(result => {
            console.log('result1: ' + result);
            console.timeEnd('task1');
        })
})(300);

(async function task2(time1) {
    console.time('task2');
    const time2 = await step1(time1);
    const time3 = await step2(time1, time2);
    const result = await step3(time1, time2, time3);
    console.log('result2: ' + result);
    console.timeEnd('task2');
})(300);