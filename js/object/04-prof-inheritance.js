// 6.3 继承

// 6.3.1 原型链

function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function () {
    return this.property;
}

function SubType() {
    this.subproperty = false;
}

// 继承：通过将原型赋值为 SuperType 的实例。本质是重写原型对象。
// SubType 原型中现在包含了 SuperType 构造函数中的属性和原型中的方法，而且其内部还有一个“指针”，指向了 SuperType 的原型。
SubType.prototype = new SuperType();
// 对于这种写法，《你不知道的 js》书中认为会产生一些副作用，具体见 0-know-prototype.md 5.3

SubType.prototype.getSubValue = function () {
    return this.subproperty;
}

var instanceSub = new SubType();
console.log(instanceSub.getSuperValue()); // true
// 经历三个搜索步骤: 1) 搜索实例; 2) 搜索 SubType.prototype; 3) 搜索 SuperType.prototype
console.log(instanceSub.constructor); // 指向 SuperType
console.log(Object.getPrototypeOf(instanceSub));
console.log('');


// 默认原型 (参考图 6-5)
// 所有引用类型默认都继承了 Object，这个继承也是通过原型链实现的。
// 所有函数的默认原型都是 Object 的实例，因此默认原型都会包含一个内部指针，指向 Object.prototype。
// 这也正是所有自定义类型都会继承 toString()、valueOf() 等默认方法的根本原因。
// 上例中，SubType 继承了 SuperType，SyperType 继承了 Object。当调用 instanceSub.toString() 时，实际上是调用了保存在 Object.prototype 中的方法。


// 确定原型和实例的关系
// 前面已经讲过: instanceof(), prototype.isPrototypeOf(), Object.getPrototypeOf()
console.log(instanceSub instanceof Object);
console.log(instanceSub instanceof SuperType);
console.log(instanceSub instanceof SubType);
console.log(Object.prototype.isPrototypeOf(instanceSub));
console.log(SuperType.prototype.isPrototypeOf(instanceSub));
console.log(SubType.prototype.isPrototypeOf(instanceSub));
// 以上结果都是 true，反映原型链继承。


// 谨慎定义方法
// 有时子类型需要重写超类型中的方法，或者添加超类型中不存在的方法。
// 给原型添加方法的代码一定要放在替换原型的语句之后。

// line 19 用 SuperType 实例替换了原型
// 这里重写方法
SubType.prototype.getSuperValue = function () {
    return this.subproperty;
}
console.log(instanceSub.getSubValue()); // 通过 SubType 的实例调用重写的方法
var instanceSuper = new SuperType();
console.log(instanceSuper.getSuperValue()); // 通过 SuperType 的实例调用原来的方法
console.log('');

// 通过原型链实现继承时，不能使用对象字面量创建原型方法，因为这样会导致重写原型链。(见 prof-prototype2 讨论的)


// 原型链的问题
// 1) 通过原型实现继承时，原型实际上会变成另一个类型的实例。于是原先的实例属性也会变成现在的原型属性。
// 比如：SuperType 构造函数定义了一个 colors 属性；
// SubType.prototype 变成了 SuperType 的一个实例，因此它也拥有了一个它自己的 colors 属性——就跟专门创建了一个 SubType.prototype.colors 属性一样；
// 结果是 SubType 的所有实例都会共享这一个 colors 属性。
// 2) 在创建子类型的实例时，不能向超类型的构造函数中传递参数。
// 因此实际中很少单独使用原型链。



// 6.3.2 借用构造函数
// 可以在子类型构造函数中向超类型构造函数传递参数。



// 6.3.3 组合继承 (js 中最常用的继承模式)
// 思路是使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。
function SuperType1(name) {
    this.name = name;
    this.colors = ['red', 'green', 'blue'];
}

SuperType1.prototype.sayName = function () {
    console.log(this.name);
}

function SubType1(name, age) {
    // 继承属性
    SuperType1.call(this, name);
    // 自己的属性
    this.age = age;
}

// 继承方法
SubType1.prototype = new SuperType1();
SubType1.prototype.constructor = SubType1;
SubType1.prototype.sayAge = function () {
    console.log(this.age);
}

// 让两个不同的 SubType 实例既分别拥有自己属性——包括 colors 属性，又可以使用相同的方法。
var instance1 = new SubType1('Caroline', 25);
instance1.colors.push('white');
console.log(instance1.colors);
instance1.sayName();
instance1.sayAge();

var instance2 = new SubType1('Bernie', 27);
console.log(instance2.colors);
instance2.sayName();
instance2.sayAge();
console.log('');



// 6.3.4 原型式继承
// 使用 Object.create()，基于一个对象创建另一个对象，无需构造函数。
// 见 04-inheritance-objectcreate.js



// 6.3.5 寄生式继承 

// 6.3.6 寄生组合式继承
// 组合继承最大的问题是会调用两次超类型构造函数：一次是在创建子类型原型的时候，另一次是在子类型构造函数内部。
// 结果就是有两组同名属性：一组在实例上，一组在 SubType 原型中。

// 寄生组合式继承，即通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。
// 背后的基本思路是，不必为了指定子类型的原型而调用超类型的构造函数，我们所需要的无非就是超类型原型的一个副本而已。
// 本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。

function inheritPrototype(subType, superType) {
    var prototype = Object(superType.prototype); // 创建对象
    prototype.constructor = subType; // 增强对象
    subType.prototype = prototype; // 指定对象
}

function SuperType2(name) {
    this.name = name;
    this.colors = ['red', 'green', 'blue'];
}

SuperType2.prototype.sayName = function () {
    console.log(this.name);
}

function SubType2(name, age) {
    SuperType1.call(this, name);
    this.age = age;
}

// 继承
inheritPrototype(SubType2, SuperType2);
// 对比
// Object.setPrototypeOf(SubType2, SuperType2.prototype);

SubType2.prototype.sayAge = function () {
    console.log(this.age);
}

var ins1 = new SubType2('Rabbit', 16);

// 对比
console.log(instance1);
console.log(ins1);