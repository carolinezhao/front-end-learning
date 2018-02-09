// 4.1.2 复制变量值
// 基本类型值：互不影响
var num1 = 5
var num2 = num1
num1 = 20
console.log(num1, num2)
// 引用类型值：引用同一个对象，相互影响
var obj1 = new Object()
var obj2 = obj1
obj1.name = 'rabbit'
obj2.age = 25
console.log(obj1, obj2)