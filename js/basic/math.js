// 去掉小数
let num = 17860
let num1 = Math.round(num / 100), // 四舍五入
num2 = Math.floor(num / 100), // 直接舍去
num3 = parseInt(num / 100); // 直接舍去
console.log(num1, num2, num3);