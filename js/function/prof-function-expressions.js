// 第7章 函数表达式

// 前言


// 7.1 递归


// 7.2 闭包
// 闭包是指有权访问另一个函数作用域中的变量的函数。
// 创建闭包的常见方式，是在一个函数内部创建另一个函数。
// 执行环境及作用域的概念见 README.md

function createComparisonFunction(propertyName) {
    return function (object1, object2) { // 内部函数 (一个匿名函数)
        // 即使这个内部函数被返回了，而且是在其他地方被调用了，但它仍然可以访问外部函数中的变量 propertyName。
        // 因为内部函数的作用域链中包含外部函数的作用域。
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    };
}

// 在另一个函数(A)内部定义的函数(B)会将包含函数 (即外部函数A) 的活动对象添加到它的作用域链中。
// 在此 A = createComparisonFunction()
// 在匿名函数从A中被返回后，它的作用域链被初始化为包含A函数的活动对象和全局变量对象。
// 这样，匿名函数就可以访问在A中定义的所有变量。
// 当A函数在执行完毕后，其执行环境的作用域链会被销毁，但它的活动对象仍然会留在内存中，因为匿名函数的作用域链仍然在引用这个活动对象；
// 直到匿名函数被销毁后，A的活动对象才会被销毁。

var compare = createComparisonFunction('name') // 返回的是内部的匿名函数
var result = compare({ // 调用匿名函数
    name: 'caroline'
}, {
    name: 'rabbit'
})
console.log(compare)
console.log(result)
compare = null; // 解除对匿名函数的引用，以便释放内存
console.log(compare)
// 由于闭包会携带包含它的函数的作用域，因此会比其他函数占用更多的内存。应只在绝对必要时再考虑使用闭包。


// 7.2.1 闭包与变量
// 7.2.2 关于 this 对象
// 7.2.3 内存泄漏



// 7.3 模仿块级作用域
// 7.4 私有变量