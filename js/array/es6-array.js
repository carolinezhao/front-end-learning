// 创建数组

// 为了避免使用 Array 构造函数。
// Array.of()
let arr1 = Array.of(2)
console.log(arr1.length, arr1[0]);
let arr2 = Array.of('2')
console.log(arr2.length, arr2[0]);


// 将类数组对象转换为真实数组。
// 方法1 利用 for 循环，将每个元素添加到数组中。
// 方法2 使用原生的 slice 方法：Array.prototype.slice.call(arrayLike) (将执行时的 this 值设置为类数组对象)

// 方法3 Array.from()
// 也通过 this 确定返回数组的类型。
// 参数1 可迭代对象或类数组对象 (nodeList, arguments, string, etc.)
function doSomething() {
    let argsArr = Array.from(arguments);
    console.log(Array.isArray(arguments), Array.isArray(argsArr));
}
doSomething(1, 2, 3);

let set = new Set([1, 2, 3, 1])
let arr3 = Array.from(set)
console.log(Array.isArray(set), Array.isArray(arr3), arr3);

let str = 'ES6'
console.log(Array.from(str));

// 参数2 (optional) 映射函数，进一步转化数组
function translate1() {
    return Array.from(arguments, (value) => value + 1);
}
let arr4 = translate1(6, 7, 8);
console.log(arr4);

console.log(Array.from(str, (value) => value.toLowerCase()));

let iter = {
    * [Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
}

let arr5 = Array.from(iter, (value) => ++value)
console.log(arr5);

// 参数3 (optional) 映射函数的 this 值
let helper = {
    diff: 2,
    add(value) {
        return value * this.diff
    }
}

function translate2() {
    return Array.from(arguments, helper.add, helper);
}

let arr6 = translate2(2, 3, 4)
console.log(arr6);
console.log('');



// ES5
// indexOf() 和 lastIndexOf() 查找与【某个值】匹配的元素
// 局限：每次只能查找一个特定值。

// ES6
// find() 和 findIndex() 根据【某个条件】查找匹配的元素
// 都接受两个参数：回调函数，用于指定回调函数中 this 的值 (可选)。
// 传入函数的参数：数组中的元素 item，元素索引 index，数组本身 array。
// 给定值满足标准时返回 true，此时停止搜索剩余部分。
// 区别：find 返回查找的值，findIndex 返回值的索引 (没找到返回 -1)。
var numbers = [12, 5, 66, 82, 73, 29, 66, 1]
var findResult1 = numbers.find(function (item, index, array) {
    return (item === 66)
})
console.log(findResult1)
var findResult2 = numbers.find(item => item > 70)
console.log(findResult2)
var findIndexResult = numbers.findIndex(item => item > 70)
console.log(findIndexResult)
console.log('')



// 以下两种方法起源于定型数组，为了保持方法一致性才添加到常规数组中。

// fill() 和 copyWithin() 都可以同时改变数组中的多个元素。
// fill() 将数组元素赋值为一个指定的值，copyWithin() 从数组中复制元素的值。
// 特点：改写原数组 (也是返回值)，不改变数组长度。

// fill() 
// 用指定的值填充一至多个数组元素。
// 当传入一个值时，fill() 会用这个值重写数组中的所有值。
// 如果只想改变某一部分，传入后两个参数：开始位置，结束位置 (不包含)。
let values = [1, 2, 3, 4]
values.fill(1, 2) // 从索引2开始填充元素
console.log(values)
values.fill(0, 1, 3) // 从位置1开始填充，不包括位置3的元素
console.log(values)
values.fill(6) // 只传入一个值，则重写所有值
console.log(values)
console.log('')

// copyWithin()
// 参数1：开始填充的位置；
// 参数2：开始复制的位置 (持续到没有更多可复制的值)，默认为 0；
// 参数3：停止复制的位置 (不包含)。
let figure1 = [1, 2, 3, 4, 5, 6, 7, 8]
figure1.copyWithin(3, 0) // 从位置0开始复制，粘贴到位置3
console.log(figure1)
let figure2 = [1, 2, 3, 4, 5, 6, 7, 8]
figure2.copyWithin(3, 0, 1)
console.log(figure2) // 在位置1停止复制，因此只复制了位置0的值
figure2.copyWithin(5)
console.log(figure2)



// ES7
// includes()
// 参数1：目标文本。
// 参数2(可选)：开始搜索的位置。
// 返回值是 true/false
let nums = [1, 3, 5, NaN]
console.log(nums.includes(3));
console.log(nums.includes(1, 1));

// 差异：使用 includes() 可以找到 NaN；而 indexOf() 中严格使用 === 比较，认为不等于。
console.log(NaN === NaN); // false
console.log(nums.includes(NaN)); // true
console.log(nums.indexOf(NaN)); // -1