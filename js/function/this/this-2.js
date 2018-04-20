function foo(num) {
    console.log('foo: ' + num);
    this.count++;
    data.count++; // 记录被调用次数
}

foo.count = 0;

// 方案1
var data = {
    count: 0
}

// 方案2
// 如果要从函数对象内部引用它自身，一般需要通过一个指向函数对象的词法标识符(变量)来引用它。
// 具名函数可以在内部通过函数名引用自身。
function foo1(num) {
    console.log('foo1: ' + num);
    foo1.count++; // 记录被调用次数
}

foo1.count = 0;

// 方案3 
// 使用 this，和原始方案的区别在于调用时的方法。
function foo2(num) {
    console.log('foo2: ' + num);
    this.count++; // 记录被调用次数
}

foo2.count = 0;

// 在循环中同时调用4种方案
for (var i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i);
        foo1(i);
        // 调用时使用 call() 确保 this 指向函数对象 foo1 本身。
        foo2.call(foo2, i);
    }
}

// 结果
console.log(foo.count) // 0
// 说明 foo 中的 this 并不是指向函数自身！！
// 而是创建了一个全局变量 count，值为 NaN。
// 程序执行全过程 (除了进入 foo2 时) 都能访问到 NaN 这个值。

// 方案1
console.log(data.count) // 4
// 程序执行全过程 data.count 都能被访问到。

// 方案2
console.log(foo1.count) // 4

// 方案1和2都避开了 this，依赖于词法作用域。

// 方案3
console.log(foo2.count) // 4
// 只有在 call stack 进入 foo2 时 this.count 才有值。