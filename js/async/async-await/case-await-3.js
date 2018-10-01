// https://nikgrozev.com/2017/10/01/async-await/

// Task：
// 1) Makes an HTTP call, waits for it to complete, and prints the result;
// 2) Then makes other two parallel HTTP calls;
// 3) When both of them complete, prints their result.

// 以下 rp('url') 是一个基于 Promise 的网络请求方法。

// Promise
const p1 = rp('url');

p1.then(result1 => {
    console.log(result1);
    const p2 = rp('url');
    const p3 = rp('url');
    return Promise.all([p2, p3]);
}).then(arr => {
    console.log(arr[0]);
    console.log(arr[1]);
})

// async/await
async function solution() {
    console.log(await rp('url'));
    const p2 = rp('url');
    const p3 = rp('url');
    // Notice that we don’t use await until here, when we block the execution until both promises have resolved.
    const response2 = await p2;
    const response3 = await p3;
    console.log(response2);
    console.log(response3);
}