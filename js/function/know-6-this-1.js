function foo(num) {
    console.log('foo: ' + num);
    this.count++;
    data.count++;
}

foo.count = 0;
var data = {
    count: 0
}

function foo1(num) {
    console.log('foo1: ' + num);
    this.count++;
}

foo1.count = 0;

for (var i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i);
        // 调用时使用 call() 确保 this 指向函数对象 foo1 本身。
        foo1.call(foo1, i);
    }
}

console.log(data.count) // 4
console.log(foo.count) // 0
// 说明 foo 中的 this 并不是指向函数自身。

console.log(foo1.count) // 4

/*
this 是在运行时进行绑定的，并不是在编写时绑定。
它的上下文取决于函数调用时的各种条件。
this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。

当一个函数被调用时，会创建一个活动记录 (有时称为执行上下文)。
这个记录会包含函数在哪里被调用 (调用栈)，函数的调用方法，传入的参数等信息。
this 就是记录的其中一个属性，会在函数执行的过程中用到。
*/
