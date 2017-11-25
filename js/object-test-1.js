// ====================== example 1 ======================
var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
myCar.color; // undefined, not null

// use the bracket notation with for...in to iterate over all the enumerable properties of an object
function showProps(obj, objName) { // 前者是对象本身（object），后者是对象的名称（字符串）
  var result1 = '';
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) { //？？？
      result1 += objName + '.' + i + ' = ' + obj[i] + '\n';
    }
  }
  console.log(obj);
  console.log(objName);
  console.log(result1); // 没有赋值的 property 没有打印出来
  return result1;
}
showProps(myCar, "myCar");

// ====================== example 2 ======================
var obj = {
  a: 1,
  b: 2,
  c: 3
};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}
console.log('\n');

// ====================== example 3 ======================
var triangle = {
  a: 1,
  b: 2,
  c: 3
};

function ColoredTriangle() {
  this.color = 'red';
  this[''] = 'blue';
}
ColoredTriangle.prototype = triangle; // function.prototype = object ???

var obj = new ColoredTriangle();
obj.d = 'yellow';
console.log(ColoredTriangle);
console.log(obj);
console.log('\n');

for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) { // 不包括 prototype 中的
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}
console.log('\n');

for (const prop in obj) { // 所有
  console.log(`obj.${prop} = ${obj[prop]}`);
}
console.log('\n');


console.log(Object.keys(obj)); // 不打印 prototype 中的
console.log('\n');

console.log(Object.getOwnPropertyNames(obj)); // 不打印 prototype 中的
console.log('\n');


