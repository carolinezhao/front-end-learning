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
for (let i = 0; i<10; i++) {
    items[i] = i
}
console.log(items)
// console.log(i) // ReferenceError

// 循环中的函数
var funcs = []
for (var i = 0; i<10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs.forEach(function(func) {
    func()
})


// ====== 全局块作用域绑定 ======


// ====== 块级绑定最佳实践的进化 ======