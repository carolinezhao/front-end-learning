// http://www.techug.com/post/13-javascript-program.html

(function () {
    console.log(typeof arguments); // object
})();


var q = function g() {
    return 10;
};
// console.log(q); // ReferenceError


(function (x) {
    delete x;
    console.log(x); // 1
})(1);


(function f(f) {
    console.log(typeof f()); // number
})(function () {
    return 1;
});
// 参数名称与函数名冲突，参数优先级更高，相当于 typeof 1


var foo = {
    bar: function () {
        // console.log(this);
        return this.baz;
        // return this.length;
    },
    baz: 1
};

(function () {
    console.log(typeof arguments[0]()); // undefined
})(foo.bar);
/*
arguments[0] 是 foo.bar
arguments[0]() 相当于 arguments.0() (此处 0 理解为方法名称)
所调用的函数中的 this 指向 arguments
arguments 中没有 baz 属性，但是有 length 属性 (该情况下结果为 number)
*/


console.log(typeof (p = foo.bar)()); // undefined
// 把 foo.bar 赋值给 p，失去原有的 this 绑定，this 指向全局对象。


var f1 = (function f() {
    return "1";
}, function g() {
    return 2;
})();
console.log(typeof f1); // number 
// 逗号分隔，保存最后一个的结果
var a = (1, 2, 3);
console.log(a);


var b = 1;
if (function f2() {}) {
    b += typeof f2;
}
console.log(b); // 1undefined
// 函数声明只能出现在程序或函数体内，不能出现在块中 (比如 if, while, for 语句)


(function f() {
    function f() {
        return 1;
    }
    return f(); // 2
    function f() {
        return 2;
    }
})();
// 在执行 return 之前，函数声明会在任何表达式被解析和求值之前先被解析和求值。


function k() {
    return k;
}
console.log(new k());
console.log(new k() instanceof k); // false
// 构造函数在 new 的过程中会返回一个表示该对象的实例。
// 但是函数的返回值覆盖了这个实例，这个 new 就形同虚设。
// 注意：instanceof 检测的是原型。


var y = 1,
    x = y = typeof x;
console.log(x); // undefined
/*
var y = 1;
y = typeof x;
var x = y;
*/


var m = [typeof m, typeof n][1];
console.log(typeof typeof m); // string


(function (foo) {
    console.log(typeof foo.bar); // undefined
})({
    foo: {
        bar: 1
    }
});