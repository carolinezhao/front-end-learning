// 原型链

function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
}

function SubType() {
    this.subproperty = false;
}

// 继承：通过将原型赋值为 SuperType 的实例。本质是重写原型对象。
// SubType 原型中现在包含了 SuperType 构造函数中的属性和原型中的方法，而且其内部还有一个“指针”，指向了 SuperType 的原型。
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
    return this.subproperty;
}

var instance = new SubType();
console.log(instance.getSuperValue()); // true
// 经历三个搜索步骤: 1) 搜索实例; 2) 搜索 SubType.prototype; 3) 搜索 SuperType.prototype
console.log(instance.constructor);
console.log(Object.getPrototypeOf(instance));


// 所有引用类型默认都继承了 Object，这个继承也是通过原型链实现的。
// 所有函数的默认原型都是 Object 的实例，因此默认原型都会包含一个内部指针，指向 Object.prototype。
// 这也正是所有自定义类型都会继承 toString()、 valueOf() 等默认方法的根本原因。