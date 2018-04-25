// 6.2.3 原型模式 (续)

// overwritten prototype
// -> 表示指针
// 先原型，再实例 OR 先实例，再修改原型 => 实例->旧原型<->构造函数
// 先重写原型，再实例 => 实例->新原型，脱离了构造函数；构造函数->新原型
// 先实例，再重写原型 => 实例->旧原型->构造函数；构造函数->新原型

// ====== 更简单的原型语法 ======
function Person() {}
// 用对象字面量重写原型对象
Person.prototype = {
    name: 'rabbit',
    age: 25,
    job: 'developer',
    sayJob: function () {
        console.log(this.job)
    }
}
// 与原写法不同的是：constructor 属性不再指向 Person 了。
// 每创建一个函数，就会同时创建它的 prototype 对象，这个对象也会自动获得 constructor 属性。
// 这种语法本质上完全重写了默认的 prototype 对象，因此 constructor 属性也就变成了新对象的 constructor 属性 (指向 Object 构造函数)，不再指向 Person 函数。
console.log('不再指向构造函数: ', Person.prototype.constructor) // function Object() {}

console.log(Person.prototype);
// 这个既可以指【新原型】，也可以指【原构造函数的 prototype 属性】
// => 构造函数中的 prototype 属性指向了新的原型

var human1 = new Person();
human1.sayJob();
// 实例调与构造函数的关系
// instanceof 操作符还能返回正确的结果 (因为字面上调用了？)，但通过 constructor 已经无法确定对象的类型了。
// 注意：实例的指针仅指向原型，与构造函数没有关系，constructor 的失效是因为重写了原型。
console.log(human1 instanceof Person, human1 instanceof Object); // true true
console.log(human1.constructor === Person, human1.constructor === Object); // false true
// 虽然实例调用了旧的构造函数，但是获得了指向新原型的指针 <= 构造函数中的 prototype 属性指向了新的原型
console.log(Object.getPrototypeOf(human1) === Person.prototype) // true


// 如果需要，可以手动设置 constructor 为原构造函数。
// 但这会导致它的 [[Enumerable]] 特性被设置为 true。
Person.prototype = {
    constructor: Person,
    name: 'rabbit',
    age: 25,
    job: 'developer',
    sayJob: function () {
        console.log(this.job)
    }
}
console.log('设置指向构造函数: ', Person.prototype.constructor) // function Person() {}
var keys = Object.keys(Person.prototype); // 返回可枚举属性
console.log(keys); // 包括 constructor
// 重写原型后，设置 constructor，再创建的实例，可以找到构造函数。
var human2 = new Person();
console.log(human2.constructor === Person, human2.constructor === Object); // true false
console.log('')


// ====== 原型的动态性 ======
// 由于在原型中查找值的过程是一次搜索，因此对原型对象所做的任何修改都能够立即从实例上反映出来，即使是先创建了实例后修改原型也是如此。
function Fruit() {}
var cherry = new Fruit();
// 注意！先创建了实例之后，只能以这样的形式修改原型。
Fruit.prototype.sayHi = function () {
    console.log('Hi')
}
cherry.sayHi();
// 先创建实例后修改原型可以生效的原因可以归结为实例与原型之间的松散连接关系。
// 调用 cherry.sayHi() 时，首先会在实例中搜索名为 sayHi 的属性，如果没找到，继续搜索原型。
// 实例与原型之间的连接是一个指针，而非一个副本，因此就可以在原型中找到新的 sayHi 属性。

// 如果以这样的形式，则重写了原型，切断了与实例的联系。见图 6-3
// Fruit.prototype = {
//     sayHi: function () {
//         console.log('Hi')
//     }
// }
// console.log(cherry instanceof Fruit) // ReferenceError

// 调用构造函数时会为实例添加一个指向最初原型的 [[Prototype]] 指针。
// 如果重写了原型，则失去了实例指向它的指针 (因为实例仍指向旧原型)；
// 但是构造函数会失去与旧原型之间的联系 (prototype 指向了新原型)。
console.log('')


// ====== 原生对象的原型 ======
// 原型模式的重要性不仅体现在创建自定义类型方面，所有原生的引用类型也都是用这种模式创建的。
// 所有原生引用类型 (Object、Array、String，等等) 都在其构造函数的原型上定义了方法。
console.log(Array.prototype.sort);
console.log(String.prototype.substring);
// 通过原生对象的原型，不仅可以取得所有默认方法的引用，而且也可以定义新方法 (但不建议用)。
console.log('')


// ====== 原型对象的问题 ======
// 原型中所有属性是被实例共享的。
// 这种共享对于函数非常合适；
// 对于那些包含基本值的属性也说得过去，通过在实例上添加一个同名属性，可以隐藏原型中的对应属性。
// 然而，对于包含【引用类型值】的属性来说，问题就比较突出了。
function Sport() {}
Sport.prototype = {
    constructor: Sport,
    type: 'football',
    number: 11,
    position: ['striker', 'midfielder', 'fullback'],
    sayType: function () {
        console.log(this.type)
    }
}

var sport1 = new Sport();
var sport2 = new Sport();

// 两个实例指向同一个数组，修改一个，另一个也会反映出来
console.log(sport1.position === sport2.position);
sport1.position.push('goalkeeper');
console.log(sport2.position);

// 因此很少单独使用原型模式，而是和构造函数模式结合使用。