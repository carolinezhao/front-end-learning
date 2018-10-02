# async/await

基本内容
- async 函数返回的是一个 Promise 对象。
- await 只能在 async 函数内部使用。
- 在 async 函数外部仍需使用 then() 链。

await 表达式的运算结果取决于它等的东西。
- 如果等到的是一个 Promise 对象，await 就忙起来了，它会阻塞后面的代码，等着 Promise 对象 resolve，然后得到 resolve 的值，作为 await 表达式的运算结果。(比如：new Promise，Promise.all，async 函数，返回值是 promise 的普通函数等)
- 如果等到的不是一个 Promise 对象，it's converted to a resolved Promise.

async 函数调用不会造成阻塞，它内部所有的阻塞都被封装在一个 Promise 对象中异步执行。

-- Ref.1

async/await

> Every async function returns a promise. 
> Thus, the JavaScript interpreter knows that all operations in async functions will be encapsulated in promises and run asynchronously. 
> Therefore, it can allow them to wait for other promises to finish.
> The await keyword can only be used in async functions, and allows us to synchronously wait on a promise. 

async/await vs. promise

> The async/await constructs are syntactic sugar for working with promises more concisely. 
> Every async/await construct can be rewritten with plain promises. Ultimately, it’s a matter of style and brevity.
> async/await do not replace the need for plain promises.

concurrent vs. parallel

> Concurrency is about composing independent processes (in the general meaning of the term process) to work together, while parallelism is about actually executing multiple processes simultaneously. 
> Concurrency is about the application design and structure, while parallelism is about the actual execution.

-- Ref.2

## 案例

01-await.js (Ref.0)
- async/await 基本用法

case-await-1a/b.js (Ref.1)
- async/await 优化了 Promise 的 then() 链对异步结果的处理。

case-await-2a/b.js (MDN)
- async/await 和 Promise 对异步执行顺序的影响 (sequential/concurrent/parallel)

## Reference

0. https://javascript.info/async-await
1. https://segmentfault.com/a/1190000007535316
2. https://nikgrozev.com/2017/10/01/async-await/
3. https://segmentfault.com/a/1190000016212269
4. https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9
5. https://developers.google.com/web/fundamentals/primers/async-functions
6. https://jimliu.net/2018/09/11/why-we-need-async-await/