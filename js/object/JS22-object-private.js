// In JavaScript all properties of an object are automatically public. 
// Public means that they can be accessed outside the class.

// Private Variables
// Private variables are pieces of information you do not want to publicly share, and they can only be directly accessed from within the class.
// Accessing Private Variables
// We can define a public method that returns the value of a private variable.

function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    // Private Variables    
    var bankBalance = 888;
    // Accessing Private Variables
    this.getBalance = function() {
        return bankBalance;
    }
}
// 在一个class中，定义内部变量，从外部无法直接获取；但是可以在class中定义一个全局method，去拿到内部变量的值，然后在外部通过调用这个method去获得内部变量的值。

var rabbit = new Person('caroline', 'zhao', 25);
console.log(rabbit.firstName);
console.log(rabbit.lastName);
console.log(rabbit.bankBalance); //undefined
console.log(rabbit.getBalance()); //888



