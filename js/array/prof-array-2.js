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
var item = colors.pop()
console.log(item)
console.log(colors.length)
// 以上代码中的数组可以看成（使用这两种方法的原理）是栈。