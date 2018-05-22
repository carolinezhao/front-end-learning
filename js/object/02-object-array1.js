// 以下案例中共同使用的 constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// array 中的元素可以是 object
var bear = new Person('Bear', 27);
var newArray = [
    [1, 2, bear],
    [true, false],
    ['Bear']
];
for (var i = 0; i < newArray.length; i++) {
    console.log(newArray[i]);
}
// object 中的 value 可以是 array
var stuff = ['Bear', 'Rabbit'];
var test = new Object();
test.array = stuff;
console.log(test.array);


// ============= Arrays of Objects =============
// 定义数组 方式是固定的 = new Array();
var family = new Array();
// 数组中的元素定义为 object
family[0] = new Person('Bear', 27);
family[1] = new Person('Rabbit', 25);
family[2] = new Person('Mother', 51);
family[3] = new Person('Father', 55);

// loop through an array of objects and access properties or methods
// 读取数组中的元素——object，获得各个属性的值
for (var i = 0; i < family.length; i++) {
    console.log(family[i].name);
}

// ============= Passing Objects into Functions =============
// use objects as parameters for functions
// these functions can take advantage of the methods and properties that a certain object type provides
var ageDiff = function (person1, person2) {
    // 函数中使用的是object的age属性，所以传入函数的必须是object
    var diff = person1.age - person2.age;
    console.log(diff);
    return diff;
}

var caroline = new Person('Caroline', 25);
var madell = new Person('Madell', 31);

// must be careful not to pass anything but Person objects into ageDifference
ageDiff(caroline, madell);


var olderAge = function (person1, person2) {
    if (person1.age > person2.age) {
        return person1.age;
    } else {
        return person2.age;
    }
}

var older_age = olderAge(caroline, madell);
console.log(older_age);