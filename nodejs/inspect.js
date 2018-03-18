var util = require('util')

function Person() {
    this.name = 'caroline'
    this.toString = function() {
        return this.name
    }
}

var obj = new Person()

Person.prototype.sayHi = function() {
    console.log(this.name)
}

console.log(obj)
console.log(util.inspect(obj))
console.log(util.inspect(obj, true, null, true))