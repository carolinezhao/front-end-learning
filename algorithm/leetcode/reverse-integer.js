/*
Given a 32-bit signed integer, reverse digits of an integer.
*/

var num = -8463847412;

var reverse = function (x) {
    var min = -Math.pow(2, 31),
        max = Math.pow(2, 31) - 1;
    var result;
    var string = x.toString().split('').reverse().join('');
    var len = string.length;
    if (string[len - 1] === '-') {
        result = -parseInt(string);
    } else {
        result = parseInt(string);
    }
    if (result >= min && result <= max) {
        return result;
    } else {
        return 0;
    }
}

console.log(reverse(num));