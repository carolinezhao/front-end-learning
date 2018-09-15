// https://juejin.im/post/5b0a5c3d51882538a642f142
// https://zhuanlan.zhihu.com/p/23987456
// this-8.js 构造调用，new 的作用

// 模拟 new 的过程
var newObject = function (func) {
    var o = {}; // 创建新对象
    o.__proto__ = func.prototype; // 继承构造函数的 prototype
    var k = func.call(o); // 调用 call 方法，使 this 指向这个新创建的对象
    if (typeof k === 'object') {
        // 如果构造函数有返回对象，则取代步骤 1 创建的对象，返回构造函数所返回的对象
        return k;
    } else {
        // 如果构造函数没有返回对象，则直接返回步骤 1 创建的对象
        return o;
    }
}


function Cat(name) {
    this.name = name
}

function Dog(name) {
    this.name = name;
    return new Cat('cat'); // 返回一个对象
}

function Bear(name) {
    this.name = name;
}

var animal1 = new Dog('dog');
console.log(animal1.name);
console.log(animal1);

var animal2 = new Bear('bear');
console.log(animal2.name);

Cat.call(this, 'catcat'); // this 指向全局对象
console.log(window.name);