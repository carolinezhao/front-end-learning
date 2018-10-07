// includes(), startsWith(), endsWith()
// 参数1：目标文本。
// 参数2(可选)：开始搜索的位置。
// 返回值是 true/false

// 对 endsWith() 来说，永远从末尾开始检查；
// 如果有第二个参数，则从字符串长度减去索引值的位置开始检查 (末尾为0开始计起)。

let msg = 'front-end learning';
let len = msg.length;
console.log(len);
console.log(msg.includes('-'));
console.log(msg.includes('f', 10));
console.log(msg.startsWith('front'));
console.log(msg.startsWith('l', 10));
console.log(msg.endsWith('ing'));

console.log(msg.endsWith('r', 14)); // true
console.log(msg.endsWith(' ', 10)); // true


// repeat()
// 参数为数字，表示字符串重复次数，返回新字符串。
console.log('x'.repeat(3));
console.log('abcde'.repeat(2));
// 这个方法在操作文本时很有用，比如在代码格式化工具中创建缩进级别。
// 缩进指定数量的空格
let indent = ' '.repeat(4);
// 跟踪缩进等级
let indentLevel = 1;
console.log(indent + 'start');
// 增加缩进
let newIndent = indent.repeat(++indentLevel);
console.log(newIndent + 'start');