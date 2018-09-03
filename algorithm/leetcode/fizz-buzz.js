/*
Write a program that outputs the string representation of numbers from 1 to n.
But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
*/

// 执行速度：unshift << push，应尽可能使用 push
var fizzBuzz = function (n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else {
            result.push(i.toString());
        }
    }
    return result;
};

console.log(fizzBuzz(15));


// 参考答案
var fizzBuzz1 = function (n) {
    var list = [];
    for (var k = 1; k <= n; k++) {
        var str = "";
        if (k % 3 == 0) str += "Fizz";
        if (k % 5 == 0) str += "Buzz";
        list.push(str || "" + k);
    }
    return list;
};

console.log(fizzBuzz1(16));