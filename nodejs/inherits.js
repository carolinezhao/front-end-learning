var util = require('util')

// 构造函数
function Base() {
    this.name = 'base'
    this.base = 1992
    this.sayHello = function() {
        console.log('Hello ' + this.name)
    }
}

// 原型
Base.prototype.showName = function() {
    console.log(this.name)
}

function Sub() {
    this.name = 'sub'
}

// Sub 继承 Base 在原型中定义的函数
util.inherits(Sub, Base)

var objBase = new Base()
objBase.showName()
objBase.sayHello()
// 原型中定义的属性不会作为对象的属性输出
console.log(objBase)

var objSub = new Sub()
objSub.showName()
// objSub.sayHello() // TypeError
console.log(objSub)