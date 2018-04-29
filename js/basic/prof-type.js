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
// 内容：整数；浮点数；数值范围；NaN；数值转换

// 整数
// 支持十进制，八进制 (第一位必须是 0)，十六进制 (前两位必须是 0x)
let num1 = 070; // 八进制 56
let num2 = 0x1f; // 十六进制 31
// 进行算术计算时，所有进制表示的数值都会被转换为十进制。


// 浮点数 floating-point values
// 数值中必须包含一个小数点，且小数点后必须至少有一位数字。
// 由于保存浮点数值需要的内存空间是保存整数值的两倍，因此 js 会尽可能将浮点数值转换为整数值。
// 小数点后没有数字或为 0，都会被解析为整数。
let float1 = 10.0;
console.log(float1);
// e 表示法/科学计数法，10 的指数次幂
let float2 = 3.125e6;
let float3 = 5e-12;
console.log(float2, float3);
// 浮点数值计算会产生舍入误差，因此永远【不要】测试某个特定的浮点数值。
console.log(0.1 + 0.2 == 0.3); // false
console.log('')


// 数值范围 range of values
console.log(Number.MIN_VALUE); // 最小数值
console.log(Number.MAX_VALUE); // 最大数值
// 如果计算结果得到了一个超出数值范围的值，会被自动转换成特殊的 Infinity 值 (正/负)。
// 如果某次计算返回了正或负的 Infinity 值，将无法继续参与下一次的计算。

// isFinite() 用于判断一个数值是不是有穷的，如果在数值范围内，返回 true。
console.log(isFinite(2e8), 2e8);
console.log(isFinite(Number.NEGATIVE_INFINITY), Number.NEGATIVE_INFINITY); // false
console.log('')


// NaN (Not a Number)
// 即非数值，用于表示一个本来要返回数值的操作数未返回数值的情况 (避免抛出错误)。
console.log(0 / 0); // NaN
console.log(3 / 0); // Infinity

// 任何涉及 NaN 的操作 (例如 NaN/10) 都会返回 NaN；
// NaN 与任何值都不相等，包括 NaN 本身。

// isNaN() 用于判断参数是否 “不是数值”
// 尝试将参数转换为数值，如果可以，返回 false；如果不能转换 (如 非数字string 和 NaN)，返回 true。
console.log(isNaN(10), isNaN('10'), isNaN(true)); // 都是 false
console.log(isNaN(NaN), isNaN('hello')); // 都是true
// 虽然“不是数值”，但是用 typeof 操作符返回的是 number
console.log(typeof NaN); // number

// isNaN() 也适用于对象。
// 首先调用对象的 valueOf() 方法，确定该方法返回的值是否可以转换为数值。
// 如果不能，则基于这个返回值再调用 toString() 方法，再测试返回值。
console.log('')


// 数值转换 number conversions
// Number() 转型函数，可以用于任何数据类型。
// parseInt() 和 parseFloat() 专门用于把字符串转换成数值。

let array1 = [true, false, 8.11, null, undefined, '012', '04.27', '0xf', 'node', '123node', ''];
console.log('Number() 的转型结果：')
array1.forEach(function (para) {
    console.log(`${para} to`, Number(para));
});
// null, 空字符串 -> 0; 
// undefined, string() -> NaN;
// 一元加操作符 (3.5.1 节将介绍) 的操作与 Number() 函数相同。

// parseInt() 判断字符串是否符合数值模式。
// 会忽略字符串前面的空格，直至找到第一个非空格字符。
// 如果第一个是数字字符，继续解析第二个，直到遇到了非数字字符。
// 如果第一个不是数字字符或者负号，或空字符串 -> NaN
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
console.log('');


// ====== 3.4.6 String 类型 ======
// 字符串用 "" 或 '' 表示。

// 字符字面量
// 转义序列：特殊的字符字面量，非打印字符。以"\"开头。也作为字符来解析。
let text1 = "He said, \"hey.\"";
let text2 = 'This is the letter sigma: \u03a3.'; // 6个字符长的转义序列表示一个字符。
console.log(text1, text1.length);
console.log(text2, text2.length);

// 字符串的特点
// 字符串一旦创建，它们的值就不能变。
// 改变变量保存的字符串的步骤：首先创建一个新字符串；然后在字符串中填充"Java"和"Script"；最后销毁原来的字符串"Java"和字符串"Script"。这个过程是在后台发生的。
let language = 'Java';
language = language + 'Script';
console.log(language);

// 转换为字符串
// 方法1：toString() 方法 (第5章讨论特点)。

// 数值、布尔值、对象和字符串值都有 toString() 方法。
// 字符串的 toString() 方法返回字符串的一个副本。
// null 和 undefined 没有这个方法 (TypeError)。

// 对于数值，该方法可以接受一个参数：输出数值的基数。
// 默认以十进制格式返回数值的字符串表示。通过传递基数，可以输出以二进制、八进制、十六进制等格式。

console.log('\n执行 toString() 的结果')
let array3 = [11, 070, true, '070', 'frontend'];
array3.forEach(function (para) {
    console.log(para.toString());
    if (typeof para === 'number') {
        console.log(para.toString(2), para.toString(16));
    }
})

// 方法2：转型函数 String()
// 在不知道要转换的值是不是 null 或 undefined 的情况下使用。将任何类型的值转换为字符串。
// 如果值有 toString() 方法，则调用该方法 (没有参数) 并返回相应的结果。
// 如果是 null，则返回"null"；如果是 undefined，则返回"undefined"。
console.log('\n执行 String() 的结果')
array3.push(null, undefined);
array3.forEach(function (para) {
    console.log(String(para));
})

// 要把某个值转换为字符串，可以使用加号操作符把它与一个字符串 ("") 加在一起。
let num3 = 123,
    num4 = true,
    num3Str = num3 + 'bear',
    num4Str = num4 + 'earth';
console.log(num3Str, num4Str);


// ====== 3.4.7 Object 类型 ======
// to review: Object 的每个实例都具有的属性和方法 (整合到 object 相关文件中)