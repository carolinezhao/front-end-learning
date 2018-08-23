// timer
// setTimeout() 调用一次
// setInterval() 多次调用

// setTimeout(funciton/string, delay, param1, ...)
// 第一个参数为函数 (字符串不推荐使用)。
// 第二个参数为延迟的毫秒数，如果省略，默认值为 0。实际延迟的时间可能会比 delay 长。
// 附加参数，作为参数传递给 function。
// 返回值 timeoutID 是一个正整数，作为定时器的编号。这个值传给 clearTimeout() 可以取消定时。

// 运行机制：将回调函数移出本轮事件循环，添加到 tasks queue 中，等待下一轮事件循环 (macrotask)。
// 如果后面的同步任务运行时间很长，则定时器实际延迟的时间就会比设定的 delay 长。
// http://www.alloyteam.com/2015/10/turning-to-javascript-series-from-settimeout-said-the-event-loop-model/
var start = new Date;
setTimeout(function () {
    var end = new Date;
    console.log('Time elapsed:', end - start, 'ms');
}, 500);
while (new Date - start < 1000) {};
// setTimeout() 中匿名函数的调用在 while() 循环阻塞结束后才执行。

// setTimeout 与 promise 的对比
// https://github.com/creeperyang/blog/issues/21

// setTimeout(f, 0)
// 会在下一轮事件循环一开始就执行。
// 应用：调整事件的发生顺序。
// https://wangdoc.com/javascript/async/timer.html