// 5.2.3 栈方法 Stack Methods
// 栈是一种 LIFO (Last-In-First-Out，后进先出) 的数据结构，也就是最新添加的项最早被移除。
// 栈中项的插入 (叫做推入) 和移除 (叫做弹出)，只发生在一个位置——栈的顶部。

// 数组可以表现得就像栈一样。使用 push() 和 pop() 方法实现类似栈的行为。
// push() 可以接收任意数量的参数，把它们逐个添加到数组末尾，返回修改后数组的长度。
// pop() 从数组末尾移除最后一项，减少数组的 length 值，返回移除的项。
var colors = new Array()
var length1 = colors.push('white','green','orange')
console.log(length1)
length1 = colors.push('red')
console.log(length1)
// 注意！push() 返回的数组长度不会被 pop() 影响。
var item1 = colors.pop()
console.log(item1)
console.log(colors.length)
// 以上代码中的数组可以看成（使用这两种方法的原理）是栈。
console.log('')


// 5.2.4 队列方法 Queue Methods
// 队列数据结构的访问规则是 FIFO (First-In-First-Out，先进先出)。在列表的末端添加项，从列表的前端移除项。

// shift() 移除数组中的第一个项并返回该项，同时将数组长度减 1。
// 结合使用 push() 和 shift()，可以像使用队列一样使用数组。
var fruits = []
var length2 = fruits.push('strawberry','cherry','pitaya')
console.log(length2)
var item2 = fruits.shift()
console.log(item2)
console.log(fruits.length)

// unshift() 与 shift() 的用途相反: 在数组前端添加任意个项并返回新数组的长度。
// 同时使用 unshift() 和 pop() 方法，从相反的方向来模拟队列，即在数组的前端添加项，从末端移除项。
var length3 = fruits.unshift('apple','pear')
console.log(length3)
console.log(fruits)
var item3 = fruits.pop()
console.log(item3)
console.log(fruits.length)


// 5.2.5 重排序方法 Reordering Methods