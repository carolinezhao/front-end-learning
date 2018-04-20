// 想在某个对象上强制调用函数，使用函数的 call() 和 apply() 方法。
// 第一个参数是一个对象，它们会把这个对象绑定到 this，然后在调用函数时指定这个 this。
// 这是直接指定了 this 的绑定对象，为显式绑定。
// 从 this 绑定的角度看，call() 和 apply() 是一样的，它们的区别体现在别处。

function foo() {
    console.log(this.a)
}

var obj = {
    a: 2
}

foo(); // undefined (node, chrome)
foo.call(obj); // 2 (node, chrome)
// 把 foo 的 this 绑定到 obj

// 如果传入了一个原始值 (字符串，布尔，数字) 当作 this 的绑定对象，这个原始值会被转换成它的对象形式，即 new String(), new Boolean(), new Number。这叫做“装箱”。

// 但是显示绑定仍然无法解决丢失绑定的问题。但是显示绑定的变种可以解决。