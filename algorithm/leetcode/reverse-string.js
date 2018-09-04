// Write a function that takes a string as input and returns the string reversed.

let string = "A man, a plan, a canal: Panama"

// 使用数组方法
var reverseString1 = function (s) {
    return s.split('').reverse().join('')
};
console.log(reverseString1(string));

// 操作字符
var reverseString2 = function (s) {
    let newString = ''
    for (let i = s.length - 1; i >= 0; i--) {
        newString += s[i]
    }
    return newString
};
console.log(reverseString2(string));