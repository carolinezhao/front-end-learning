// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You may assume no duplicates in the array.

var array = [1, 3, 5, 6],
    target = 7;

// 方法1
var searchInsert = function (nums, target) {
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
console.log(searchInsert(array, target));

// 方法2: 二分查找