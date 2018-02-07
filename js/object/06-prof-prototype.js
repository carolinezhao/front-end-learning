// 6.2.3 原型模式
// 构造函数、构造函数的原型对象、实例，三者之间的关系见图6-1（重要！）

// 构造函数
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

// 实例
var person1 = new Person()
var person2 = new Person()
// 实例中有一个_proto_属性(Chrome支持)，这个指针仅指向“构造函数的原型对象”，与构造函数无关。
// 脚本中可通过如下方法查看这种关系
// 判断原型对象
console.log(Person.prototype.isPrototypeOf(person1)) //true
console.log(Object.getPrototypeOf(person2) === Person.prototype) //true
// 获取原型对象中的属性
console.log(Object.getPrototypeOf(person2).name) //rabbit

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

// 检测属性是否来自对象实例，对于原型中的属性返回 false
console.log(person1.hasOwnProperty('name')) //false
person1.name = 'caroline' //实例中重写 name 属性返回 true
person2.location = 'Beijing'
console.log(person1.hasOwnProperty('name'))
console.log(person2.hasOwnProperty('location'))

console.log(Object.getOwnPropertyDescriptor(person1,'name'))



