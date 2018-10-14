/*
高程 22.1.5 函数柯里化 (function currying)
用于创建已经设置好一个或多个参数的函数。

借用数组方法
对于数组：array.slice(index1, index2)
对于类数组：Array.prototype.slice.call(arrayLike, index1, index2)
参数：第一个是 this 的绑定对象 (即操作对象)，第二个及以后是传入 slice 方法的参数。
slice 不传参数相当于复制数组。

不考虑执行环境，apply 的第一个参数用 null，复杂情况要注意，见 this-10-1.js
*/

function curry(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
        console.log(arguments);
        var innerArgs = Array.prototype.slice.call(arguments);
        console.log(innerArgs);
        var finalArgs = args.concat(innerArgs);
        console.log(finalArgs);
        return fn.apply(null, finalArgs);
    };
}

function add(num1, num2) {
    return num1 + num2;
}

var curriedAdd = curry(add, 5);
console.log(curriedAdd(3));

var curriedAdd1 = curry(add, 5, 6);
console.log(curriedAdd1());


// 函数柯里化常作为函数绑定的一部分包含在其中，构造出更为复杂的 bind() 函数。
function bind(fn, context) {
    var args = Array.prototype.slice.call(arguments, 2);
    return function () {
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(context, finalArgs);
    };
}

// 原生的 bind() 方法也能实现函数柯里化，只要在 this 值之后再传入另一个参数即可。见 binding.html