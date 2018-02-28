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
for (var i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i)
    }, i * 1000)
}

// 
for (var i = 1; i <= 5; i++) {
    (function () {
        setTimeout(function timer() {
            console.log(i)
        }, i * 1000)
    })();
}

// 
for (var i = 1; i <= 5; i++) {
    (function () {
        var j=i
        setTimeout(function timer() {
            console.log(j)
        }, j * 1000)
    })();
}

// 
for (var i = 1; i <= 5; i++) {
    (function (j) {
        setTimeout(function timer() {
            console.log(j)
        }, j * 1000)
    })(i);
}