# Promise

## reference

- 深入理解 ES6 第11章
- 你不知道的 js 中卷 第二部分 第4章

## 生命周期

- pending
- fulfilled
- rejected

状态改变时，通过 then() 方法采取特定行动。

then() 两个参数都是可选的
- 参数1: 完成函数 (fulfillment function)，即状态为 fulfilled 时要调用的函数。
- 参数2: 拒绝函数 (rejection function)，即状态为 rejected 时要调用的函数。

如果一个对象实现了 then() 方法，称为 thenable 对象。
所有的 Promise 都是 thenable 对象，反之不成立。

catch() 方法：相当于只传入拒绝函数的 then() 方法。

--> _promise-then.js_

## 创建未完成的 Promise

用 Promise 构造函数可以创建新的 Promise。
- 构造函数接受1个参数：包含初始化 Promise 代码的执行器 (executor) 函数。
- 执行器接受2个参数：resolve() 和 reject()，分别用于成功时和失败时调用。