// 文件内容：
// 创建对象的方式 from codecademy
// Object 类型 from 高程 5.1
// 对构造函数的深入讲解 from 高程 6.2.2

/*=====================================================
Object
Using objects, we can put our information and the functions that use that information (method) in the same place.
You can also think of objects as combinations of key-value pairs (like arrays), only their keys don't have to be numbers like 0, 1, or 2: they can be strings and variables.

Creating an object
- Literal notation
- Constructor notation
=====================================================*/

// 初学时的两种写法
var user = new Object();
user.age = 25;

var user = {};
user.city = 'Beijing';


/*=====================================================
Literal notation 对象字面量
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

表达式上下文 (expression context)：能够返回一个值 (表达式)。赋值操作符表示后面是一个值，{ 表示这里是一个表达式的开始。
语句上下文 (statement context)，比如跟在 if 语句条件的后面，{ 表达一个语句块的开始。
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
console.log('')

// 需要向函数传递【大量可选参数】时，使用对象字面量是首选方式。比传递多个命名参数要灵活。
function displayInfo(args) {
    var output = '';
    // 无论属性是否存在，都保证函数正常执行。
    if (typeof args.name === 'string') {
        output += `Name: ${args.name}\n`;
    }
    if (typeof args.age === 'number') {
        output += `Age: ${args.age}\n`;
    }
    console.log(output);
}

displayInfo({
    name: 'caroline',
    age: 25
});

displayInfo({
    name: 'bernie'
});


/*=====================================================
Constructor notation 构造函数
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
var person2 = new Person('designer', true)
person1.speak();
person2.speak();
// person1 和 person2 分别保存着 Person 的一个不同的实例。这两个对象都有一个 constructor(构造函数) 属性。
console.log(person1.constructor === Person)
// 创建的所有对象既是 Object 的实例，同时也是 Person 的实例。
console.log(person2 instanceof Object)
console.log(person2 instanceof Person)

// 构造函数作为普通函数调用
Person('manager', true); // 添加到 window
// window.speak();

// 在另一个对象的作用域中调用
var obj = {};
Person.call(obj, 'artist', false); // 把构造函数的 this 绑定到 obj
obj.speak();

// 实例中虽然都有名为 speak 的方法，但它们不是同一个 Function 实例。
// 每定义一个函数，就实例化了一个对象。
// 可以理解为：this.speak = new Function();
console.log(person1.speak === person2.speak) // false

// 创建两个完成同样任务的 Function 实例没有必要；
// 况且有 this 对象在，不用在执行代码前就把函数绑定到特定对象上面。
// 可以通过把函数定义转移到构造函数外部来解决这个问题。
function Child(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = sayName;
}

// 在构造函数内部，将 sayName 属性设置成等于全局的 sayName 函数。
// 由于 sayName 包含的是一个指向函数的指针，child1 和 child2 对象就共享了在全局作用域中定义的同一个 sayName() 函数。
function sayName() {
    console.log(this.name);
}

var child1 = new Child('rabbit', 6);
var child2 = new Child('bear', 8);

console.log(child1.sayName === child2.sayName) // true
console.log('')

// 在全局作用域中定义的函数实际上只能被某个对象调用，这让全局作用域有点名不副实。
// 如果对象需要定义很多方法，那么就要定义很多个全局函数，于是这个自定义的引用类型就丝毫没有封装性可言了。
// 这些问题可以通过使用原型模式来解决。


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