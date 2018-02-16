// 替代 indexOf() 和 lastIndexOf()
// 局限：每次只能查找一个特定值。

// ES6
// find() 和 findIndex() 根据某个条件查找匹配的元素
// fill() 和 copyWithin() 查找与某个值匹配的元素


// find() 和 findIndex()
// 都接受两个参数：回调函数，用于指定回调函数中 this 的值 (可选)。
// 传入函数的参数：数组中的元素 item，元素索引 index，数组本身 array。
// 给定值满足标准时返回 true，此时停止搜索剩余部分。
// 区别：find 返回查找的值，findIndex 返回值的索引。
var numbers = [12, 5, 66, 82, 73, 29, 66, 1]
var findResult1 = numbers.find(function(item, index, array) {
    return (item === 66)
})
console.log(findResult1)
var findResult2 = numbers.find(item => item > 70)
console.log(findResult2)
var findIndexResult2 = numbers.findIndex(item => item > 70)
console.log(findIndexResult2)


// fill() 和 copyWithin()
