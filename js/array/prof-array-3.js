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