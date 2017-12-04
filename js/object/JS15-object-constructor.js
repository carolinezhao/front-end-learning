// Constructors are a way to make objects with the keyword new. 
// The most basic constructor is the Object constructor, which will make an object with no methods or properties.
// For more complicated objects we can make our own constructors and put in whatever properties and methods we want.
// these kind of custom constructors are important because they allow us to easily make many similar objects.

// To create an object using constructor:
// var objectName = new constructorName(value for each property);
// And to call the method:
// objectName.methodName( );

// When we write bob = new Object( ); we are using a built-in constructor called Object.

// ================= Custom Constructors =================
// So instead of using the Objectconstructor which is empty and has no properties, we can make our own constructors which have properties.
// 自定义constructor与一般function的区别是，不用var 名称。
// 用this表示属性，即意味着它不专属，可以给任何一组类似的object赋值。
// In a constructor, we don't have to define all the properties using parameters.
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.city = "Beijing";
}

var bear = new Person("Bear", 27);
var rabbit = new Person("Rabbit", 25);

// constructors can also define methods
function Rectangle(height, width) {
    this.height = height;
    this.width = width;
    this.area = function () {
        return this.height * this.width;
    }
}

var rect = new Rectangle(3, 4);
var area = rect.area();
console.log(rect);
console.log(area);