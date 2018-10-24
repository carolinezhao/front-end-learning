// https://github.com/forrany/Web-Project/blob/master/%E4%BA%8C%E3%80%81JavaScript%E6%8E%92%E5%9D%91%E6%8C%87%E5%8D%97(%E4%BA%8C).md

let arr1 = 'john'.split('')
let arr2 = arr1.reverse()
let arr3 = 'jones'.split('')
arr2.push(arr3)

console.log(arr1);
console.log(arr2);

console.log('last: ' + arr1.slice(-1));
console.log(typeof ('' + [2, 3]));

/* 知识点
- reverse() 方法改变原数组；

- 数组是引用类型，按引用传递；

- arr1.push(arr2) arr2 作为 arr1 的最后一项；
  arr1.concat(arr2) 基于 arr1 和 arr2 的所有项创建新数组；

- slice(a) 不改变原数组，返回值是满足要求的数组项；
  参数 a 如果为负数，则根据 lengh + a 确定位置。

- '' + [] 结果是 string
*/


// https://github.com/forrany/Web-Project/blob/master/%E4%B8%80%E3%80%81%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%26%E9%94%99%E9%A2%98%E6%8C%87%E5%8D%97.md

var arr = [1, 2, 3];
arr[10] = 9;
let result = arr.filter((item) => {
  return item === undefined
})

console.log(result); // []
console.log(arr);
console.log(2 in arr, 3 in arr, 10 in arr); // true, false, true

/* 知识点
- 当数组中都是 undefined 时，数组就是空，或者说 [empty x 7] === []

- 迭代方法都不改变原数组。

- property in object 检查对象属性，对于数组检查的是索引。
*/


// https://juejin.im/post/5b94d8965188255c5a0cdc02

let result1 = ["1", "2", "3"].map(parseInt);
console.log(result1); // [1, NaN, NaN]

console.log(parseInt('010', 0)); // 10
console.log(parseInt('010', 2)); // 2
console.log(parseInt('3', 2)); // NaN

let result2 = ["1", "2", "3"].map(item => parseInt(item, 10));
console.log(result2);

/* 知识点
不指定传入的参数，完整的表示为：
array.map((item, index, array) => {
  return parseInt(item, index);
})

parseInt 参数一为要转换的字符串；参数二为转换时使用的基数 (即多少进制)。
如果参数二省略或者为 0，则按照十进制转换。
*/

let result3 = [3, 2, 1].reduce(Math.pow);
console.log(result3); // 9

/* 知识点
不指定传入的参数，完整的表示为：
array.reduce((prev, curr, index, array) => {
  return Math.pow(prev, curr);
})

Math.pow(基数，指数)

[].reduce(Math.pow); 数组为空，会报错。
*/


// 数组乱序
function arrRandom(arr) {
  return arr.sort(item => 0.5 - Math.random())
}

console.log(arrRandom([1, 0, null, '']));