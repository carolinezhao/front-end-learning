// 第5章 作用域闭包

// 三个典型的闭包案例
// ======== example 1 ========
function foo() {
    var a = 2

    function bar() {
        console.log(a)
    }
    return bar
}
var baz = foo()
baz()

// ======== example 2 ========
function foo1() {
    var a = 2

    function baz() {
        console.log(a)
    }
    bar1(baz)
}

function bar1(fn) {
    fn()
}

foo1()

// ======== example 3 ========
var fn

function foo2() {
    var a = 2

    function baz() {
        console.log(a)
    }
    fn = baz
}

function bar2() {
    fn()
}

foo2()
bar2()

// 
function wait(msg) {
    setTimeout(function timer() {
        console.log(msg)
    }, 1000)
}
wait('Hello, closure!')
console.log('')


// 5.4 循环和闭包
// 延迟函数的回调会在循环结束时才执行，即使时间设为0，依然如此。
// 因此输出显示的是循环结束时 i 的最终值，每秒一次输出五个6。
// （以下根据作用域的工作原理 --> 还没看）
// 尽管循环中的五个函数是在各个迭代中分别定义的，但它们都被封闭在一个共享的全局作用域中(?)，因此实际上只有一个 i。
for (var i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i)
    }, i * 1000)
}
// 改进需求：循环的过程中每个迭代都需要一个闭包作用域。
// IIFE 会通过声明并立即执行一个函数来创建作用域。

// 如果作用域是空的，那么仅仅将它们封闭是不够的。
for (var i = 1; i <= 5; i++) {
    (function () {
        setTimeout(function timer() {
            console.log(i)
        }, i * 1000)
    })();
}

// IIFE 需要实质内容--有自己的变量，用来在每个迭代中储存 i 的值。
for (var i = 1; i <= 5; i++) {
    (function () {
        var j = i
        setTimeout(function timer() {
            console.log(j)
        }, j * 1000)
    })();
}

// 改进
for (var i = 1; i <= 5; i++) {
    (function (j) {
        setTimeout(function timer() {
            console.log(j)
        }, j * 1000)
    })(i);
}

// 在迭代内使用 IIFE 会为每个迭代都生成一个新的作用域，
// 使得延迟函数的回调可以将新的作用域封闭在每个迭代内部，
// 每个迭代中都会含有一个具有正确值的变量供访问。