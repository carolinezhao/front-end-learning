// 3.7 函数
// 3.7.1 理解参数
// 函数不介意传递进来多少个参数，也不在乎传进来参数是什么数据类型。
// 原因：参数是用一个数组表示的。函数接收的是这个数组，不关心数组中包含哪些参数。
// 在函数体内可以通过 arguments 对象来访问这个参数数组，从而获取传递给函数的每一个参数。
// arguments 对象只是与数组类似，它并不是 Array 的实例。
function sayHi(name, message) {
    console.log('Hi ' + name + ', ' + message)
}
sayHi('Bear', 'how are you today?')
// 可以改写为不显式地使用命名参数
// ES函数的重要特点：命名的参数只提供便利，不是必需的。
function sayHello() {
    console.log('Hi ' + arguments[0] + ', ' + arguments[1] + arguments[2])
}
sayHello('Rabbit', 'how is going? ', 'Do you want a cup of coffee?')

// 通过访问 arguments 对象的 length 属性可以获知有多少个参数传递给了函数。
function howManyArgs() {
    console.log(arguments.length)
}
howManyArgs('spring', 20)
howManyArgs()
howManyArgs(true)
console.log('')

// 函数可以接收任意个参数并分别实现适当的功能。
function doAdd() {
    if (arguments.length === 1) {
        console.log(arguments[0] + 10)
    } else if (arguments.length === 2) {
        console.log(arguments[0] + arguments[1])
    }
}
doAdd(5)
doAdd(24, 58)

// arguments 对象可以与命名参数一起使用。
function add(num1, num2) {
    if (arguments.length === 1) {
        console.log(num1 + 10)
    } else if (arguments.length === 2) {
        console.log(arguments[0] + num2)
    }
}
add(25, 35)

// arguments 的值永远与对应命名参数的值保持同步。
// 不过这并不是说读取这两个值会访问相同的内存空间;它们的内存空间是独立的，但它们的值会同步。
function doPlus(num1, num2) {
    arguments[1] = 10 // num2 也会同步变为 10
    console.log(num1, num2)
}
doPlus(2, 6)
// 如果只传入了一个参数，那么为 arguments[1] 设置的值不会反应到命名参数中。
// ！！arguments 对象的长度是由【实际传入的参数个数】决定的，不是由定义函数时的命名参数的个数决定的。
// 没有传递值的命名参数将自动被赋予 undefined 值。
doPlus(6)
console.log('')


// 3.7.2 没有重载 No Overloading
// 重载：其他语言中 (如 Java)，可以为一个函数编写两个定义，只要这两个定义的签名 (接受的参数的类型和数量) 不同即可。
// ES 没有函数签名，因此不能实现重载。
// 如果在 ES 中定义了两个名字相同的函数，则该名字只属于后定义的函数。




// 5.5 Function 类型
// 函数实际上是对象。每个函数都是 Function 类型的实例，而且都与其他引用类型一样具有属性和方法。
// 定义函数的3种途径：函数声明语法；函数表达式；Function 构造函数（不推荐）

// 函数名实际上是一个指向函数对象的指针，不会与某个函数绑定。
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(6, 10));
// 使用不带圆括号的函数名是访问函数指针，而非调用函数。
var anotherSum = sum; // 将 sum 的值赋给 anotherSum，两个函数名都指向了同一个函数
console.log(anotherSum(6, 10));
sum = null;
console.log(anotherSum(6, 10));
console.log('')


// 5.5.1 没有重载
// 将函数名想象为指针，也有助于理解为什么 ES 中没有函数重载的概念。
// 声明两个同名函数，后面的函数会覆盖前面的函数。


// 5.5.2 函数声明与函数表达式
// 区别：什么时候可以通过变量访问函数
// 【函数声明】定义可在调用之后
// 解析器会率先读取函数声明，并使其在执行任何代码之前可用 (可以访问)；
// 通过函数声明提升 (function declaration hoisting) 的过程，读取并将函数声明添加到执行环境中。
// 【函数表达式】定义必须在调用之前
// 必须等到解析器执行到它所在的代码行，才会真正被解释执行。
// （另见 prof-function-expressions.md）


// 5.5.3 作为值的函数
// 因为函数名本身就是变量，所以函数也可以作为值来使用。
// 可以像传递参数一样把一个函数传递给另一个函数，也可以将一个函数作为另一个函数的结果返回。
function callSomeFunction(someFunction, someArgument) {
    return someFunction(someArgument) // 返回传入的函数执行的结果
}

function add10(num) {
    return num + 10
}

var result1 = callSomeFunction(add10, 8) // 访问函数指针，函数名后不加括号！！
console.log(result1)

function sayName(name) {
    return 'Hello! I am ' + name
}

var result2 = callSomeFunction(sayName, 'Rabbit')
console.log(result2)

// 使用场景：根据某个对象属性对数组进行排序
// 解决：定义一个函数，接收一个属性名，根据属性名创建一个比较函数
function createComparisonFunction(propertyName) {
    return function (object1, object2) {
        var value1 = object1[propertyName]
        var value2 = object2[propertyName]
        if (value1 > value2) {
            return 1
        } else if (value1 < value2) {
            return -1
        } else {
            return 0
        }
    }
}

var items = [{
    name: 'Caroline',
    value: 25
}, {
    name: 'Bear',
    value: 20
}, {
    name: 'Rabbit',
    value: 16
}, {
    name: 'Bernie',
    value: 27
}]

items.sort(createComparisonFunction('name'))
console.log(items)
items.sort(createComparisonFunction('value'))
console.log(items)


// 5.5.4 函数内部属性