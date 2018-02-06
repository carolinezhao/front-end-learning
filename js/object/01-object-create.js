/*=====================================================
Object
Using objects, we can put our information and the functions that use that information (method) in the same place.
You can also think of objects as combinations of key-value pairs (like arrays), only their keys don't have to be numbers like 0, 1, or 2: they can be strings and variables.

Creating an object
- Literal notation
- Constructor notation
=====================================================*/

/*=====================================================
Literal notation
* creates a single object;
* uses curly brackets { };
* default properties are defined within the brackets using property:value notation.

var objectName = {
    property1: 'value1',
    property2: 'value2',
    methodName: function () {}
};
objectName.property1;
objectName.methodName();
=====================================================*/
var user = {
    job: 'scientist',
    married: 'false',
    say: function () {
        console.log("Hi! I work as a " + user.job);
    } // 注意此处不应有任何符号
};
user.say();
user.job = 'dentist';
user.say();
console.log('\n')

/*=====================================================
Constructor notation
* involves defining an object constructor;
* like defining a function, we use the function keyword;
* think of this constructor as a "template" from which you can create multiple objects;
* to create a new object from a constructor, we use the new keyword.

function constructorName(parameter) {
    this.property = parameter;
    this.method=function() {
    };
};
var objectName = new constructorName(parameter);
objectName.method(); // 调用 method 使用的是新创建的 object 而不是 constructor
=====================================================*/
function Person(job, married) {
    this.job = job;
    this.married = married;
    this.speak = function () {
        console.log("Hi! I work as a " + this.job);
    }
}
var person1 = new Person('developer', false);
var person2 = new Person('Dentist', true)
person1.speak();
person2.speak();
// person1 和 person2 分别保存着 Person 的一个不同的实例。这两个对象都有一个 constructor(构造函数) 属性。
console.log(person1.constructor === Person)
// 创建的所有对象既是 Object 的实例，同时也是 Person 的实例。
console.log(person2 instanceof Object)
console.log(person2 instanceof Person)
console.log('\n')


// 初学时的两种写法
var user = new Object();
user.age = 25;

var user = {};
user.city = 'Beijing';

/*=====================================================
Properties
Properties are like variables that belong to an object, and are used to hold pieces of information. 

Properties can be accessed (get the value of an object's property) in two ways:
* Dot notation: ObjectName.PropertyName
* Bracket notation: ObjectName["PropertyName"] (don't forget the quotes!)

An advantage of this is that we can also use variables whose values are property names.
		var Obj = {propertyName: value};
		var myProperty = 'propertyName';
        Obj[myProperty];
        
can be used in for/in loop to get all properties or values.
		for (key in object) {
		     console.log(object[key]);
		}
=====================================================*/

// Dot notation
console.log(person1.job);

// Bracket notation
console.log(person1['job']);
var propName = 'job';
console.log(person1[propName]);