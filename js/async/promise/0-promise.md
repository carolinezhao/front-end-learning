# Promise

## Reference

- 深入理解 ES6 第11章

## Promise Basics

Promise 相当于异步操作结果的占位符。

### The Promise Life Cycle

- unsettled: "pending" (返回 Promise 对象时)
- settled: 
    - "fulfilled" (Promise 异步操作完成)
    - "rejected" (出错，异步操作未完成)

状态改变时，通过 then() 方法采取特定行动。

then() 两个参数都是可选的
- 参数1: 完成函数 (fulfillment function)，即状态为 fulfilled 时要调用的函数。
- 参数2: 拒绝函数 (rejection function)，即状态为 rejected 时要调用的函数。

如果一个对象实现了 then() 方法，称为 thenable 对象。
所有的 Promise 都是 thenable 对象，反之不成立。

catch() 方法：相当于只传入拒绝函数的 then() 方法。

--> _01-promise-then.js_

### Creating Unsettled Promises

用 Promise 构造函数可以创建新的 Promise。
- 构造函数接受1个参数：包含初始化 Promise 代码的执行器 (executor) 函数。
- 执行器接受2个参数：resolve() 和 reject()，分别用于成功时和失败时调用。

创建未处理 Promise 的最好方法是使用 Promise 构造函数，因为 Promise 执行器具有动态性。？？

用 Promise 包裹原生 Node.js 的 fs.readFile() 异步调用。 

--> _02-promise-readFile.js_

任务编排 (job scheduling)：向任务队列中添加一个新任务，并明确指定将任务延后执行。

和 setTimeout() 类似。 --> _03-promise-asyn.js_

### Creating Settled Promises

如果想用 Promise 表示一个已知值，编排一个简单给 resolve() 传值的任务并无实际意义。？？

可以通过以下两种方法根据特定的值来创建已解决 Promise。？？

Promise.resolve()

Promise.reject()

--> _04-promise-settled.js_

非 Promise 的 Thenable 对象

### Executor Errors

## Global Promise Rejection Handling

## Chaining Promises

- 按顺序调用 then()
- 捕获错误
- Promise 链的返回值：给下游 Promise 传递数据
- 在 Promise 链中返回 Promise

--> _promise-chaining.js_

## Responding to Multiple Promises

## Inheriting from Promises

## Asynchronous Task Running