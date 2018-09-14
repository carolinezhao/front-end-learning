function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function () {
    return this.name;
}

let person1 = new Person('caroline', 26);

// prototype 是函数属性 (函数也是对象，即普通对象没有这个属性；用 bind 创建的函数没有这个属性)。
// __proto__ 是对象属性 (函数也是对象，因此也有这个属性)。指向创建该对象的构造函数的 prototype。
// [[Prototype]] 是对象的内部属性，不能直接访问。
// 函数和原型对象都有 constructor 属性。

// 访问原型的方法
// __proto__ (浏览器中)
// Object.getPrototypeOf()

// 构造函数 vs 原型对象
console.log(Person.prototype); // 对象
console.log(Person.prototype.constructor); // 函数
console.log(Person.prototype.constructor === Person);

// 实例化时，prototype 的属性会作为原型对象赋值给实例。
// 实例对象的 __proto__ 属性指向原型对象
console.log(person1);
console.log(person1.__proto__);
console.log(person1.__proto__ === Person.prototype);
console.log(Object.getPrototypeOf(person1) === Person.prototype);

// 构造函数是函数，因此就是 Function 的实例
console.log(Function.prototype);
console.log(Person.__proto__ === Function.prototype);
console.log(Function.__proto__ === Function.prototype);
console.log(Object.__proto__ === Function.prototype);
console.log(Object.getPrototypeOf(Object) === Function.prototype);
console.log(Function.constructor === Function);

// 原型对象是对象，因此就是 Object 的实例
console.log(Object.prototype);
console.log(Person.prototype.__proto__ === Object.prototype); // 结合 line 30，因此实例中有两层 __proto__ 嵌套。
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(({}).__proto__ === Object.prototype);
console.log(Object.prototype.constructor === Object); // 对比 line 37 有点矛盾，但都是 true。

// 顶端
console.log(Object.prototype.__proto__ === null);

// 对于以上关系的解释
// 先有 Object.prototype (原型链顶端)；Function.prototype 继承 Object.prototype 而产生；
// Function，Object 和其它构造函数继承 Function.prototype 而产生。

// reference 
// https://juejin.im/post/5af2a5a76fb9a07ab4589cd7 (图示)
// https://juejin.im/post/5af68c3e6fb9a07aab29ed07 (图示)

// https://github.com/jawil/blog/issues/13