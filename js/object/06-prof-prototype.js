// 6.2.3 原型模式 prototype pattern
// 构造函数、构造函数的原型对象、实例，三者之间的关系见图6-1（重要！）

// 构造函数 constructor
function Person() {}
// prototype 属性是一个指针，指向“构造函数的原型对象”
Person.prototype.name = 'rabbit'
Person.prototype.age = 25
Person.prototype.job = 'developer'
Person.prototype.sayJob = function() {
    console.log(this.job)
}
// 指向原型对象
console.log(Person.prototype)
// 原型对象最初只包含 constructor 属性，指向构造函数
console.log(Person.prototype.constructor)
console.log('')

// 实例 instance
var person1 = new Person()
var person2 = new Person()
// 实例中有一个_proto_属性(Chrome支持)，这个指针仅指向“构造函数的原型对象”，与构造函数无关。
// 脚本中可通过如下方法查看这种关系
// 判断原型对象
console.log(Person.prototype.isPrototypeOf(person1)) //true
console.log(Object.getPrototypeOf(person2) === Person.prototype) //true
// 获取原型对象中的属性
console.log(Object.getPrototypeOf(person2).name) //rabbit
console.log('')

// 多个对象实例共享原型保存的属性和方法
// 读取对象属性或方法时，先搜索实例本身，如果没有，再搜索原型对象
console.log(person1.name)
person1.sayJob()
person2.sayJob()

// 如果实例中添加了与原型中重名的属性，则会覆盖原型中的属性值，但是不会修改它的值。
person1.name = 'bear'
console.log(person1.name) //在实例中找到了属性值，不会再访问原型
console.log(person2.name) //实例中没有该属性，查找原型

person1.name = null //仍覆盖原型属性
console.log(person1.name)
delete person1.name //删除实例属性
console.log(person1.name)
console.log('')


// 判断属性的归属
// 【hasOwnProperty】 检测属性是否来自对象实例，对于原型中的属性返回 false。
// 【property in object】 如果对象能访问某属性，就返回 true，无论存在于实例还是原型中。
// 确定属性是否存在于原型中：同时使用 hasOwnProperty 方法（应返回 flase）和 in 操作符（应返回 true）。
function hasPrototypeProperty(object,name) {
    return !object.hasOwnProperty(name) && (name in object)
}
// 【for-in 循环】
// 返回所有能够通过对象访问的、可枚举的(enumerated)属性，其中既包括存在于实例中的属性，也包括存在于原型中的属性。
// 屏蔽了原型中不可枚举属性(即将 [[Enumerable]]标记为 false 的属性)的实例属性也会返回。

// person1 访问到的 name 属性属于原型
console.log(person1.hasOwnProperty('name')) //false
console.log('name' in person2) //true
console.log(hasPrototypeProperty(person1,'name')) //true
console.log('')
// 在实例中重写 name 属性
person1.name = 'caroline' //true
console.log(person1.hasOwnProperty('name'))
console.log('name' in person1)
console.log(hasPrototypeProperty(person1,'name')) //false
console.log('')
// 在实例中添加新属性
person2.location = 'Beijing'
console.log(person2.hasOwnProperty('age'))
console.log('age' in person2)
console.log(hasPrototypeProperty(person2,'age')) //true
console.log('')
console.log(person2.hasOwnProperty('location'))
console.log('location' in person2)
console.log(hasPrototypeProperty(person2,'location')) //false


// 查看属性的特性（描述符）
console.log(Object.getOwnPropertyDescriptor(person1,'name'))
console.log(Object.getOwnPropertyDescriptor(Person.prototype,'name'))