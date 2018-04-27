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


