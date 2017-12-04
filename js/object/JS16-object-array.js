// ============= Arrays of Objects =============
// constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// make arrays of objects
// 定义数组
var family = new Array();
// 定义数组中的元素为 object
family[0] = new Person('Bear', 27);
family[1] = new Person('Rabbit', 25);
family[2] = new Person('Mother', 51);
family[3] = new Person('Father', 55);

// loop through an array of objects and access properties or methods
for (var i = 0; i < family.length; i++) {
    console.log(family[i].name);
}

// ============= Passing Objects into Functions =============
var ageDiff = function (person1, person2) {
    var diff = person1.age - person2.age;
    console.log(diff);
    return diff;
}

var caroline = new Person('Caroline', 25);
var madell = new Person('Madell', 31);

ageDiff(caroline, madell);