// https://mp.weixin.qq.com/s/egCtqv2Tjh_nVBX_t6PaDw

// 实现一个构造函数 Foo，该函数的每个实例为一个对象，形如 {id: N}
// 其中 N 表示该实例是第 N 次调用 Foo 得到的

// 方法 1
var id = 1

function Foo() {
    this.id = id++;
}

var a = new Foo();
var b = new Foo();
console.log(a, b);


// 方法 2
var Foo1 = (function () {
    var id = 1;
    return function () {
        console.log(this);
        this.id = id++;
        // return this.id;
    }
})();

var c = new Foo1();
var d = new Foo1();
console.log(c, d);

// 对比 this 和返回值
var e = Foo1();
var f = Foo1();
console.log(e, f);


// 继承
function Sub() {
    Foo1.call(this);
}
Sub.prototype = new Foo1();
Sub.prototype.constructor = Sub;

Sub.prototype = Object.create(Foo1.prototype)

class Foo2 {}
class Sub1 extends Foo2 {}