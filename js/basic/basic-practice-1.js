// https://juejin.im/post/5b4f4ff5e51d45195423c68c

(function () {
    var a = b = c = 5;
    // console.log(a); // 5
})()

console.log(c);
console.log(b);
console.log(window.b);
// console.log(a); // ReferenceError: a is not defined

/*
var a = (b = 5); var a 为函数的局部变量；b 为全局变量；值都为 5
*/


// 过滤假值
let array = [false, null, 0, '', undefined, NaN];

let filtered = array.filter(item => item);
console.log(filtered);

function bouncer(arr) {
    return arr.filter(Boolean);
}
console.log(bouncer(array));


// 输出数组中连续出现 1 的最大次数
let nums = [1, 0, 1, 1, 1, 0, 1, 1];
let count = 0;
let max = 0;

nums.forEach(item => {
    if (item) {
        count++;
    } else {
        count = 0;
    }
    if (count > max) {
        max = count
    }
})
console.log(max);