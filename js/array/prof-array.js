// 5.2 Array
// 数组：数据的有序列表，每一项可以保存任何类型的数据(与其他语言不同)，大小可以动态调整。

// 创建数组
// 1）Array 构造函数
var colors = new Array()
var people = new Array(5) // 包含5项
var food = new Array('Bread') // 包含1项
var cities = Array('BJ','SH','GZ') // new 可以省略
// 2）数组字面量
var devices = ['mac','iPhone','iPad']
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

