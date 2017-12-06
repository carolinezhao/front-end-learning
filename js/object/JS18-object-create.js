// Literal notation
// var objectName = {
//     property1: 'value1',
//     property2: 'value2',
//     methodName: function () {}
// };
// objectName.property1;
// objectName.methodName();

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


// Constructor notation
// function constructorName(parameter) {
//     this.property = parameter;
//     this.method=function() {
//     };
// };
// var objectName = new constructorName(parameter);
// objectName.method(); // 调用method

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

