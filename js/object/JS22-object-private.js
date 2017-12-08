// In JavaScript all properties of an object are automatically public. 
// Public means that they can be accessed outside the class.

// Private Variables
// can only be directly accessed from within the class.
// Accessing Private Variables
// An object's private variables can only be accessed by public methods that are part of that same object.

// Private Methods
// Methods can also be private within a class and inaccessible outside of the class. 
// Access a private method
// is similar to accessing a private variable. You must create a public method for the class that returns the private method.
// 在一个class中，定义内部变量，从外部无法直接获取；但是可以在class中定义一个全局method，去拿到内部变量的值，然后在外部通过调用这个method去获得内部变量的值。

// using constructor notation
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    // private variable
    var bankBalance = 888;
    // access a private variable
    this.getBalance = function (password) {
        if (password === 1234) return bankBalance;
        else return 'Wrong password!';
    }

    var address = 'Beijing';
    // private method  
    var getAddress = function () {
        return address;
    }
    // access a private method
    this.askAddress = function () {
        // This means that it returns the method itself and NOT the result of calling that method. So you should NOT have parentheses.
        return getAddress;
    }
}

var rabbit = new Person('caroline', 'zhao', 25);
console.log(rabbit.firstName);
console.log(rabbit.lastName);
console.log(rabbit.bankBalance); //undefined
console.log(rabbit.getBalance()); //888
// console.log(rabbit.getAddress(); //error

// Because askAddress returns a method, we need to call it to make it any use. () - () - string
var getAddressMethod = rabbit.askAddress();
console.log(getAddressMethod); //function
var myAddress = getAddressMethod();
console.log(myAddress);
console.log('\n');


// =================================

function studentReport(math, english, chemistry) {
    this.math = math;
    var mathLevel = 4.0;
    this.english = english;
    var englishLevel = 4.0;
    this.chemistry = chemistry;
    var chemistryLevel = 3.5;
    this.totalGrade = function () {
        return (this.math + this.english + this.chemistry);
    }
    this.GPA = function () {
        return (mathLevel + englishLevel + chemistryLevel) / 3;
    }
}

var myStudentReport = new studentReport(100, 95, 88);
for (var key in myStudentReport) {
    if (typeof myStudentReport[key] !== 'function') {
        console.log('My ' + key + ' grade is: ' + myStudentReport[key]);
    }
}

var myTotalGrade = myStudentReport.totalGrade();
var myGPA = myStudentReport.GPA();

console.log('My total grade is: ' + myTotalGrade);
console.log('My GPA is: ' + myGPA);
