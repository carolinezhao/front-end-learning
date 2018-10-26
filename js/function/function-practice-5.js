// https://xiaohuazheng.github.io/2017/10/01/javascript-quiz/

// 找出数字数组中最大的元素 (使用 Math.max 函数)
function outputMax(array) {
    if (Array.isArray(array) && array.length) {
        return Math.max(...array);
    }
    return null;
}

console.log(outputMax([5, 3, 1, 10, 6]));


// 实现 var a = (5).plus(3).minus(6); // 2
Number.prototype.plus = function (n) {
    console.log(this);
    return this + n;
};

Number.prototype.minus = function (n) {
    return this - n;
};

var a = (5).plus(3).minus(6);
console.log(a);


// 实现 var a = add(2)(3)(4); // 9
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

var b = add(2)(3)(4);
console.log(b);