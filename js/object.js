// An object is a collection of properties, and a property is an association between a name (or key) and a value. 
// A property's value can be a function, in which case the property is known as a method.
// Objects are sometimes called associative arrays, since each property is associated with a string value that can be used to access it.

// access the properties of an object with a dot-notation
var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
myCar.color; // undefined, not null

// can also be accessed or set using a bracket notation
myCar['make'] = 'Ford';
myCar['model'] = 'Mustang';
myCar['year'] = 1969;

// object property name
// all keys in the square bracket notation are converted to String type
myObj.type = 'Dot syntax';
myObj['date created'] = 'String with space';
myObj[str] = 'String value';
myObj[rand] = 'Random Number';
myObj[obj] = 'Object';
myObj[''] = 'Even an empty string';

// access properties by using a string value that is stored in a variable
var propertyName = 'make';
myCar[propertyName] = 'Ford';

propertyName = 'model';
myCar[propertyName] = 'Mustang';


// Enumerate the properties of an object
// traverses all enumerable properties of an object and its prototype chain
for (variable in object) {}
// returns an array with all the own (not in the prototype chain) enumerable properties' names ("keys")
Object.keys(o)
// returns an array containing all own properties' names (enumerable or not) of an object o
Object.getOwnPropertyNames(o)


// Creating new objects
// Using object initializers
var obj = {
    property_1: value_1, // property_# may be an identifier...
    2: value_2, // or a number...
    // ...,
    'property n': value_n
}; // or a string

// 条件为true时，object被创建
if (cond) var x = {
    greeting: 'hi there'
};

// engine property 本身也是个 object
var myHonda = {
    color: 'red',
    wheels: 4,
    engine: {
        cylinders: 4,
        size: 2.2
    }
};

// Using a constructor function
// To define an object type, create a function for the object type that specifies its name, properties, and methods.
// Notice the use of this to assign values to the object's properties based on the values passed to the function.
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

var mycar = new Car('Eagle', 'Talon TSi', 1993);