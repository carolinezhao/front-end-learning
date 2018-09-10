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