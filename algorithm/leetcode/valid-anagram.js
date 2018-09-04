// Given two strings s and t , write a function to determine if t is an anagram of s.
// Note: You may assume the string contains only lowercase alphabets.

let s = "anagramm",
    t = "nagarama";

// 性能较差
// Assume that n is the length of s, sorting costs O(nlogn) and comparing two strings costs O(n). 
// Sorting time dominates and the overall time complexity is O(nlogn).

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    function sortString(string) {
        return string.split('').sort().join('');
    }
    return sortString(s) === sortString(t);
};

// console.log(isAnagram(s, t));


// 参考答案
// We could increment the counter for each letter in s and decrement the counter for each letter in t, then check if the counter reaches back to zero.
// Time complexity O(n)
// Although we do use extra space, the space complexity is O(1) because the table's size stays constant no matter how large n is. (26 letters)

var isAnagram1 = function (s, t) {
    if (s.length !== t.length) return false;
    let dict = {};

    // key 为字母，value 为个数
    for (let i = 0; i < s.length; i++) {
        if (s[i] in dict) {
            dict[s[i]] += 1;
        } else {
            dict[s[i]] = 1;
        }
    }

    // 减去个数
    for (let j = 0; j < t.length; j++) {
        if (t[j] in dict) {
            dict[t[j]] -= 1;
            if (dict[t[j]] < 0) { // t 中某字母个数多
                return false
            };
        } else {
            return false; // t 出现新字母
        }
    }

    // 和 dict[t[j]] < 0 部分的作用相同
    // for (letter in dict) {
    //     if (dict[letter] !== 0) return false; // s 中某字母个数多
    // }

    return true;
};

console.log(isAnagram1(s, t));