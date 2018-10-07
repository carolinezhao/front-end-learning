// Map

// Map 是一种存储键值对的有序列表，键名和值支持所有数据类型。
// 与对象的区别是，对象的属性名会被强制转换为字符串。
let map = new Map();
map.set('name', 'caroline');
map.set('year', 2018);
console.log(map.get('name'));
console.log(map.get('year'));

let key3 = {};
map.set(key3, 5);
console.log(map.get(key3));
console.log('');

// has, delete, clear 与 Set 的方法类似，不过参数是键名。
console.log(map.size);
console.log(map.has('name'));
map.delete('name');
console.log(map.has('name'));
map.clear();
console.log(map.size);
console.log('');

// 通过传入数组初始化
// 每个元素都是一个子数组，其中的两个元素是键和值。
let map1 = new Map([
    ['age', 25],
    ['job', 'frontend'],
    ['city', 'Beijing']
]);
console.log(map1.size);
console.log(map1.get('city'));
console.log(map1.has('job'));
console.log(map1);

// forEach() 方法与数组类似
map1.forEach(function (value, key, map) {
    console.log(key + ': ' + value);
})

// Weak Map 集合