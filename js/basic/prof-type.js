// 3.4 数据类型 data types
// 5 种简单数据类型 (基本数据类型)：Undefined、Null、Boolean、Number 和 String。
// 1 种复杂数据类型：Object。

// 3.4.1 typeof 操作符
// (合并到 prof-variable.js 中的 4.1.4)


// ====== 3.4.2 Undefined 类型 ======
// 声明变量但是没有初始化时，变量的值就是 undefined
// 引入这个值是为了正式区分空对象指针与未经初始化的变量。一般没有必要特意设置。
let message;
console.log(message);
// console.log(messageMore); // ReferenceError: messageMore is not defined

// 但是对未初始化和未声明的变量执行 typeof 操作符都会返回 undefined 值
console.log(typeof message, typeof messageMore);


// ====== 3.4.3 Null 类型 ======
// 逻辑角度，null 值表示一个空对象指针。
// 这也正是使用 typeof 操作符检测 null 值时会返回"object"的原因 (书中观点)。
let pen = null;
console.log(pen, typeof null);

// 如果变量准备在将来用于保存对象，最好将该其初始化为 null 而不是其他值。
// 将来只要检查 null 值就可以知道相应的变量是否已经保存了一个对象的引用。
if (pen != null) {
    // 对 pen 对象执行某些操作。
}

// undefined 值派生自 null 值。
console.log(undefined == null); // true 操作符会转换操作数
console.log(undefined === null); // false
console.log('');


// ====== 3.4.4 Boolean 类型 ======
// 两个字面值：true，false (case sensitive)
// js 中所有类型的值都有与这两个 Boolean 值等价的值。
// 要将一个值转换为其对应的 Boolean 值，可以调用转型函数 Boolean()。
let lang = 'js';
console.log(Boolean(lang)); // true

// 各类型数据遵循一定的转换规则 (见书中)
// ！这对理解流控制语句 (如if语句) 自动执行相应的 Boolean 转换非常重要。


// ====== 3.4.5 Number 类型 ======
// 整数
// 支持十进制，八进制 (第一位必须是 0)，十六进制 (前两位必须是 0x)
let num1 = 070; // 八进制 56
let num2 = 0x1f; // 十六进制 31
// 进行算术计算时，所有进制表示的数值都会被转换为十进制。


// 浮点数


// 数值范围


// NaN
// 即非数值 (Not a Number)，用于表示一个本来要返回数值的操作数未返回数值的情况 (避免抛出错误)。
console.log(0 / 0); // NaN
console.log(3 / 0); // Infinity

// 任何涉及 NaN 的操作 (例如 NaN/10) 都会返回 NaN；
// NaN 与任何值都不相等，包括 NaN 本身。

// isNaN() 用于判断参数是否 “不是数值”：
// 尝试将参数转换为数值，如果可以，返回 false；如果不能转换 (如 非数字string 和 NaN)，返回 true。
console.log(isNaN(10), isNaN('10'), isNaN(true)); // 都是 false
console.log(isNaN(NaN), isNaN('hello')); // 都是true

// isNaN() 也适用于对象。
// 首先调用对象的 valueOf() 方法，确定该方法返回的值是否可以转换为数值。
// 如果不能，则基于这个返回值再调用 toString() 方法，再测试返回值。
console.log('')


// 数值转换 number conversions
// Number() 转型函数，可以用于任何数据类型。
// parseInt() 和 parseFloat() 专门用于把字符串转换成数值。

let array1 = [true, false, 8.11, null, undefined, '012', '04.27', '0xf', 'node', ''];
console.log('Number() 的转型结果：')
array1.forEach(function (para) {
    console.log(`${para} to`, Number(para));
});
// 一元加操作符 (3.5.1 节将介绍) 的操作与 Number() 函数相同。

// parseInt() 判断字符串是否符合数值模式。
// 会忽略字符串前面的空格，直至找到第一个非空格字符。
// 如果第一个是数字字符，继续解析第二个，直到遇到了非数字字符。
// 如果第一个不是数字字符或者负号，或空字符串，返回 NaN。
let array2 = ['8.11', '8.11node', ' 08.11', '-8.11', '04.27', '070.0', '1.2.3', '', 'nodev8.11', 'chrome']
console.log('\nparseInt() 的转型结果：')
array2.forEach(function (para) {
    console.log(`${para} to`, parseInt(para, 10));
});

// 对于包含二进制，八进制和十六进制的字符串，可以提供第二个参数：转换时使用的基数 (即多少进制)。
console.log(parseInt('10', 2));
console.log(parseInt('70', 8));
console.log(parseInt('070'));
console.log(parseInt('AF', 16));
console.log(parseInt('AF'));
// 为了避免错误的解析，应明确指定基数，包括十进制。

// parseFloat() 类似，区别是：
// 字符串中的第一个小数点是有效的，第二个小数点及后面的字符串会被忽略。
// 如果没有小数点或者小数点后都是零，会返回整数。
// 始终都会忽略前导的零，因此只能解析十进制值，不提供第二个参数。
console.log('\nparseFloat() 的转型结果：')
array2.forEach(function (para) {
    console.log(`${para} to`, parseFloat(para));
});


// ====== 3.4.6 String 类型 ======
// 用 "" 或 '' 表示。
// 字符字面量
// 字符串的特点
// 转换为字符串


// ====== 3.4.7 Object 类型 ======
// to review: Object 的每个实例都具有的属性和方法 (整合到 object 相关文件中)