// str.replace(regexp|substr, newSubStr|function)
// 在字符串中执行查找匹配的 String，并且使用替换字符串替换掉匹配到的子字符串。

// 使用括号的子字符串匹配
// (x) 用于匹配 'x' 并且记住匹配项。括号被称为捕获括号。

// 正则表达式的匹配环节，使用 \1、\2、\n
// 正则表达式的替换环节，使用 $1、$2、$n

let str1 = "foo bar foo bar";
let str2 = 'foo bar foo1 bar1';
// '(foo)' 和 '(bar)' 匹配并记住字符串中前两个单词。\1 和 \2 匹配字符串的后两个单词。
// \1 和 \2 指的是记住的单词？
let re1 = /(foo) (bar) \1 \2/; // 必须有空格，和字符串格式一致才能识别
let newstr1 = str1.replace(re1, '$2 $1');
let newstr2 = str2.replace(re1, '$2 $1');
console.log(newstr1);
console.log(newstr2);

// 匹配并记住空格前后的字符
let re = /(\w+)\s(\w+)/;
let str = 'Jon Snow';
let newstr = str.replace(re, '$2, $1');
console.log(newstr);
console.log('');

// learn more
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace