// 栈方法，队列方法，重排序方法都直接改变原数组。

// 5.2.3 栈方法 Stack Methods
// 栈是一种 LIFO (Last-In-First-Out，后进先出) 的数据结构，也就是最新添加的项最早被移除。
// 栈中项的插入 (叫做推入) 和移除 (叫做弹出)，只发生在一个位置——栈的顶部。

// 数组可以表现得就像栈一样。使用 push() 和 pop() 方法实现类似栈的行为。
// push() 可以接收任意数量的参数，把它们逐个添加到数组末尾，返回修改后数组的长度。
// pop() 从数组末尾移除最后一项，减少数组的 length 值，返回移除的项。
var colors = []
var length1 = colors.push('white', 'green', 'orange')
console.log(length1)
var item1 = colors.pop()
console.log(item1)
console.log(colors)
console.log('')


// 5.2.4 队列方法 Queue Methods
// 队列数据结构的访问规则是 FIFO (First-In-First-Out，先进先出)。在列表的末端添加项，从列表的前端移除项。

// shift() 移除数组中的第一个项并返回该项，同时将数组长度减 1。
// 结合使用 push() 和 shift()，可以像使用队列一样使用数组。
var fruits = []
var length2 = fruits.push('strawberry', 'cherry', 'pitaya')
console.log(length2)
var item2 = fruits.shift()
console.log(item2)
console.log(fruits.length)

// unshift() 与 shift() 的用途相反: 在数组前端添加任意个项并返回新数组的长度。
// 同时使用 unshift() 和 pop() 方法，从相反的方向来模拟队列，即在数组的前端添加项，从末端移除项。
var length3 = fruits.unshift('apple', 'pear')
console.log(length3)
console.log(fruits)
var item3 = fruits.pop()
console.log(item3)
console.log(fruits.length)
console.log('')


// 5.2.5 重排序方法 Reordering Methods
// reverse() 反转数组的顺序，返回【经过排序后的数组】
var values = [2, 5, 1, 3, 9]
values.reverse()
console.log(values)

// sort() 默认情况下升序排列，返回【经过排序后的数组】
// 调用每个数组项的 toString()，然后比较得到的字符串，以确定如何排序。
// 即使数组中的每一项都是数值，sort() 方法比较的也是字符串。
// 字符串之间比较的是对应位置字符的编码值 (3.5.6 关系操作符)

// 验证对 toString() 的默认调用
var Caroline = {
    type: 'rabbit',
    toString: () => {
        console.log('caroline to string');
        return 'caroline';
    }
}
var Bernie = {
    type: 'bear',
    toString: () => {
        console.log('bernie to string');
        return 'bear';
    }
}
var people = [Caroline, Bernie];
console.log(people.sort());
// 先对数组内的两项分别调用 toString；然后根据返回值排序并打印数组。

var months = ['Dec', 'april', 'june', 'May']
console.log(months.sort())
// 大写字母的编码值靠前。

var id = [56, 23, 7, 18, 0]
console.log(id.sort()) // [0,18,23,56,7]
// 比较的是字符串，因此 7 在最后。并不是理想的排序结果。

// sort() 方法可以接收一个比较函数作为参数
// array.sort([compareFunction])
// 返回值大于 0 时调换当前比对项的顺序，否则顺序不变。

// 一种常用的比较函数，即对于比较结果非数字的情况，需要返回一个数字值。
function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}
id.sort(compare)
console.log(id) // [0,7,18,23,56]

// 对于数值类型或者其 valueOf() 方法会返回数值类型的对象类型，可以使用更简便的方法。
// 返回 value1 - value2 升序；返回 value2 - value1 降序。
function compareNum(value1, value2) {
    console.log(value1, value2)
    return value1 - value2
}
console.log([56, 23, 7, 18, 0].sort(compareNum))

// 根据对象属性排列对象在数组中的位置
let objsArr = [{
    id: 3,
    name: 'rabbit'
}, {
    id: 1,
    name: 'caroline'
}, {
    id: 4,
    name: 'bernie'
}, {
    id: 2,
    name: 'bear'
}]

function compareObj(obj1, obj2) {
    return obj1.id - obj2.id
}
console.log(objsArr.sort(compareObj));

// 忽略大小写进行排序
function compareStr(a, b) {
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1 // 交换顺序
    } else if (a.toLowerCase() < b.toLowerCase()) {
        return -1
    } else {
        return 0
    }
}
console.log(['Dec', 'april', 'june', 'May'].sort(compareStr));