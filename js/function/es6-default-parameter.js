// ES5 模拟默认参数值
function makeRequest1(url, timeout, callback) {
    // 如果不传入参数值，则默认为 undefined
    // 常用逻辑或赋予默认值，如果第一个值为 false，则返回第二个值 (有缺陷，即使合法值也有可能是 false)
    // timeout = timeout || 2000
    // callback = callback || function () {}
    // 改进：检查类型
    timeout = (typeof timeout !== 'undefined') ? timeout : 2000
    callback = (typeof callback !== 'undefined') ? callback : function () {}
}

// ES6 设置默认参数值
// 可以为任意参数指定默认值，在已指定默认值的参数后可以继续声明无默认值的参数。
function makeRequest2(url, timeout = 2000, callback = function () {}) {}

// 使用默认值的情况：不传入值；主动传入 undefined
// 注意：null 是合法值，不会使用默认值。


// 默认参数值对 arguments 对象的影响
// ES5 非严格模式下：命名参数的变化会同步更新到 arguments 对象中；
// ES5 严格模式下，ES6 使用默认参数值 (无论是否严格模式)：无论参数如何变化，arguments 对象不再随之改变。
(function mixArgs(first, second = 'b') {
    console.log(arguments.length); // 1
    console.log(first === arguments[0]); // true
    console.log(first === arguments[1]); // false
    console.log(arguments[1]); // undefined
})('a');
// arguments.length 不计入使用默认值的参数。

// 函数 length 属性的含义是该函数预期传入的参数个数。length 属性只统计默认值参数之前的参数个数。
(function f(a, b, c = 1) {
    console.log(f.length, arguments.length); // 2 2
})(1, 1);

(function f(a, b = 1, c) {
    console.log(f.length, arguments.length); // 1 0
})();


// 默认参数表达式

// 通过函数执行来得到默认参数值
// 初次解析函数声明时不会调用 getValue()，只有在调用 add() 且不传入第二个参数时才会调用。
let value = 5;

function getValue() {
    return value++;
}

function add(a, b = getValue()) {
    console.log(a + b);
}

add(1, 1); // 2
add(1); // 1+5
add(1); // 1+6

// 因为默认参数是在函数调用时求值，可以使用先定义的参数作为后定义参数的默认值。
function add1(a, b = a) {
    console.log(a + b);
}

add1(1, 2);
add1(1);

// 可以把先定义的参数传入一个函数来获得后定义参数的值。
function getB(value) {
    return value + 5;
}

function add2(a, b = getB(a)) {
    console.log(a + b);
}

add2(1, 1);
add2(1);


// 默认参数的临时死区
// 与 let 声明类似，定义参数时会为每个参数创建一个新的标识符绑定，该绑定在初始化之前不可被引用。
// 当函数调用时，通过传入值或参数的默认值初始化该参数。

// 因此调用函数 add2(1) 相当于进行以下步骤：
// let a = 1;
// let b = getB(a);

// 如果先定义的参数访问后定义的参数 (还未初始化)，就会报错。

// 函数参数有自己的作用域和临时死区，与函数体的作用域是各自独立的。
// 因此参数的默认值不可访问函数体内声明的变量。