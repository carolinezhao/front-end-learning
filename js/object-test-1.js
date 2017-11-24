// example 1
var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
myCar.color; // undefined, not null

function showProps(obj, objName) {
    var result = '';
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            console.log(obj)           
            console.log(objName)
            result += objName + '.' + i + ' = ' + obj[i] + '\n';
        }
    }
    console.log(result);              
    return result;
}
showProps(myCar, "myCar");

// example 2
var obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
console.log(`obj.${prop} = ${obj[prop]}`);
}

// example 3
var triangle = {a: 1, b: 2, c: 3};
function ColoredTriangle() {
  this.color = 'red';
}
ColoredTriangle.prototype = triangle;
console.log(ColoredTriangle);
console.log(triangle);


var obj = new ColoredTriangle();
for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  } 
}