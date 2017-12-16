// 《Node.js 开发指南》附录A.2闭包
// 闭包：由函数（环境）及其封闭的自由变量组成的集合体。

var generateClosure = function () {
    var count = 0;
    var get = function () {
        count++; // 将父作用域中的 count 变量增加 1
        return count;
    };
    return get; // 返回值是 get 函数
};
// 当一个函数返回它内部定义的一个函数时，就产生了一个闭包，闭包不但包括被返回的函数，还包括这个函数的定义环境。
// 当函数 generateClosure() 的内部函数 get 被一个外部变量 counter 引用时，counter 和 generateClosure() 的局部变量就是一个闭包。

console.log(generateClosure());

// 生成了两个闭包的实例，它们内部引用的 count 变量分别属于各自的运行环境。
var counter1 = generateClosure();
var counter2 = generateClosure();

console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter1());
console.log(counter2());

// 可以理解为，在 generateClosure() 返回 get 函数时，私下将 get 可能引用到的 generateClosure() 函数的内部变量也返回了，并在内存中生成了一个副本，之后 generateClosure() 返回的函数的两个实例 counter1 和 counter2 就是相互独立的了。