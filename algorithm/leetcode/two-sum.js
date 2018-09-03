/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var array = [11, 3, 15, 2, 8, 7, 3],
    target = 9;

// The brute force approach: Time complexity O(n^2), Space complexity O(1)
var twoSum = function (nums, target) {
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            // console.log(nums[i], nums[j])
            if (nums[i] + nums[j] === target) {
                result.push(i, j);
                return result;
            }
        }
    }
};

console.log(twoSum(array, target));


// 参考答案
// Hash table: a more efficient way to check if the complement exists
// Time complexity O(n), Space complexity O(n)
var twoSum1 = function (nums, target) {
    let numIdxMap = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let complement = target - num;
        if (numIdxMap[complement] !== undefined) {
            return [i, numIdxMap[complement]];
        } else {
            numIdxMap[num] = i; // 原数组中的值作 key (自动变为 string)，索引作 value
            console.log(numIdxMap)
        }
    }
};

console.log(twoSum1(array, target));