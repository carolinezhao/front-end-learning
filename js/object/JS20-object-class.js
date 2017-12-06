// class
// A class is a template used to create objects

// prototype
// JavaScript automatically defines the prototype for class with a constructor. 
// For example, Dog constructor ensures that the Dog prototype has a breed property. 
// Remember, the Dog prototype keeps track of what Dog has, doesn't have, can, or can't do.

// add a method to a class such that all members of the class can use it
// extend the prototype
// className.prototype.newMethod =  function() {};
// 为什么不在constructor里添加？？？也可以，只是提供了更多可能。“动态语言”by Bear

// inheritance


// =======================================
function Dog(breed) {
    this.breed = breed;
};

var buddy = new Dog('Golden Retriever');
// we have now changed the prototype for the class Dog. 
// This immediately teaches allDogs the new method.
Dog.prototype.bark = function () {
    console.log('Woof');
};
buddy.bark();

var snoopy = new Dog('Beagle');
snoopy.bark();

// =======================================

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
};

// describe the method to access a private variable from outside the class:
// Define a public method that returns the value of a private variable. 意义是？

// the function will work on any Person, because name is a valid property for that class.
var printName = function (p) {
    console.log(p.name);
}

Person.prototype.intro = function () {
    console.log(this.name + ' works as a ' + this.job);
}

var rabbit = new Person('caroline', 25, 'developer');
printName(rabbit);
rabbit.intro();

var bear = new Person('bear', 27, 'engineer');
bear.intro();

console.log('\n');
// =======================================
// original Animal class and sayName method
function Animal(name, legs) {
    this.name = name;
    this.legs = legs;
}
Animal.prototype.sayName = function () {
    console.log('Hi my name is ' + this.name);
}

// Penguin class
function Penguin(name) {
    this.name = name;
    this.legs = 2;
}

// inheritance lets us see and use properties and methods from another class.
// To say that Penguin inherits from Animal, we need to set Penguin's prototype to be Animal.
// Set the Penguin class's prototype to a new instance of Animal by adding this line after you make the constructor:
Penguin.prototype = new Animal();
// This means that Penguin inherits properties and methods from Animal.

// var variable = new Object('property's value); 注意variable和Object的名称不能完全一样
var penguin = new Penguin('Dunedain');

penguin.sayName();
console.log('\n');

function Emperor(name) {
    this.name = name;
}

// inherit from Penguin
Emperor.prototype = new Penguin();

var emperor = new Emperor('Aragorn');
console.log(emperor); // 输出的结果是 Animal {name: 'Aragorn'}
for (key in emperor) {
    console.log(key);
}
console.log(emperor.legs);
