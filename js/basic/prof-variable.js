// 文件内容
// js 高程 (本书为 ES5 之前的内容)
// 3.3 变量
// 4.1 基本类型值和引用类型值


// 3.3 变量 (as a review)
// JS 的变量是松散类型，即可以保存任何类型的数据。
// 因此变量仅仅是一个用于保存值的占位符。

// 使用 var 操作符 (var 是一个关键字)，后跟变量名 (即一个标识符)。
var message; // 未经过初始化的变量，会保存一个特殊的值 undefined
var msg = "hi"; // 可以修改变量值同时修改值的类型，但不推荐。

// 用 var 操作符定义的变量将成为定义该变量的作用域中的局部变量。
// 如果在函数中使用 var 定义一个变量，那么这个变量在函数退出后就会被销毁。
function test() {
    var greeting = 'hello';
}
// console.log(greeting); // ReferenceError: greeting is not defined

// 可以使用一条语句定义多个变量，用逗号分隔。
var language = 'JavaScript',
    popular = true,
    number = 1;



// 数据类型
// 5 种简单数据类型 (基本数据类型)：Undefined、Null、Boolean、Number 和 String。
// 1 种复杂数据类型：Object。



// 4.1 基本类型值和引用类型值 (从操作变量的角度分)
// JS 变量，在特定时间保存特定值的一个名字。变量的值及其数据类型可以在脚本的生命周期内改变。

// 基本类型值 primitive value
// 5种基本数据类型：undefined, null, boolean, number, string. (小写比较合适，与构造形式区分)
// 按值访问，可以操作保存在变量中实际的值。

// 引用类型值 reference value
// 引用类型的值是保存在内存中的对象。
// JS 不允许直接访问内存中的位置，也就是说不能直接操作对象的内存空间。
// 当复制保存着对象的某个变量时，操作的是【对象的引用】
// 在为对象添加属性时，操作的是【实际的对象】
// （图灵社区对原书的补充）


// 4.1.1 动态的属性
// 引用类型值：可以添加、改变和删除其属性和方法。
// 基本类型值：不能添加属性。


// 4.1.2 复制变量值 Copying Values
// 见 know-variable.js


// ？？？
// =========== 4.1.3 传递参数 Argument Passing ===========
// 可以认为函数的参数是局部变量。
// 函数的参数都是按值传递的。
// 函数外的值复制给函数内的参数 = 复制变量值
// 访问变量有按值和按引用两种方式，而参数只能按值传递。？？？

// 向参数传递基本类型的值时，被传递的值会被复制给一个局部变量 (即命名参数，arguments 对象中的一个元素)。
// 向参数传递引用类型的值时，会把这个值在内存中的地址复制给一个局部变量，因此这个局部变量的变化会反映在函数的外部。

// 基本类型值：按值传递，按值访问
function addTen(num) {
    num += 10
    return num
}

var count = 20
var result = addTen(count)
console.log(count, result)
// 过程：
// 调用函数时变量 count 作为参数被传递给函数。
// 数值 20 被复制给参数 num 以便在 addTen() 中使用。
// 在函数内部，参数 num 的值被加上了 10，但这一变化不会影响函数外部的 count 变量。


// 引用类型值：按值传递，按引用访问 ？？？
function setName(obj) {
    obj.name = 'Caroline'
}

var person = new Object()
person.name = "Rabbit"
setName(person)
console.log(person.name) // Caroline
// 过程：
// 创建一个对象并保存在变量 person 中。
// 这个变量被传递到 setName() 函数中之后被复制给 obj。
// 在函数内部，obj 和 person 引用的是同一个对象。即使这个变量是按值传递的，obj 也会按引用来访问同一个对象。
// 当在函数内部为 obj 添加 name 属性后，函数外部的 person 也将有所反映；因为 person 指向的对象在堆内存中只有一个，而且是全局对象。


function setLocation(obj) {
    obj.location = "Beijing"
    obj = new Object()
    obj.location = "Shanghai"
}
// 即使在函数内部修改了参数的值，但原始的引用仍然保持未变。
// 当在函数内部重写 obj 时，这个变量引用的就是一个局部对象了。而这个局部对象会在函数执行完毕后立即被销毁。

var position = new Object()
setLocation(position)
console.log(position.location) // Beijing
console.log('')


// =========== 4.1.4 检测类型 ===========
// (包括 3.4.1 typeof 操作符的内容)

var s = 'hello'
var b = true
var i = 10
var u
// var un
var n = null
var o = new Object()

function Person(name) {
    this.name = name
}
var f = (num1, num2) => num1 + num2
var a = [1, 2, 3]
var r = /\W+/g

// typeof 是问句。用于检测基本类型。
// instanceof 是判断句。用于检测引用类型。

// typeof 操作符的操作数可以是数值字面量，也可以是变量。返回值是表示类型的【字符串】。
console.log(typeof 'hello') // 类型是 "string"
console.log(typeof typeof 'hello') // 返回的 "string" 是一个字符串

// 可以准确判断 string, boolean, number (NaN 也属于 number)
// 但是对于未初始化和未声明变量，都会返回 undefined
console.log(typeof s, typeof b, typeof i, typeof NaN, typeof u, typeof un)

// typeof 无法区分 null 和 object
// 本书观点：因为特殊值 null 被认为是一个空的对象引用。
// from 你不知道的js：这是语言本身的 bug，二进制前三位都为 0 会被判断为 object，null 的二进制表示全为 0.
console.log(typeof n, typeof o) // object, object

// 虽然函数也属于对象，不是一种数据类型，但是由于其具有一些特殊性，typeof 检测函数时，返回"function"。
// 检测数组，返回 object
console.log(typeof Person, typeof f, typeof a)

// 对正则表达式，Chrome 返回"function"，Firefox 返回"object"
console.log(typeof r) // node 返回 object


// variable instanceof constructor
// 在检测一个引用类型值和 Object 构造函数时，instanceof 操作符始终会返回 true
console.log(Person instanceof Object)
console.log(f instanceof Object)
console.log(f instanceof Function)
console.log(a instanceof Object)
console.log(a instanceof Array)
// instanceof 检测基本类型，始终会返回 false
console.log(n instanceof Object)