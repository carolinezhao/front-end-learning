function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function () {
    return this.name;
}

let person1 = new Person('caroline', 26);

// .prototype 是函数属性
// __proto__ 是对象属性 (函数也是对象，因此也有这个属性)

// chrome 中运行

// 构造函数 vs 原型对象
console.log(Person.prototype); // 对象
console.log(Person.prototype.constructor); // 函数
console.log(Person.prototype.constructor === Person);

// 实例化时，prototype 的属性会作为原型对象赋值给实例。
// 实例对象的 __proto__ 属性指向原型对象
console.log(person1.__proto__);
console.log(person1.__proto__ === Person.prototype);

// 构造函数是 Function 的实例
console.log(Person.__proto__ === Function.prototype);
console.log(Function.__proto__ === Function.prototype);
console.log(Object.__proto__ === Function.prototype);

// 原型对象是 Object 的实例
console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);

// 顶端
console.log(Object.prototype.__proto__ === null);

// reference：https://juejin.im/post/5af2a5a76fb9a07ab4589cd7