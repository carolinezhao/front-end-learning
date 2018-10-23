// https://juejin.im/post/5b50ac2ae51d45198905343f

function A() {
    B = function (b1) {
        console.log(10);
    }
    return this
}

A.B = function (b2) {
    console.log(20);
}

A.prototype.B = function (b3) {
    console.log(30);
}

var B = function () {
    console.log(40);
}

function B() {
    console.log(50);
}

// 参数 b1, b2, b3 用于区分原型链中的同名函数
console.log(A.prototype);
console.log(B);
A.B()
B()
A().B()
console.log(B);
B()
new A.B()
console.log((new A.B()).__proto__);
new A().B()
console.log(new A());
console.log(new A().B());

/*
A.B() 查找 A 的方法
B() 存在同名函数表达式和函数声明，执行函数表达式
A().B() 执行 A，变量 B 重新赋值；返回值是 this (浏览器中是 window)，执行全局变量中的 B
B() 执行最新赋值的 B
new A.B() 相当于执行了 A.B()，生成对象的原型指向 B(b2).prototype
new A().B() 调用栈顺序：进 A，出，进 A.prototype.B，出。
new 过程中创建的对象 obj.__proto__ = A.prototype
*/