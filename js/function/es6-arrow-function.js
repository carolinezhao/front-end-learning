// 箭头函数

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
console.log(diff(6,10))

// 空函数
let doNothing = () => {}

// 返回对象字面量，{} 外面还要包裹 ()，与函数体区分
let getTempItem = id => ({
    id: id,
    name: 'Temp'
})
console.log(getTempItem(5))
