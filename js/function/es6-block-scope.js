// ====== var 声明及变量提升 (Hoisting) 机制 ======
// 在函数作用域或全局作用域中用 var 声明变量，无论位置在哪，都会被当成在当前作用域顶部声明的变量。
// 见与 let 对比的例子。 


// ====== 块级声明 ======
// 用于声明在指定块的作用域之外无法访问的变量。
// 块级作用域 (也叫词法作用域) 存在于：函数内部；块中，即{}之间的区域。

// 用 let 声明变量不会被提升，通常放在封闭代码块的顶部。
// 对比：用 var 声明的变量会被提升，无论 condition 是否成立，变量都会被创建。
function getValue(condition) {
    // var color <-- 预编译阶段：变量声明提升至顶部，初始化操作保留在原处。
    if (condition) {
        var color = 'blue'
        let city = 'beijing' // 执行流离开 if 块，city 变量立刻被销毁。
    } else {
        console.log(color) // undefined (由于变量被提升至顶部，可访问，但未初始化)
        // console.log(city) // ReferenceError (如果 condition 为 false，永远不会声明并初始化 city)   
    }
    console.log(color) // undefined
    // console.log(city) // ReferenceError
}
getValue(false)

// let 禁止重复声明，但可以在内嵌作用域中声明同名变量 (遮蔽全局变量)。
var count = 30
// let count = 40 // SyntaxError
var count = 50
console.log(count)

// 用 const 声明常量，不可修改，且必须初始化。
// const maxItems // SyntaxError
const maxItems = 20

// const 声明不允许修改绑定，但允许修改值。
// 用 const 声明对象，可以修改对象的属性值。
const person = {
    name: 'Rabbit'
}

person.name = 'Bear'
console.log(person)

// const 与 let
// 相同：声明的都是块级标识符，执行到块外立即被销毁，不会被提升，禁止重复声明。
// 不同：const 不可以被再赋值。但如果是对象，则对象中的值可以修改。

// 临时死区 TDZ = Temporal Dead Zone
// JS 引擎扫描代码发现变量声明时：
// 对于 var，提升至作用域顶部；
// 对于 let 或 const，将声明放到 TDZ。
// 访问 TDZ 中的变量会触发错误。只有执行过变量声明语句后，变量才会从 TDZ 中移除，然后才能正常访问。
var condition = true
if (condition) {
    // console.log(typeof value) // ReferenceError
    let value = 'white'
}

// 在 let 声明的作用域外访问该变量使用 typeof (相对安全的操作) 不会报错。
console.log(typeof value) // undefined
if (condition) {
    let value = 'green'
}
console.log('')


// ====== 循环中的块作用域绑定 ======
// 目的：把计数器变量限制在循环内部。
var items = []
for (let i = 0; i < 10; i++) {
    items[i] = i
}
console.log(items)
// console.log(i) // ReferenceError，用 let 声明的 i 只存在于 for 循环中。若用 var 声明，则可以访问。

// 循环中的函数
// 用 var 声明
var funcs = []
for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}
console.log(funcs)

funcs.forEach(function (func) {
    func()
})
console.log('')
// 循环里的每次迭代同时共享着变量 i，循环内部的函数全都保留了对相同变量的引用。

// 通过 IIFE 解决：为接受的每个计数器变量 i 创建副本并存储为 value。
var funcs1 = []
for (var i = 0; i < 10; i++) {
    funcs1.push((function (value) {
        return function () {
            console.log(value)
        }
    })(i))
}

funcs1.forEach(function (func) {
    func()
})
console.log('')

// ES6 用 let 声明解决：每次迭代循环都创建一个新变量 i，并将其初始化为 i 的当前值。
// 注意：let 声明在循环内部的行为是标准中专门定义的，不一定与 let 的不提升特性相关。
var funcs2 = []
for (let i = 0; i < 10; i++) {
    funcs2.push(function () {
        console.log(i)
    })
}

funcs2.forEach(function (func) {
    func()
})
console.log('')

// for-in 和 for-of 循环同理
var funcs3 = [],
    object = {
        a: true,
        b: true,
        c: false
    }

for (let key in object) {
    funcs3.push(function () {
        console.log(key)
    })
}

funcs3.forEach(function (func) {
    func()
})

// for-of（补例子）

// 用 const 声明
// 在普通 for 循环中，可以用 const 初始化变量，但若更改常量就会抛出错误。
// 在 for-in 和 for-of 循环中，使用 const 的行为和使用 let 基本一致，唯一的区别是不能在循环中改变 key 的值。
// 可以用的原因是，每次迭代不会修改已有绑定，而是创建一个新绑定。


// ====== 全局块作用域绑定 ======


// ====== 块级绑定最佳实践的进化 ======