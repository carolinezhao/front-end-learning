/*
reference
你不知道的js 5.4.1 创建关联
高程 6.3.4 原型式继承
MDN

Object.create(proto, [propertiesObject])
参数1 用作新对象原型的对象；
参数2 (可选) 为新对象定义额外属性的对象 (会覆盖原型对象上的同名属性)。

创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
创建一个新对象并把它关联到指定对象，这样就可以充分发挥 [[Prototype]] 机制的威力 (委托) 并且避免不必要的麻烦 (.prototype 和 .constructor)。

相当于创建副本，但为浅复制，即引用类型的属性指向同一引用，相互影响。

修改构造函数的 prototype 见 04-know-inheritance.js
*/

var person = {
    name: 'rabbit',
    friends: ['bear', 'helen', 'madell']
}

var person1 = Object.create(person);
person1.name = 'caroline';
person1.city = 'beijing';
console.log(person.isPrototypeOf(person1));
console.log(person1.__proto__ === person);

var person2 = Object.create(person);
person2.friends.push('alex');

// 继承来的属性在原型中，自己创建的属性在实例中。
// 同名的实例属性会屏蔽原型属性，但不会改写原有的属性值。
// friends 是引用类型，修改任意一个对象中的值，其他的也都会改变，包括原对象。

console.log(person);
console.log(person1);
console.log(person2);

// 第二个参数定义的是对象自身的可枚举属性 (node 和 chrome 行为不同)
var person3 = Object.create(person, {
    name: {
        value: 'melon'
    }
})
console.log(person3);

// polyfill
Object.create = Object.create || function (obj) {
    var F = function () {};
    F.prototype = obj;
    return new F();
}



// 初始化新对象：Object.create(null) 和 {} 的区别

// Object.create(null) 创建的对象没有原型链 (因此也就没有继承自 Object 的一系列方法)。
// 没有 .constructor，无法通过 instanceof 操作符进行判断 (结果为 false)。
// [[Prototype]] 为空的对象称为“字典”，不会受到原型链干扰，适合用于存储数据。

// reference：https://juejin.im/post/5acd8ced6fb9a028d444ee4e

let obj1 = Object.create(null, {
    a: {
        value: 1
    }
});

let obj2 = {
    a: 1
};

// 在 chrome 中查看
// obj1 没有 _proto_；obj2 有 _proto_

console.log(obj1, obj1 instanceof Object, obj1.constructor);
console.log(obj2, obj2 instanceof Object, obj2.constructor);

let obj3 = Object.create({}, {
    a: {
        value: 1
    }
});

let obj4 = Object.create(Object.prototype, {
    a: {
        value: 1
    }
});

// obj3 有 _proto_，且其中嵌套了 _proto_: Object；
// obj4 有 _proto_，效果同 obj2

console.log(obj3, obj3.toString());
console.log(obj4, obj4.toString());