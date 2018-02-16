// 5.2.6 操作方法 Manipulation Methods
// concat(), slice() 返回新数组，不会影响原始数组；
// splice() 返回被删除的元素组成的数组，影响原始数组。

// concat() 基于当前数组中的所有项创建一个新数组。
// 先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回【新构建的数组】。
// 参数可以是值，一个数组，多个数组。
var colors1 = ['white', 'green', 'orange']
var colors2 = colors1.concat('red', ['grown', 'black'], 'yellow')
console.log(colors1)
console.log(colors2)

// slice() 基于当前数组中的一项或多项创建一个【新数组】。
// 接受一或两个参数，即要返回项的起始和结束位置。splice(index1,index2)
// 一个参数，返回从起始位置到末尾的所有项。slice(a), newArray.length = oldArray.length - a
// 两个参数，返回起始和结束位置之间的项，但不包括结束位置的项。slice(a,b), newArray.length = b - a
var colors3 = colors1.slice(1)
var colors4 = colors2.slice(2, 5)
var colors5 = colors2.slice(4)
console.log(colors3)
console.log(colors4)
console.log(colors5)
// 如果参数中有一个负数，则用数组长度加上该数来确定相应的位置。
var colors6 = colors2.slice(-4, -1) // 相当于 slice(3,6)
console.log(colors6)
// 如果结束位置小于起始位置，则返回空数组。
var colors7 = colors2.slice(3, 1)
console.log(colors7)
console.log('')

// splice() 向数组的中部插入项。
// splice(index,num,'item1','item2', ...) 起始位置，要删除的个数，要添加的项
// 1）删除 只有前2个参数；
// 2）插入 num=0；
// 3）替换 全部参数
// splice() 始终都会返回一个数组，该数组中包含【从原始数组中删除的项】 (如果没有删除任何项，则返回一个空数组)。
var fruits = ['apple', 'cherry', 'strawberry', 'pear']
var removed1 = fruits.splice(1, 2)
// 此操作后，fruits 已经改变了
console.log(removed1, fruits)
var removed2 = fruits.splice(1, 0, 'avocado', 'melon')
console.log(removed2, fruits)
var removed3 = fruits.splice(0, 3, 'banana', 'orange')
console.log(removed3, fruits)
// 以上三次操作的作用结果是累积的
console.log('')



// 5.2.7 位置方法 Location Methods
// indexOf() 从数组的开头(位置0)开始向后查找。
// lastIndexOf() 从数组的末尾开始向前查找。
// 都接收两个参数：要查找的项 (必选) 和表示查找起点位置的索引 (可选)。
// 都返回要查找的项在数组中的位置，如果没找到则返回-1。
// 比较参数与数组中的每一项时，使用全等操作符===，即要求严格相等。
var numbers = [12, 5, 66, 82, 73, 29, 66, 1]
var index1 = numbers.indexOf(66)
var index2 = numbers.lastIndexOf(66) // 从末尾向前查找，遇到的第一个目标值在位置6
var index3 = numbers.indexOf(66, 4) // 从位置4向后查找，遇到的一个目标值在位置6
var index4 = numbers.lastIndexOf(66, 5) // 从位置5向前查找，遇到的第一个目标值在位置2
var index5 = numbers.indexOf(8)
console.log(index1, index2, index3, index4, index5)

var person = {
    name: 'Caroline'
}
var people1 = [{
    name: 'Bernie'
}, {
    name: 'Caroline'
}]
var people2 = [person]
var indexPerson1 = people1.indexOf(person)
console.log(indexPerson1) // -1
var indexPerson2 = people2.indexOf(person)
console.log(indexPerson2) // 0
// 查找的是 literal person（对象名称），而不是把它翻译为对象
console.log('')



// 5.2.8 迭代方法 Iterative Methods
// 都接收两个参数：要在每一项上运行的函数和运行该函数的作用域对象 (可选) ——影响 this 的值。
// 函数会接收三个参数：数组项的值，该项在数组中的位置和数组对象本身。

// 对数组中的每一项运行给定函数
// every() 如果该函数对【每一项】都返回 true，则返回 true。
// some() 如果该函数对【任一项】返回 true，则返回 true。
// --这两个方法都用于查询数组中的项是否满足某个条件。

// filter() 返回该函数【会返回 true 的项】组成的数组。
// --这个方法用于查询符合某些条件的所有数组项。

// map() 返回【每次函数调用的结果】组成的数组。
// --数组的每一项都是在原始数组中的对应项上运行传入函数的结果。
// --适合创建包含的项与另一个数组一一对应的数组。

// forEach() 没有返回值。
// --只是对数组中的每一项运行传入的函数。本质上与使用 for 循环迭代数组一样。

// ---以上方法都不会修改数组中的包含的值。

// 遇到不符合的项就返回 false
var figure = [1, 20, 16, 5, 9]
var everyResult = figure.every(function (item, index, array) {
    console.log(item) // 第1项不符合，就返回 false
    return (item > 10)
})
console.log(everyResult)
console.log('')
// 遇到符合的项就返回 true
var someResult = figure.some(function (item, index, array) {
    console.log(item, index) // 第2项符合，就返回 true
    return (item > 10)
})
console.log(someResult)
console.log('')
// 遍历所有项，符合的项组成数组返回
var filterResult = figure.filter(function (item, index, array) {
    console.log(item, index)
    return (item > 10)
})
console.log(filterResult)
console.log('')
// 遍历所有项，返回所有运行结果
var mapResult1 = figure.map(function (item, index, array) {
    console.log(item, index)
    return (item > 10)
})
console.log(mapResult1)
console.log('')
var mapResult2 = figure.map(function (item, index, array) {
    console.log(item, index)
    return (item * 2)
})
console.log(mapResult2)
console.log('')
// 运行函数，但是没有返回值
var arrayResult = []
var forEachResult = figure.forEach(function (item, index, array) {
    console.log(item, index)
    arrayResult[index] = item * 2
    return (item * 2)
})
console.log(arrayResult) // 证明函数运行
console.log(forEachResult) // 没有返回值
console.log('')



// 5.2.9 归并方法 Reduction Methods
// reduce() 从数组的第一项开始，逐个遍历到最后。
// reduceRight() 从数组的最后一项开始，向前遍历到第一项。
// 都接收两个参数：一个在每一项上调用的函数和作为归并基础的初始值 (可选)。
// 函数接收 4 个参数：前一个值、当前值、项的索引和数组对象。
// 这个函数返回的任何值都会作为第一个参数自动传给下一项。第一次迭代发生在数组的第二项上，因此第一个参数是数组的第一项，第二个参数就是数组的第二项。

// 使用 reduce() 求数组中所有值之和。
var values1 = [1, 3, 2, 6]
var sum1 = values1.reduce(function (prev, cur, index, array) {
    console.log(prev, cur)
    console.log(index, array)
    return prev + cur
})
console.log(sum1)
console.log('')
// reduceRight() 的作用类似，只不过方向相反。
var values2 = [1, 3, 2, 6]
var sum2 = values2.reduceRight(function (prev, cur, index, array) {
    console.log(prev, cur)
    return prev + cur
})
console.log(sum2)