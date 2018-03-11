// ====== var 声明及变量提升 (Hoisting) 机制 ======


// ====== 块级声明 ======
// 用 let 声明变量不会被提升，通常放在封闭代码块的顶部。
function getValue(condition) {
    if (condition) {
        var color = 'blue'
        let city = 'beijing'
    } else {
        console.log(color)
        // console.log(city) // ReferenceError        
    }
    console.log(color)
    // console.log(city) // ReferenceError
}
getValue(false)

// let 禁止重复声明
var count = 30
// let count = 40 // SyntaxError
var count = 50
console.log(count)

// 用 const 声明常量，不可修改，且必须初始化。
// const maxItems // SyntaxError
const maxItems = 20
console.log('')


// ====== 循环中的块作用域绑定 ======
var items = []
for (let i = 0; i < 10; i++) {
    items[i] = i
}
console.log(items)
// console.log(i) // ReferenceError，用 let 声明的 i 只存在于 for 循环中。

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

// 通过 IIFE 解决
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

// 用 let 声明解决
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


// ====== 全局块作用域绑定 ======


// ====== 块级绑定最佳实践的进化 ======