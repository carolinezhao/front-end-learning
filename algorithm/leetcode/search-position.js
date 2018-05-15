// Given a sorted array and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.
// You may assume no duplicates in the array.

var array = [1, 3, 5, 6, 9, 10, 12, 20],
    target = 18;

// 方法1: 顺序查找
var searchInsert1 = function (nums, target) {
    var len = nums.length;
    if (target < nums[0]) {
        return 0;
    }
    if (target > nums[len - 1]) {
        return len;
    }
    for (var i = 0; i < len; i++) {
        if (nums[i] === target) {
            return i;
        }
        if (nums[i] < target && target < nums[i + 1]) {
            return i + 1;
        }
    }
};
console.log(searchInsert1(array, target));
console.log('');

// 方法2: 二分查找
var searchInsert2 = function (nums, target) {
    var len = nums.length;
    if (target < nums[0]) {
        return 0;
    }
    if (target > nums[len - 1]) {
        return len;
    }
    var left = 0,
        right = len - 1,
        mid, element;
    while (right >= left) {
        mid = Math.floor((left + right) / 2);
        element = nums[mid];
        console.log(left, mid, right);
        
        if (element > target) {
            right = mid - 1;
        } else if (element < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return left;
}
console.log(searchInsert2(array, target));