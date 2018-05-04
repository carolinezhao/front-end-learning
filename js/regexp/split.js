// str.split([separator[, limit]])
// 使用正则表达式或一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中。

// Removing spaces from a string
let names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";
let output = ["---------- Original String\n", names + "\n"];

// 匹配一个分号及紧接其前后所有可能出现的连续的不可见符号。
let pattern = /\s*;\s*/;
let nameList = names.split(pattern); // 去掉分号及其前后的所有空格后分割字符串
let nameList1 = names.split(';'); // 只去掉分号后分割字符串
console.log(nameList);
console.log(nameList1);

// 对比
let ptn = /\s*;\s*/g;
let list = pattern.exec(names);
console.log(list);
console.log('');


// learn more
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
    console.log('The separator is: "' + separator + '"');
    console.log(arrayOfStrings);
    console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
    console.log('');
}

var tempestString = 'Oh brave new world that has such people in it.';
var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';

var space = ' ';
var comma = ',';
var empty = '';

splitString(tempestString, space); // 在空格处分割字符串作为数组元素
splitString(tempestString); // 不分割字符串，直接放入数组；由于只有一个元素，所以 join 中的连接符不会出现
splitString(monthString, empty); // 分割每一个字符
splitString(monthString, comma); // 在逗号处分割