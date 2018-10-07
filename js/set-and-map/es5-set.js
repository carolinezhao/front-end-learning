// Set 集合和 Map 集合的早期实现

// 用对象模拟 Set
var set = Object.create(null); // 原型为 null，不继承任何属性
set.foo = true;
if (set.foo) { // 检查属性是否存在
}

// 用对象模拟 Map
var map = Object.create(null);
map.foo = 'bar';
var value = map.foo; // 获取已存值


// 存在的问题
// 对象的属性名必须是字符串，因此非字符串内容都会被自动转换为字符串，会导致很多问题。
// 比如，如果使用对象作为属性，其会被转换成对应的字符串 "[object Object]"，此处 map[key1] 和 map[key2] 引用的是同一个属性。 
var key1 = {},
    key2 = {};
map[key1] = 'foo';
console.log(map[key2]); // foo
console.log(map);

// 对于 Map 来说，当想检查属性值是否存在，会变成检查该值是否为真/假。
map.count = 0;
if (map.count) { // 使用上有歧义 
}