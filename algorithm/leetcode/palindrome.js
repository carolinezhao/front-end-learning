// Determine whether an integer is a palindrome. 
// An integer is a palindrome when it reads the same backward as forward.
// Coud you solve it without converting the integer to a string?

var num = 17871;
// 没有 -0

// 解法1 runtime: 280ms
var isPalindrome1 = function (x) {
    var string = x.toString().split('').reverse().join('');
    var numReverse = parseInt(string);
    return numReverse === x;
};

console.log(isPalindrome1(num));
console.log('')


// 解法2 (没解出来)
var isPalindrome2 = function (x) {
    if (x < 0) {
        return false;
    }
    var back1 = x % 10;
    var front1 = x;
    var count = 0;
    while (front1 >= 10) {
        count++;
        front1 = parseInt(front1 / 10);
    }
    console.log(count, front1, back1); // 数字位数 = count + 1
    if (front1 !== back1) {
        return false;
    } else {
        // ...
    }
};


// 解法3 (参考了答案的思路) runtime: 240ms
// Since we divided the number by 10, and multiplied the reversed number by 10, when the original number is less than the reversed number, it means we've processed half of the number digits.
var isPalindrome3 = function (x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    var numReverse = 0;
    while (x > numReverse) {
        numReverse = numReverse * 10 + x % 10;
        x = parseInt(x / 10);
        console.log(numReverse, x);
    }
    // When the length is an odd number, we can get rid of the middle digit by revertedNumber/10.
    return x === numReverse || x === parseInt(numReverse / 10);
}

console.log(isPalindrome3(num));