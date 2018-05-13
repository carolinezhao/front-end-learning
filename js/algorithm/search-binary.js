// 二分查找 binary search
// 相关练习见 leetcode/search-position.js

// 设置的临界条件很重要

var array = [1, 3, 6, 8, 10, 13],
    target = 13;

function binarysort(array, target) {
    var left = 0,
        right = array.length - 1;
    while (left <= right) { // 等号容易被忽略
        var mid = Math.floor((left + right) / 2);
        console.log(left, mid, right);

        if (array[mid] === target) {
            return mid;
        }
        if (array[mid] > target) {
            right = mid - 1;
        }
        if (array[mid] < target) {
            left = mid + 1;
        }
    }
    return 'Not found!';
}

console.log(binarysort(array, target));