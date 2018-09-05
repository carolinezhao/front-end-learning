/*
Given an array nums and a value val, remove all instances of that value in-place and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Given nums = [0,1,2,2,3,0,4,2], val = 2,
Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.
Note that the order of those five elements can be arbitrary (任意的).
*/

let nums = [0, 1, 2, 2, 3, 0, 4, 2],
    val = 2;

// 不足：题目中允许留下的元素打乱顺序，没有用上这个条件。
var removeElement = function (nums, val) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j] = nums[i];
            j++;
        }
    }
    console.log(nums);
    return j;
};

console.log(removeElement(nums, val));


// 参考答案
var removeElement1 = function (nums, val) {
    let n = nums.length;
    let i = 0;
    while (i < n) {
        console.log(i, nums);
        if (nums[i] === val) {
            nums[i] = nums[n - 1];
            n--; // reduce array size by one
        } else {
            i++;
        }
    }
    return n;
};

console.log(removeElement1([0, 1, 2, 2, 3, 0, 4, 2], 2));