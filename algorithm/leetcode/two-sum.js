/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var array = [11, 3, 15, 2, 8, 7, 3],
    target = 9;

var twoSum = function (nums, target) {
    var result = [];    
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            console.log(nums[i], nums[j])
            if (nums[i] + nums[j] === target) {
                result.push(i, j);
                return result;
            }
        }
    }
};

console.log(twoSum(array, target));