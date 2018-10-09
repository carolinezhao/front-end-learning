/*
reference
高程 5.5.5 函数属性和方法
https://github.com/lin-xin/blog/issues/7

call, apply 和 this 的用法另见 this-7-1.js, this-7-2.js
高级技巧见 高程 22.1.4 函数绑定
*/

// ES 规范给所有函数都定义了 call 与 apply 两个方法，它们的作用一样，只是传参的形式不同。
// 它们用途都是在特定的作用域中调用函数，实际上等于设置函数体内 this 对象的值。

// apply()
// 参数1：作为函数上下文的对象 (运行函数的作用域)，即 this 的绑定对象；
// 参数2：作为函数参数所组成的数组 (可以是 Array 的实例或 arguments 对象)。
// call()
// 参数1：同 apply；
// 参数2：单个传入的参数列表。

// 关于参数1
// 非严格模式下：
// 当为 undefined, null 或空时，this 会自动指向全局 window 对象。
// 当为原始值 (字符串，布尔，数字) 时，这个原始值会被转换成它的对象形式，即 new String(), new Boolean(), new Number。


// 用法1 调用函数 + 传参
function doSum(num1, num2) {
    return num1 + num2
}

console.log(doSum.call(null, 10, 20));

// apply() 传入 arguments 对象
function callSum1() {
    return doSum.apply(this, arguments)
}
// 执行 doSum() 函数时传入了 this 作为 this 值 (因为是在全局作用域中调用的，所以传入的就是 window 对象)。

// apply() 传入数组
function callSum2(num1, num2) {
    return doSum.apply(this, [num1, num2])
}

// call() 逐个传入参数
function callSum3(num1, num2) {
    return doSum.call(this, num1, num2)
}

console.log(callSum1(10, 20))
console.log(callSum2(10, 20))
console.log(callSum3(10, 20))
console.log('')



// 用法2 扩充函数赖以运行的作用域，即改变 this 的指向。
// 这样做的好处是对象不需要与方法有任何耦合关系。
let obj = {
    name: 'caroline'
}

function sayName(lastName, age) {
    console.log(`${this.name} ${lastName} (${age} years old)`);
}

sayName.apply(obj, ['zhao', 26])
sayName.call(obj, 'zhao', 26)

// Chrome 中运行
// window.city = "BJ";
var object = {
    city: "SH"
};

function sayLocation() {
    console.log(this.city);
}

// 在全局作用域中调用，对 this.city 的求值会转换成对 window.city 的求值。
sayLocation(); // BJ

// 两种显式地在全局作用域中调用函数的方式
sayLocation.call(this); // BJ
// sayLocation.call(window); // BJ

// 函数体内的 this 对象指向了 obj
sayLocation.call(object); // SH



// 用法3 借用其他对象的方法
// 见 object/inheritance 相关
function Person(name) {
    this.name = name
}

function Employee(name, job) {
    Person.call(this, name)
    this.job = job
    this.sayHi = function () {
        console.log("I'm " + this.name + '. My job is ' + this.job + '.');
    }
}

let employee = new Employee('Caroline', 'FE');
employee.sayHi();
console.log('');



// call 和 bind 的区别
// 1.bind 的返回值是函数
// bind 方法不会立即执行，而是返回一个改变了上下文 this 后的函数。
// 而原函数中的 this 并没有被改变，依旧指向全局对象 window。
let func = sayName.bind(obj, 'zhao', 26);
func();

let newSayLocation = sayLocation.bind(object);
newSayLocation(); // SH

// 2.参数的使用
function print(a, b, c) {
    console.log(a, b, c);
}

// call() 的实参从第二个传入的参数开始；
print.call(null, 1, 2, 3);
// bind() 的实参包括传入的参数 + 返回的函数调用时传入的参数。
let newPrint = print.bind(null, 10)
newPrint(1, 2, 3)