/*=====================================================
Creating an object
Literal notation
* creates a single object;
* uses curly brackets { };
* default properties are defined within the brackets using property:value notation.

Constructor notation
* involves defining an object constructor;
* like defining a function, we use the function keyword;
* think of this constructor as a "template" from which you can create multiple objects;
* to create a new object from a constructor, we use the new keyword.
=====================================================*/


/*=====================================================
Literal notation
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

/*=====================================================
Constructor notation
function constructorName(parameter) {
    this.property = parameter;
    this.method=function() {
    };
};
var objectName = new constructorName(parameter);
objectName.method(); // 调用method
=====================================================*/

function Person(job, married) {
    this.job = job;
    this.married = married;
    this.speak = function () {
        console.log("Hi! I work as a " + this.job);
    }
}
var person1 = new Person('developer', false);
person1.speak();

// ====================================================
// Dot notation
console.log(person1.job);

// Bracket notation
console.log(person1['job']);
var propName = 'job';
console.log(person1[propName]);

