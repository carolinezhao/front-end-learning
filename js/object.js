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

// use the bracket notation with for...in to iterate over all the enumerable properties of an object
function showProps(obj, objName) {
    var result = '';
    // for (key in data), for(value of data)
    for (var i in obj) {
        // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain ???
        if (obj.hasOwnProperty(i)) {
            console.log(objName)
            result += objName + '.' + i + ' = ' + obj[i] + '\n';
        }
    }
    return result;
}

// run in object-test-1.js
showProps(myCar, "myCar")
// return the following:
myCar.make = Ford
myCar.model = Mustang
myCar.year = 1969