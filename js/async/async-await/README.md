# async/await

基本内容
- async 函数返回的是一个 Promise 对象。
- await 只能在 async 函数内部使用。
- 在 async 函数外部仍需使用 then() 链。

await 表达式的运算结果取决于它等的东西。
- 如果等到的是一个 Promise 对象，await 就忙起来了，它会阻塞后面的代码，等着 Promise 对象 resolve，然后得到 resolve 的值，作为 await 表达式的运算结果。(比如：new Promise，Promise.all，async 函数，返回值是 promise 的普通函数等)
- 如果等到的不是一个 Promise 对象，那运算结果就是它等到的东西。

async 函数调用不会造成阻塞，它内部所有的阻塞都被封装在一个 Promise 对象中异步执行。

async/await 优化了 Promise 的 then() 链对异步结果的处理。
- 案例 --> case-await-1(-1/-2).js

https://segmentfault.com/a/1190000007535316

## reference

- https://nikgrozev.com/2017/10/01/async-await/
- https://segmentfault.com/a/1190000007535316
- https://segmentfault.com/a/1190000016212269
- https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9
- https://developers.google.com/web/fundamentals/primers/async-functions
- https://jimliu.net/2018/09/11/why-we-need-async-await/