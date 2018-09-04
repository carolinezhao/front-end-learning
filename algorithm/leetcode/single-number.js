/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.
Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
要求时间复杂度 O(n)；不用额外内存 O(1)
*/

let nums = [1, 0, 4, 2, 4, 1, 0]

// 思路：元素依次放入新数组，如果该值已存在，则在新数组中删除该值，只留下单独的元素。
// 缺点：splice 导致运算时间过长；新数组空间复杂度 O(n)；相当于用了两重循环 O(n^2)？
var singleNumber = function (nums) {
    let array = [];
    for (let i = 0; i < nums.length; i++) {
        // if (!array.includes(nums[i])) { // includes 的时间复杂度也是 O(n) 吗？ indexOf 呢？
        if (array.indexOf(nums[i]) === -1) {
            array[i] = nums[i];
        } else {
            array.splice(array.indexOf(nums[i]), 1)
        }
    }
    return Number(array.join(''))
};

console.log(singleNumber(nums));


// 思路：使用 Set 得到去重数组，2*sum(set) - sum(array) = singleValue
// 时间复杂度 O(n)；空间复杂度 O(n)
var singleNumber1 = function (nums) {
    let setArr = [...new Set(nums)]

    function sum(array) {
        return array.reduce((prev, next) => prev + next)
    }
    return 2 * sum(setArr) - sum(nums)
}

console.log(singleNumber1(nums));


// 用 hash table 存储和查询
// 时间复杂度 O(n)；空间复杂度 O(n)
var singleNumber2 = function (nums) {
    let table = {}
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in table) {
            table[nums[i]]--
        } else {
            table[nums[i]] = 1
        }
    }
    console.log(table);
    for (let key in table) {
        if (table[key] === 1) {
            return +key
        }
    }
}

console.log(singleNumber2(nums));


// 参考答案
// Bit Manipulation：使用按位异或 (XOR)
// 时间复杂度 O(n)；空间复杂度 O(1)
var singleNumber3 = function (nums) {
    res = 0;
    for (x of nums) {
        res = x ^ res
    }
    return res
}

console.log(singleNumber3(nums));