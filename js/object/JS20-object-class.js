// class
// prototype
// JavaScript automatically defines the prototype for class with a constructor. 
// For example, Dog constructor ensures that the Dog prototype has a breed property. 
// Remember, the Dog prototype keeps track of what Dog has, doesn't have, can, or can't do.

// add a method to a class such that all members of the class can use it
// extend the prototype
// className.prototype.newMethod =  function() {};
// 为什么不在constructor里添加？？？也可以，只是提供了更多可能。“动态语言”by Bear

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