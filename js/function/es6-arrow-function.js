// 箭头函数与传统函数的差异：
// 不能通过 new 关键字调用，没有原型 -- 设计初衷是“即用即弃”；
// 不改变 this 绑定；
// 不支持 arguments 对象；
// (未完)

/* ============== 箭头函数语法 ==============*/
// 传入1个参数
// let reflect = function(value) {
//     return value
// }
// 相当于：
let reflect = value => value;
console.log(reflect(3));

// 传入2个参数，类似传统参数加 ()
let sum = (num1, num2) => num1 + num2;
console.log(sum(6, 8));

// 没有参数，也要有 ()
let getName = () => 'caroline';
console.log(getName());

// 函数体不加 {} 默认为 return，如果加了 {}，要返回的内容必须有 return。

// 函数体有多个表达式，用 {} 包裹
let diff = (num1, num2) => {
    if (num1 > num2) {
        return num1 - num2
    } else {
        return num2 - num1
    }
};
console.log(diff(6, 10));

// 空函数
let doNothing = () => {};

// 返回对象字面量，{} 外面还要包裹 ()，与函数体区分
let getTempItem = id => ({
    id: id,
    name: 'Temp'
});
console.log(getTempItem(5));
console.log('');


/* ============== 创建立即执行函数表达式 IIFE ==============*/
let person = ((name)=>{
    return {
        getName() {
            return name;
        }
    }
})('caroline');

console.log(person.getName());

// todo：与传统的 IIFE 写法对比


/* ============== 箭头函数没有 this 绑定 ==============*/
// 必须通过查找作用域链决定 this 的值。
// todo：书中的示例不太懂


/* ============== 箭头函数和数组 ==============*/
// var result = values.sort(function (a, b) {
//     return a - b
// })
// 相当于：
var values = [36, 12, 49];
var result = values.sort((a, b) => a - b);
console.log(result);

// sort(), map(), reduce() 这些可以接受回调函数的数组方法，都可以通过箭头函数语法简化编码过程。