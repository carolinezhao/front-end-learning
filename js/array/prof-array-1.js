// 5.2 Array
// 数组：数据的有序列表，每一项可以保存任何类型的数据(与其他语言不同)，大小可以动态调整。

// 创建数组
// 1）Array 构造函数
var colors = new Array()
var people = new Array(5) // 包含5项
var food = new Array('Bread') // 包含1项
var cities = Array('BJ', 'SH', 'GZ') // new 可以省略
// 2）数组字面量
var devices = ['mac', 'iPhone', 'iPad']
var auto = []

// 读取和设置数组的值，使用方括号，基于0的数字索引
console.log(devices[2])
cities[1] = 'HZ' // 替代原有值
console.log(cities)
food[2] = 'Noodles' // 自动增加数组长度
console.log(food)

// length 属性，可读可写
console.log(devices.length)
devices.length = 2 // 移除最后一项
console.log(devices[2]) // undefined
cities.length = 5 // 延长数组长度
console.log(cities[4]) // 新增项都为 undefined
food[food.length] = 'Rice' // 在数组末尾添加新项
console.log(food)
food[99] = 'Chicken'
console.log(food.length) // 根据最后一项重新计算长度，中间的项均为 undefine
console.log('')


// 5.2.1 检测数组 Detecting Arrays
// 对于一个网页或者一个全局作用域，使用 instanceof
if (devices instanceof Array) {
    console.log(devices)
}

// 如果网页中包含多个框架，就存在两个以上不同的全局执行环境，从而存在两个以上不同版本的 Array 构造函数。
// Array.isArray(value)：确定某个值到底是不是数组，而不管它是在哪个全局执行环境中创建的。
if (Array.isArray(people)) {
    console.log(people.length)
}
console.log('')


// 5.2.2 转换方法 Conversion Methods
// toLocaleString()
// 返回字符串，调用每一项的 toLocaleString()
// toString()
// 返回字符串，由每个值的字符串并以逗号分隔拼接而成。调用每一项的 toString()
// join()
// 返回字符串。参数：用作分隔符的字符串，如果没有则使用逗号。调用每一项的 toString()
// valueOf()
// 返回数组。

var animals = ['rabbit', 'bear', 'cat', 'dog', null, undefined]
// null 和 undefined 以空字符串表示
console.log(animals.toString())
console.log(animals.toLocaleString())
console.log(animals.join())
console.log(animals.join('||'))
// null 和 undefined 正常显示
console.log(animals.valueOf())
console.log(animals)
// 书中使用的 alert() 示例。由于 alert() 要接收字符串参数，所以它会在后台调用 toString()方法，由此会得到与直接调用 toString() 方法相同的结果。
console.log('')

// 验证对 toLocaleString() 或 toString() 的默认调用
var person1 = {
    toLocaleString: function () {
        return 'to locale string'
    },
    toString: () => 'to string'
}

var person2 = {
    toLocaleString: () => 'to locale string',
    toString: () => 'to string'
}
var members = [person1, person2]
console.log(members.toLocaleString()) // 调用每一项的 toLocaleString()
console.log(members.toString()) // 调用每一项的 toString()
console.log(members.join()) // 调用每一项的 toString()
console.log(members.valueOf()) // 都不调用