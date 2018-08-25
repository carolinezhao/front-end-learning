// 类数组：一组通过数字索引的值。

// 2.2 字符串
let a = 'foo', // 字符串
    b = ['f', 'o', 'o']; // 数组
// 都有 length 属性，indexOf() 和 concat() 方法
console.log(a.length, b.length);
console.log(a.indexOf('o'), b.indexOf('o'));
let c = a.concat('bar'), // str str -> str
    d = b.concat(['b', 'a', 'r']), // arr arr -> 所有元素合并到一个 arr
    e = b.concat('bar'), // arr str -> str 整体作为 arr 的一项
    f = a.concat(['b', 'a', 'r']); // str arr -> str
console.log(c, d, e, f);

// 尽管有很多相似之处，but 字符串 !== 字符数组

// 字符串是不可变的，数组是可变的。
// 字符串的成员函数不会改变其原始值，而是创建并返回一个新的字符串。
// 数组的成员函数是在其原始值上操作。
a[1] = '0';
b[1] = '0';
console.log(a.charAt(1));
console.log(a, b);
f = a.toUpperCase();
b.push('!');
console.log(a, f, b);

// 许多数组函数处理字符串很方便，可以“借用”数组的非变更方法处理字符串。
let g = Array.prototype.join.call(a, '-');
let h = Array.prototype.map.call(a, function (v) {
    return v.toUpperCase() + '.';
}).join('');
console.log(g, h);

// 数组有一个字符串没有的可变更成员函数 reverse()，但是无法借用。
// 【常用】一个变通方法是先把字符串转为数组，处理后再转回字符串。
let j = a.split('').reverse().join(''); // 作用依次为：转为字符数组，反转数组中的字符，转为字符串
console.log(j);