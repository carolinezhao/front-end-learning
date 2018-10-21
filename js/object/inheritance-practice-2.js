// https://github.com/stone0090/javascript-lessons/tree/master/2.5-Prototype

// 挑战一
// 1.定义一个构造函数 Animal，它有一个 name 属性，以及一个 eat() 原型方法。
// 2.eat() 的方法体为：console.log(this.name + " is eating something.")。
// 3.new 一个 Animal 的实例 tiger，然后调用 eat() 方法。
// 4.用 __proto__ 模拟 new Animal() 的过程，然后调用 eat() 方法。

function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function () {
    console.log(this.name + " is eating something.");
}

var tiger1 = new Animal('Tiger1');
tiger1.eat();

function createObj(name) {
    var obj = {};
    obj.__proto__ = Animal.prototype;
    Animal.call(obj, name);
    return obj;
}

var tiger2 = createObj('Tiger2');
console.log(tiger2);
tiger2.eat();


// 挑战二
// 1.定义一个构造函数 Bird，它继承自 Animal，它有一个 name 属性，以及一个 fly() 原型方法。
// 2.fly() 的方法体为：console.log(this.name + " want to fly higher.");。
// 3.new 一个 Bird 的实例 pigeon，然后调用 eat() 和 fly() 方法。
// 4.用 __proto__ 模拟 new Bird() 的过程，然后用代码解释 pigeon2 为何能调用 eat() 方法。

function Bird(name) {
    Animal.call(this, name);
}

Object.setPrototypeOf(Bird.prototype, Animal.prototype);

Bird.prototype.fly = function () {
    console.log(this.name + " wants to fly higher.");
}

var pigeon1 = new Bird('Pigeon1');
pigeon1.eat();
pigeon1.fly();

var pigeon2 = {};
pigeon2.__proto__ = Bird.prototype;
Bird.call(pigeon2, 'Pigeon2');
console.log(pigeon2);
pigeon2.eat();

console.log(pigeon2.__proto__.__proto__ === Animal.prototype);