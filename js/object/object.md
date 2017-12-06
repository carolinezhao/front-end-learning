
### What Are Objects For?

Objects provide us with a way to represent real-world or virtual things. We can do this by storing information inside the object's properties.

### Create Objects

**Literal notation**

* creates a single object;
* uses curly brackets { };
* default properties are defined within the brackets using property:value notation.

**Constructor notation**

* involves defining an object constructor;
* like defining a function, we use the function keyword;
* think of this constructor as a "template" from which you can create multiple objects;
* to create a new object from a constructor, we use the new keyword.

### Customizing Constructors

- We can assign our objects properties through parameters we pass in when the object is created.
- We can give our objects methods automatically.

### Properties

Properties are like **variables** that belong to an object, and are used to hold pieces of information. 
Properties can be accessed (get the value of an object's property) in two ways:

* Dot notation, with `ObjectName.PropertyName`
* Bracket notation, with `ObjectName["PropertyName"] ` (don't forget the quotes!)
An advantage of this is that we can also use variables  whose values are property names.

		var Obj = {propertyName: value};
		var myProperty = 'propertyName';
		Obj[myProperty];
can be used in for/in loop to get all properties or values.

		for (key in object) {
		     console.log(object[key]);
		}

### Methods

Methods are like **functions** that are associated with a particular object.
They are especially helpful when you want to either:

* Update the object properties
* Calculate something based on an object's properties.

### Classes, Prototype, Inheritance
object-oriented programming, abbreviated OOP.
Classes are very important in OOP.
a class tells us helpful information about objects
you can think of an object as a particular instance of a class.

When you make a constructor, you are in fact defining a new class. 
A class can be thought of as a type, or a category of objects—kind of like how Number and String are types in JavaScript.
what keeps track of what a given class can or can't do? What a class has or doesn't have? That is the job of the prototype.





