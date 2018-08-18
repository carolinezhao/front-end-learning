// 识别整数：根据存储方式判断
console.log(Number.isInteger(25));
// 只给数字添加小数点不会让整数变为浮点数。看起来像浮点数，却存储为整数。
console.log(Number.isInteger(25.0)); // true
console.log(Number.isInteger(25.1)); // false

// Number.parseInt 将字符串或数字转换为整数；
// Number.parseFloat 将字符串或数字转换为浮点数；
// 分别与 parseInt 和 parseFloat 功能一致。
// 推荐使用 Number. 的方式进行调用。
let num1 = Number.parseInt(3.22);
let num2 = Number.parseFloat('21.33');
let num3 = Number.parseFloat(25.0); // 无法得到浮点数
[num1, num2, num3].forEach(item => console.log(item, Number.isInteger(item)))
console.log('');


// 指数运算符 The Exponentiation Operator
// 已有方法
let expo1 = Math.pow(2, 4); // 2 的 3 次幂
let expo2 = Math.pow(-3, 3);

// ES7 求幂运算符 **
// 左操作数是基数，右操作数是指数
let expo3 = 2 ** 4;
// 运算顺序优先
let expo4 = 2 * 5 ** 2
console.log(expo1, expo2, expo3, expo4);