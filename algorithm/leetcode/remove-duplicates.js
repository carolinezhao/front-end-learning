/*
Remove Duplicates from Sorted Array
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Given nums = [0,0,1,1,1,2,2,3,3,4],
Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
It doesn't matter what values are set beyond the returned length.
*/

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
let nums = [-1, 0, 0, 0, 0, 3, 3, 5]

var removeDuplicates0 = function (nums) {
    let i = 0
    while (i < nums.length) {
        if (nums[i] === nums[i + 1]) {
            // nums.splice(nums[i], 1) // wrong
            nums.splice(i, 1) // first para should be index, not value
            console.log(nums);
        } else {
            i++
        }
    }
    return nums.length
};


var removeDuplicates1 = function (nums) {
    let j = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[j]) {
            j++
            if (i !== j) {
                [nums[j], nums[i]] = [nums[i], nums[j]]
            }
        }
        console.log(nums);
    }
    return j + 1
};

console.log(removeDuplicates1(nums));


// 参考答案
// 赋值比交换效率高。
var removeDuplicates2 = function (nums) {
    let len = nums.length;
    if (len === 0 || len === 1) return nums;

    let i = 0;
    for (let j = 0; j < len; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
        console.log(nums);
    }
    return i + 1;
};

console.log(removeDuplicates2([-1, 0, 0, 0, 0, 3, 3, 5]));