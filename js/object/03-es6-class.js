// ES5 中的近类结构：创建一个构造函数，然后定义另一个方法并赋值给构造函数的原型 (比如 prof-combine.js)。

// ES6 中的类，是一种语法糖，实际上是一个具有构造函数方法行为的函数。
class Person {
    // 等价于构造函数
    constructor(name) {
        this.name = name;
    }
    // 等价于给构造函数的原型添加方法
    sayName() {
        console.log(this.name);
    }
}

let person = new Person('caroline');
person.sayName();
console.log(person instanceof Person);
console.log(person instanceof Object);
console.log(typeof Person); // 'function'
console.log(typeof Person.prototype.sayName); // 'function'

// 类与函数的区别：
// 函数声明可以被提升，但是类声明与 let 声明类似，不能被提升 (必须在调用之前声明)；
// 类声明中的代码自动运行在严格模式下；
// 类中的所有方法都不可枚举；
// 只能使用 new 关键字调用类；
// 不能修改类名；
// 类属性不可被赋予新值；
// 等等。

// 类表达式
let Person1 = class {};
let Person2 = class PersonClass2 {};
console.log(typeof Person1, typeof Person2, typeof PersonClass2); // function, function, undefined

// 类是一等公民：可以传入函数，可以从函数返回，可以赋值给变量。
// 作为参数传入函数
function createObject(classDef) {
    return new classDef();
}

let obj = createObject(class {
    sayHi() {
        console.log('Hi!');
    }
});

obj.sayHi();

// 通过 IIFE 创建单例
let obj1 = new class {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}('rabbit');
obj1.sayName();

// 继承与派生类
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    getArea() {
        return this.length * this.width;
    }
}

// 用 extends 关键字指定类继承的函数
class Square extends Rectangle {
    constructor(length) {
        // 用 super() 访问基类的构造函数
        // 等价于 Rectangle.call(this, length, width)
        super(length, length);
    }
}
// 继承自其他类的类称为派生类。
// 如果在派生类中指定了构造函数则必须调用 super()，否则会报错。
// 如果不使用构造函数，创建新的类实例时会自动调用 super() 并传入所有参数。(可能会与预期功能不符，因此要手动传入)

// 关于 super 的使用
// super() 只能在派生类中使用；
// 构造函数访问 this 之前一定要调用 super()，它负责初始化 this；
// 如果不想调用 super()，唯一方法是让类的构造函数返回一个对象。

let square = new Square(6)
console.log(square.getArea());
console.log(square instanceof Rectangle);