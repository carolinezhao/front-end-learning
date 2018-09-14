# 事件循环 (event loop)

> 事件循环不是由 ES 定义的，实际上它是 js 运行环境的机制。

事件循环应用于：事件，用户交互，脚本，渲染，网络等。

- task (macrotask): script (整体代码), setTimeout, setInterval, UI 渲染, I/O 等。
- microtask: Promise, process.nextTick (Node.js) 等。

---

一道经典题 --> closure-practice-1.js 最后一题 (以下的文章中也都涉及这道题)

知识点
- 单线程和异步机制
- 区分 macrotask 和 microtask

讲解和图示
- https://segmentfault.com/a/1190000015317434
- https://github.com/creeperyang/blog/issues/21
- http://www.alloyteam.com/2015/10/turning-to-javascript-series-from-settimeout-said-the-event-loop-model/
- https://github.com/aooy/blog/issues/5