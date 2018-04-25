// 6.2.4 组合使用构造函数模式和原型模式
// 创建自定义类型的最常见方式，就是组合使用构造函数模式与原型模式。
// 构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性。
// 每个实例都会有自己的一份实例属性的副本，但同时又共享着对方法的引用，最大限度地节省了内存。
// 此外，还支持向构造函数传递参数。

function Person(name, job, friends) {
    this.name = name;
    this.job = job;
    this.friends = friends
}

Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.log(this.name);
    }
}

var person1 = new Person('Caroline', 'front-end', ['Helen', 'Alicia']);
var person2 = new Person('Bernie', 'back-end', ['Bear', 'Rabbit']);

person1.friends.push('Madell');
console.log(person1);
console.log(person2);
console.log(person1.friends === person2.friends) // false

person1.sayName();
person2.sayName();
console.log(person1.sayName === person2.sayName) // true


// 6.2.5 动态原型模式