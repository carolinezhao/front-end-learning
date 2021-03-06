/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

// wrong answer
// 第一轮 (i=0) 后数组中的元素可能变动了，如果继续 (i=1) 就会错过已经由原来 (i=1) 挪到现在 (i=0) 的元素。即连着两个 0 时，第二个会被错过。
// var moveZeroes = function (nums) {
//     for (let index in nums) {
//         if (nums[index] === 0) {
//             nums.splice(index, 1);
//             nums.push(0);
//         }
//     }
// };


// 思路：遇 0 删除，末尾补 0
// 如果 j 位置的元素命中，则下轮 j - 1
// 缺点：用了性能很差的 splice 
var moveZeroes = function (nums) {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        // console.log(i, j, nums[j]);
        if (nums[j] === 0) {
            nums.splice(j, 1)
            nums.push(0)
        } else {
            j++
        }
    }
};

let array = [0, 0, 1, 2, 3, 0, 0, 5]
moveZeroes(array);
console.log(array);


// 参考答案
// 思路：从数组最开始依次赋值为非 0 的元素，再把后边的值改为 0。
var moveZeroes1 = function (nums) {
    var count = 0;
    for (var i = 0; i < nums.length; ++i) {
        if (nums[i] !== 0) {
            nums[count] = nums[i];
            count += 1;
        }
    }
    console.log(nums, count);
    while (count < nums.length) {
        nums[count] = 0;
        count += 1;
    }
};

let array1 = [0, 0, 1, 2, 3, 0, 0, 5]
moveZeroes1(array1);
console.log(array1);