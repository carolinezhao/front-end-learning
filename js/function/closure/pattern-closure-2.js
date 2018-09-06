// 闭包的应用

// 案例1 封装变量
// 最初的函数：计算乘积
var mult0 = function () {
    var a = 1;
    for (let i = 0; i < arguments.length; i++) {
        a = a * arguments[i];
    }
    return a;
}

// 加入缓存机制提高性能，用闭包封装函数。
var mult = (function () {
    var cache = {};

    var calculate = function () { // 提炼和封装
        var a = 1;
        for (let i = 0; i < arguments.length; i++) {
            a = a * arguments[i];
        }
        return a;
    };

    return function () {
        var args = Array.prototype.join.call(arguments, ',');
        if (args in cache) {
            console.log('cache: ' + args);
            return cache[args];
        }
        return cache[args] = calculate.apply(null, arguments);
    }
})();

console.log(mult(1, 2, 3));
console.log(mult(1, 2, 3));


// 案例2 延续局部变量的寿命