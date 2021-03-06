// 4.3 垃圾收集 Garbage Collection
// JS 有自动垃圾收集机制，执行环境负责管理代码执行过程中使用的内存。
// 原理：找出不再继续使用的变量，释放其占用的内存。垃圾收集器周期性地执行这一操作。
// 垃圾收集器需要判断哪些变量无用，打上标记，以备将来收回其占用的内存。
// 浏览器中的实现，通常有两种策略。


// 4.3.1 标记清除 Mark-and-Sweep (普遍使用的策略)
// 当变量进入环境（比如在函数中声明一个变量）将此变量标记为“进入环境”；离开环境时，标记为“离开环境”。
// ？？从逻辑上讲，永远不能释放进入环境的变量所占用的内存，因为只要执行流进入相应的环境，就可能会用到它们。

// 垃圾收集器在运行时给内存中的所有变量都加上标记；
// 给环境中的变量以及被环境中的变量引用的变量去掉标记；
// 在此之后再被加上标记的变量被视作准备删除的变量，因为环境中的变量已经无法访问这些变量了；
// 最后，垃圾收集器完成内存清除工作，销毁带标记的值并回收它们占用的内存。


// 4.3.2 引用计数 Reference Counting (不常见的策略)


// 4.3.3 性能问题 Performance
// 垃圾收集器是周期运行的，确定垃圾收集的时间间隔是非常重要的问题。
// 书中以 IE6 到 IE7 的性能提升为例。


// 4.3.4 管理内存 Managing Memory
// 具备垃圾收集机制的语言，一般不必操心内存管理问题，但 JS 有点不同。
// 分配给 web 浏览器的可用内存数量通常比给桌面应用程序的少——这是出于安全方面的考虑，防止运行 JS 的网页耗尽全部系统内存导致系统崩溃。
// 内存限制问题会影响给变量分配内存，还会影响调用栈以及在一个线程中能够同时执行的语句数量。——因此确保占用最少内存可以获得更好的性能。

// 解除引用 (dereferencing)：一旦数据不再有用，最好通过将其值设置为 null 释放其引用。
// 注意！解除引用并不意味着自动回收该值所占用的内存，其真正作用是让值脱离执行环境，以便垃圾收集器下次运行时将其回收。

// 局部变量会在离开执行环境时自动被解除引用；全局变量和全局对象的属性需要手动解除引用。
function createPerson(name) {
    var localPerson = new Object()
    localPerson.name = name
    return localPerson
}

var globalPerson = createPerson('Caroline')
console.log(globalPerson)
globalPerson = null // 解除引用