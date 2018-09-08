/*
this 指向一个对象。
1. 以对象的方法调用，this 指向该对象。
2. 以普通函数调用，this 指向全局对象。
3. 构造器调用，this 指向新建对象 or 构造器返回的对象。
4. apply 或 call 调用，this 指向绑定的对象 (即传入的第一个参数)。
*/

// ===== 以对象的方法调用 =====
// case1 直接调用对象方法
let obj = {
    a: 5,
    getA() {
        console.log(this === obj, this.a);
    }
};
obj.getA();

// case2 把普通函数赋值给对象方法
function printA() {
    console.log(this.a);
}
obj.printA = printA;
obj.printA();
console.log(obj);

// 更多见 this-6-1.js


// ===== 以普通函数调用 =====
window.a = 10;
var a = 20;
// case3 直接调用普通函数
printA();

// case4 把对象方法赋值给普通函数
let getA = obj.getA;
getA();

// case5 见 pattern-this-2.html


// ===== 构造器调用 =====
// case6 如果构造函数没有返回对象，this 指向调用构造函数的新对象
class Person {
    constructor(name) {
        this.name = name;
        console.log(this);
    }
}

let person1 = new Person('caroline');
console.log(person1.name);

// case7 如果构造函数返回了对象，this 指向这个返回的对象
function MyClass(name) {
    this.name = name;
    console.log(this);
    return {
        name: 'rabbit'
    }
}

let person2 = new MyClass('caroline');
console.log(person2.name); // rabbit

// new 关键词的作用见 this-8.js