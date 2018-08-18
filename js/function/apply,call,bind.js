// https://github.com/lin-xin/blog/issues/7

// ES 规范给所有函数都定义了 call 与 apply 两个方法，它们的作用一样，只是传参的形式不同。

let obj = {
    name: 'caroline'
}

function sayName(lastName, age) {
    console.log(`${this.name} ${lastName} (${age} years old)`);
}

// apply()
// 两个参数：作为函数上下文的对象；作为函数参数所组成的数组。
sayName.apply(obj, ['zhao', 26])

// call()
// 两个参数：作为函数上下文的对象；单个传入的参数列表。
sayName.call(obj, 'zhao', 26)


// apply 和 call 的用法

// 1.改变 this 的指向
// 上面的例子中，函数的 this 指向了 obj 这个对象。

// 2.借用别的对象的方法
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

// 3.调用函数
// apply() 和 call() 都会使函数立即执行。


// call 和 bind 的区别

// 1.bind 的返回值是函数
// bind 方法不会立即执行，而是返回一个改变了上下文 this 后的函数。
// 而原函数 func 中的 this 并没有被改变，依旧指向全局对象 window。
let func = sayName.bind(obj, 'zhao', 26);
func();

// 2.参数的使用
function print(a, b, c) {
    console.log(a, b, c);
}

// call() 的实参从第二个传入的参数开始；
print.call(null, 1, 2, 3);
// bind() 的实参包括传入的参数 + 返回的函数调用时传入的参数。
let newPrint = print.bind(null, 10)
newPrint(1, 2, 3)