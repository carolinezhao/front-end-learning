// 6.2.3 原型模式 prototype pattern
// abstract：构造函数和原型对象相互有指针指向对方，实例中的指针仅指向原型对象。
// 构造函数、构造函数的原型对象、实例，三者之间的关系见图6-1（重要！）

// intro：为什么要使用原型模式？
// 我们创建的每个函数都有一个 prototype 属性，这个属性是一个指针，指向一个对象，而这个对象的用途是包含【可以由特定类型的所有实例共享的】属性和方法。
// 使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法。即不必在构造函数中定义对象实例的信息。

// 【构造函数 constructor】
function Person() {}
// 只要创建一个新函数，就会根据一组特定的规则为该函数创建一个 prototype 属性 (指针)，指向函数的原型对象。
console.log('指向原型对象: ', Person.prototype)

// 【构造函数的原型对象】
// 原型对象最初只包含 constructor 属性 (指针)，指向构造函数。
console.log('指向构造函数: ', Person.prototype.constructor) // function Person() {}
// 添加更多属性和方法
Person.prototype.name = 'rabbit'
Person.prototype.age = 25
Person.prototype.job = 'developer'
Person.prototype.sayJob = function () {
    console.log(this.job)
}

// 构造函数的 prototype 属性指向原型对象 (已添加了属性和方法)
console.log('指向原型对象: ', Person.prototype)
console.log('')

// 【实例 instance】
var person1 = new Person()
var person2 = new Person()

// 实例的内部包含一个指针 (内部属性)，指向【构造函数的原型对象】，与构造函数无关。
// 标准中这个指针叫 [[Prototype]]，脚本中无法访问，但是 chrome 中显示为 _proto_

// 脚本中可通过如下方法查看这种关系
console.log('获取实例的原型对象')
// 判断原型对象
console.log(Person.prototype.isPrototypeOf(person1)) //true
console.log(Object.getPrototypeOf(person2) === Person.prototype) //true
// 获取原型对象中的属性
console.log(Object.getPrototypeOf(person2).name) //rabbit
console.log('')

// 与构造函数模式不同的是，原型对象中的属性和方法是由所有实例共享的。
// person1 和 person2 访问的都是同一组属性和同一个 sayJob() 函数。
console.log(person1.sayJob === person2.sayJob) //true

console.log('查找对象属性和方法')
// 读取对象属性或方法时，先搜索实例本身，如果没有，再搜索原型对象
console.log(person1.name)
person1.sayJob()
person2.sayJob()

console.log('屏蔽原型的属性')
// 如果实例中添加了与原型中重名的属性，则会覆盖原型中的属性值，但是不会修改它的值。
person1.name = 'bear'
console.log(person1.name) //在实例中找到了属性值，不会再访问原型
console.log(person2.name) //实例中没有该属性，查找原型

person1.name = null //仍覆盖原型属性
console.log(person1.name)
delete person1.name //delete 操作符可以删除实例属性
console.log(person1.name) //查找原型
console.log('')


// 判断属性的归属
// hasOwnProperty (继承自Object) 
// 检测属性是否来自对象实例，对于原型中的属性返回 false。

// property in object
// 如果对象能访问某属性，就返回 true，无论存在于实例还是原型中。

// 确定属性是否存在于原型中：同时使用 hasOwnProperty 方法 (应返回 flase) 和 in 操作符 (应返回 true)。
function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && (name in object)
}

console.log('判断 name 属性的归属')
// person1 访问到的 name 属性属于原型
console.log(person1.hasOwnProperty('name')) //false
console.log('name' in person2) //true
console.log(hasPrototypeProperty(person1, 'name')) //true
console.log('')
// 在实例中重写 name 属性
person1.name = 'caroline'
console.log(person1.hasOwnProperty('name')) //true
console.log('name' in person1)
console.log(hasPrototypeProperty(person1, 'name')) //false
console.log('')
// 在实例中添加新属性
person2.location = 'Beijing'
console.log(person2.hasOwnProperty('age')) //age是原型中的属性
console.log('age' in person2)
console.log(hasPrototypeProperty(person2, 'age')) //true
console.log('')
console.log(person2.hasOwnProperty('location'))
console.log('location' in person2)
console.log(hasPrototypeProperty(person2, 'location')) //false
console.log('')

// 两种方式使用 in 操作符：直接使用 (见上例)；for-in 循环

// for-in 循环
// 返回所有能够通过对象访问的、可枚举的(enumerated)属性，其中既包括存在于实例中的属性，也包括存在于原型中的属性。
// 屏蔽了原型中不可枚举属性(即将 [[Enumerable]] 标记为 false 的属性)的实例属性也会返回。

// 对象中定义了名为 toString() 的方法，屏蔽了原型中不可枚举的 toString() 方法。
var obj = {
    toString: function () {
        return 'make it enumerable'
    }
}

for (var prop in obj) {
    if (prop === 'toString') {
        console.log(obj.toString());
    }
}

// Object.keys()
// 接收一个对象 (可以是原型对象，实例) 作为参数，返回一个包含所有可枚举属性的字符串数组。
var keys = Object.keys(Person.prototype);
console.log(keys);
var keys1 = Object.keys(person1);
console.log(keys1);
var keys2 = Object.keys(person2);
console.log(keys2);

// Object.getOwnPropertyNames()
// 得到所有实例属性，无论它是否可枚举。
var keysAll1 = Object.getOwnPropertyNames(Person.prototype);
console.log(keysAll1); // 包括 'constructor'
var keysAll2 = Object.getOwnPropertyNames(Person);
console.log(keysAll2); 
// [ 'length', 'name', 'arguments', 'caller', 'prototype' ]
console.log('')

// 查看属性的特性（描述符）
console.log(Object.getOwnPropertyDescriptor(person1, 'name'))
console.log(Object.getOwnPropertyDescriptor(Person.prototype, 'name'))