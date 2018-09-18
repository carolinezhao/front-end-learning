// 对象原型的真实值被存储在内部专用属性 [[Prototype]] 中。
// Object.getPrototypeOf() 返回存储的值
// Object.setPrototypeOf() 改变存储的值 -- 改变对象的原型
// 参数1 被改变原型的对象
// 参数2 用于替代的对象

let person = {
    getGreeting() {
        return 'Hello';
    }
};

let dog = {
    getGreeting() {
        return 'Woof';
    }
};

// 以 person 对象为原型
let friend = Object.create(person);
console.log(Object.getPrototypeOf(friend) === person);

// 将原型设置为 dog
Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting());
console.log(Object.getPrototypeOf(friend) === dog);
console.log('');

// 关于继承：Object.setPrototypeOf() 与 Object.create() 的比较见 04-know-inheritance.js



// __proto__ 是 Object.getPrototypeOf() 和 Object.setPrototypeOf() 的早期实现。
// 尽管 ES6 正式化了这个属性，但是不推荐使用。建议使用后两者。

// ES6 引擎中，Object.prototype.__proto__ 被定义为一个访问器属性。
// 其 get 方法会调用 Object.getPrototypeOf()；其 set 方法会调用 Object.setPrototypeOf()。
// 使用的区别在于 __proto__ 可以直接设置对象字面量的原型。
let guy = {
    __proto__: person
};
console.log(guy.getGreeting());
console.log(guy.__proto__ === person);

guy.__proto__ = dog;
console.log(guy.getGreeting());
console.log(Object.getPrototypeOf(guy) === dog);
console.log('');

// 对比：使用 Object.create() 创建对象时，必须为所有其他对象属性指定完整的属性描述符。



// 简化原型访问：使用 super 关键字
// super 引用相当于指向对象原型的指针，相当于 Object.getPrototypeOf(this)
// 只能在使用简写方法的对象中使用。
let dude = {
    getGreeting() {
        return super.getGreeting() + ', hi!';
    }
};

Object.setPrototypeOf(dude, person);
console.log(dude.getGreeting());

// super 引用在多重继承的情况下非常有用。
let relative = Object.create(dude);
console.log(person.getGreeting());
console.log(dude.getGreeting());
console.log(relative.getGreeting());

// ES6 正式将方法定义为一个函数。
// 内部的 [[HomeObject]] 属性存储这个方法从属的对象。

// super 的所有引用都通过 [[HomeObject]] 属性来确定后续的运行过程。
// 1. 在 [[HomeObject]] 属性上调用 Object.getPrototypeOf() 检索原型的引用；
// 2. 搜索原型找到同名函数；
// 3. 设置 this 绑定并调用相应的方法。