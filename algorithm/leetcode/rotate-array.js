/*
Given an array, rotate the array to the right by k steps, where k is non-negative.
Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space? 
in-place, no return
*/

let nums = [1, 2, 3, 4, 5, 6, 7],
    k = 3;

var rotate = function (nums, k) {
    let i = 1;
    while (i <= k) {
        let item = nums.pop();
        nums.unshift(item);
        i++;
    }
};

rotate(nums, k);
console.log(nums);


var rotate1 = function (nums, k) {
    let len = nums.length;
    if (k >= len) { // 第一次忽略了 k > length 的情况
        k %= len;
    }
    console.log(k);
    let end = len - 1;
    let arr = nums.slice(-k);
    let j = end - k; // 临界位置及以前
    for (let i = end; i >= 0; i--) {
        if (i < k) {
            nums[i] = arr[i];
        } else {
            nums[i] = nums[j];
            j--;
        }
    }
    console.log(nums);
};

rotate1([0, 2, 1], 9);


// 不足：运行时间过长
var rotate2 = function (nums, k) {
    let end = nums.length - 1;
    let j = 1;
    while (j <= k) {
        let item = nums[end];
        for (let i = end; i >= 0; i--) {
            if (i === 0) {
                nums[i] = item;
            } else {
                nums[i] = nums[i - 1];
            }
        }
        j++;
    }
    console.log(nums);
};

rotate2([0, 2, 1], 9);


// 参考方法1
var rotate3 = function (nums, k) {
    var last = nums.slice(nums.length - k)
    nums.splice(nums.length - k, k)
    nums.unshift(...last)
    console.log(nums);
};

rotate3([0, 2, 1], 9);


// 参考方法2
var rotate4 = function (nums, k) {
    const steps = k % nums.length;
    nums.reverse();
    reverseArray(nums, 0, steps - 1);
    reverseArray(nums, steps, nums.length - 1);
};

var reverseArray = function (nums, start, end) {
    while (start < end) {
        temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

rotate4([0, 2, 1], 9);