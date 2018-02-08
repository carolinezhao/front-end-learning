/* ============== 箭头函数语法 ==============*/
// 传入1个参数
// let reflect = function(value) {
//     return value
// }
// 相当于：
let reflect = value => value
console.log(reflect(3))

// 传入2个参数，类似传统参数加 ()
let sum = (num1, num2) => num1 + num2
console.log(sum(6, 8))

// 没有参数，也要有 ()
let getName = () => 'caroline'
console.log(getName())

// 函数体有多个表达式，用 {} 包裹
let diff = (num1, num2) => {
    if (num1 > num2) {
        return num1 - num2
    } else {
        return num2 - num1
    }
}
console.log(diff(6, 10))

// 空函数
let doNothing = () => {}

// 返回对象字面量，{} 外面还要包裹 ()，与函数体区分
let getTempItem = id => ({
    id: id,
    name: 'Temp'
})
console.log(getTempItem(5))
console.log('')

/* ============== 创建立即执行函数表达式 ==============*/



/* ============== 箭头函数和数组 ==============*/
// var result = values.sort(function (a, b) {
//     return a - b
// })
// 相当于：
var values = [36, 12, 49]
var result = values.sort((a, b) => a - b)
console.log(result)

// sort(), map(), reduce() 这些可以接受回调函数的数组方法，都可以通过箭头函数语法简化编码过程。