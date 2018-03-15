// 第5章 作用域闭包

// 5.2
// 闭包是基于词法作用域书写代码时所产生的自然结果，它的创建和使用随处可见。
// 定义：当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行。

// 三个典型的闭包案例
// ======== example 1 ========
function foo() {
    var a = 2

    function bar() {
        console.log(a)
    }
    return bar // bar() 函数本身当作一个值类型进行传递
}
var baz = foo()
baz() // 2
// 最后两句相当于通过不同的标识符引用调用了内部函数 bar()，使其在自己定义的词法作用域以外的地方执行。

// 一般在函数执行后，其内部作用域会被销毁，因为引擎的垃圾回收机制会释放不再使用的内存空间。但闭包阻止了回收。--> 垃圾收集相关内容
// 但由于 bar() 声明所处的位置，它拥有涵盖 foo() 内部作用域的闭包，使得该作用域一直存活，以供 bar() 在之后的任何时间进行引用。
// bar() 对该作用域持有的引用就是闭包。

// 无论使用何种方式对函数类型的值进行传递，当函数在别处被调用时都可以观察到闭包。
// ======== example 2 ========
function foo1() {
    var a = 2

    function baz() {
        console.log(a)
    }
    bar1(baz)
}

function bar1(fn) {
    fn() // 闭包。调用 foo1() 中的内部函数，涵盖 foo1() 内部作用域的闭包，可以访问 a。
}

foo1() // 2

// 传递函数也可以是间接的。
// ======== example 3 ========
var fn

function foo2() {
    var a = 2

    function baz() {
        console.log(a)
    }
    fn = baz // 将 baz 分配给全局变量
}

function bar2() {
    fn() // 闭包
}

foo2()
bar2() // 2

// 总结：无论通过何种手段将内部函数传递到所在的词法作用域以外，它都会持有对原始定义作用域的引用，无论在何处执行这个函数都会使用闭包。


// 5.3 实际应用中的闭包 (本节不太理解)
// wait() 执行 1s 后，内部函数 timer 依然保有 wait() 作用域的闭包。
// ？？？深入到引擎内部原理，内置的工具函数 setTimeout() 持有对一个参数的引用，引擎会调用这个函数 (此例中是 timer)，词法作用域在这个过程中保持完整。这就是闭包。
function wait(msg) {
    setTimeout(function timer() {
        console.log(msg)
    }, 1000)
}
wait('Hello, closure!')
console.log('')

// 使用 jQuery
// function setupBot(name, selector) {
//     $(selector).click(function activator() {
//         console.log("Activating: " + name)
//     })
// }
// setupBot('Closure Bot 1','#bot_1')
// setupBot('Closure Bot 2','#bot_2')

// ？？？总结：无论何时何地，如果将函数(访问它们各自的词法作用域)当作第一级的值类型并到处传递，就会看到闭包在这些函数中的应用。
// ？？？在定时器，事件监听器，Ajax请求，跨窗口通信，Web Workders或者任何其他的异步（或同步）任务中，只要使用了回调函数，实际上就是在使用闭包。

// IIFE 与闭包
// 通常认为 IIFE 是典型的闭包例子，但是根据对闭包的定义，IIFE 并不是观察闭包的恰当例子（见下面的例子）。
// ？？？尽管如此，但它的确创建了闭包，并且也是最常用来创建可以被封闭起来的闭包的工具。

// 下面的 IIFE 并不是在它本身的词法作用域以外执行的。它在定义时所在的作用域执行。
// 外部作用域 (也就是全局作用域) 也持有 c，因此 c 是通过普通的词法作用域查找而非闭包被发现的。
var c = 6;
(function IIFE() {
    console.log(c)
})();


// 5.4 循环和闭包
// 延迟函数的回调会在循环结束时才执行，即使时间设为0，依然如此。
// 因此输出显示的是循环结束时 i 的最终值，每秒一次输出五个6。
// （以下根据作用域的工作原理 --> 提升）
// 尽管循环中的五个函数是在各个迭代中分别定义的，但它们都被封闭在一个共享的全局作用域中，因此实际上只有一个 i。
for (var i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log('1st ' + i)
    }, i * 1000)
}
// 改进需求：循环的过程中每个迭代都需要一个闭包作用域。

// IIFE 会通过声明并立即执行一个函数来创建作用域。
// 仍不起作用，因为作用域是空的，仅仅将它们封闭是不够的。
for (var i = 1; i <= 5; i++) {
    (function () {
        setTimeout(function timer() {
            console.log('2nd ' +i)
        }, i * 1000)
    })();
}

// IIFE 需要实质内容--有自己的变量，用来在每个迭代中储存 i 的值。
for (var i = 1; i <= 5; i++) {
    (function () {
        var j = i
        setTimeout(function timer() {
            console.log('3rd ' +j)
        }, j * 1000)
    })();
}

// 改进，传入 i
for (var i = 1; i <= 5; i++) {
    (function (j) {
        setTimeout(function timer() {
            console.log('4th ' +j)
        }, j * 1000)
    })(i);
}

// 在迭代内使用 IIFE 会为每个迭代都生成一个新的作用域，
// 使得延迟函数的回调可以将新的作用域封闭在每个迭代内部，
// 每个迭代中都会含有一个具有正确值的变量供访问。

// 每次迭代都需要一个块作用域 --> let
// ？？？本质上这是将一个块转换成一个可以被关闭的作用域。
for (var i = 1; i <= 5; i++) {
    let j = i // 闭包的块作用域
    setTimeout(function timer() {
        console.log('5th ' +j)
    }, j * 1000)
}

// for 循环头部的 let 声明，每次迭代都会使用上一个迭代结束时的值来初始化变量。
// --> 参考 3.4.3 let 循环
for (let i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log('6th ' +i)
    }, i * 1000)
}
// 块作用域和闭包联手。


// 5.5 模块