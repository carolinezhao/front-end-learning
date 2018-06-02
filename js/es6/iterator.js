// 相关内容 ../object/0-know-object.md 3.4 遍历

/* ===========================================
深入理解 ES6 第8章
迭代器 (Iterator) 和生成器 (Generator)

迭代器对于高效的数据处理是不可或缺的。
新的数组方法和新的集合类型 (Set, Map) 都依赖迭代器的实现。
其他特性中也有迭代器的身影：for-of 循环，展开运算符，异步编程……

迭代器是一种特殊对象。
都有 next() 方法，每次调用都返回一个结果对象，有两个属性：
1) value 表示下一个将要返回的值；
2) done 布尔类型，没有更多可返回数据时返回 true；
迭代器还会保存一个内部指针，用来指向当前集合中值的位置，每调用一次 next() 方法，都会返回下一个可用的值。

最后一个值返回后，再调用 next()，返回的对象中：
属性 done 的值为 true；
属性 value 包含迭代器最终返回的值，不是数据集的一部分，相当于函数返回值，没有则返回 undefined。

生成器是一种返回迭代器的函数。
通过 function 关键字后的星号 (*) 表示，可紧挨，可加空格。
新关键字 yield，指定调用迭代器的 next() 方法时的返回值 (任何值或表达式) 及返回顺序。
每执行完一条 yield 语句后函数就会自动停止执行。直到再次调用 next() 才会继续执行。
yield 只能在生成器内部使用。在生成器内部的函数中使用也不行，因为它与 return 一样，不能穿透函数边界。

生成器函数是 ES6 的重要特性，可以将其用于所有支持函数使用的地方。
=========================================== */

// 生成器
function* createIterator1() {
    yield 1;
    yield 2;
    yield 3;
}
// 调用生成器，返回一个迭代器
let iterator1 = createIterator1();
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log('');

function* createIterator2(items) {
    for (let i = 0; i < items.length; i++) {
        // 每遇到一个 yield 语句循环都会停止
        yield items[i];
    }
}

let iterator2 = createIterator2([4, 5, 6]);
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log('');

// 集合对象的内建迭代器
// entries() 返回多个 key-value
// values() 返回集合的 value
// keys() 返回集合中的 key

// ES6 中，所有的集合对象 (数组，Set，Map) 和字符串都是可迭代对象，这些对象中都有默认的迭代器。
// 数组和 Set 的默认迭代器：values()
// Map 的默认迭代器: entries()

// for-of
// 用于可迭代对象，如果没有显式指定，则通过 Symbol.iterator 访问对象的默认迭代器。

let colors = ['red', 'green', 'blue'];
let tracking = new Set([123, 456, 789]);
let data = new Map();
data.set('language', 'javascript');
data.set('position', 'frontend');

// 数组
// 默认 values 迭代
for (const color of colors) {
    console.log(color);
}
// 指定 entries 迭代
for (const color of colors.entries()) {
    console.log(color);
}

// Set
// 默认 values 迭代
for (const num of tracking) {
    console.log(num);
}
// 指定 entries 迭代
for (const num of tracking.entries()) {
    console.log(num);
}

// Map
// 默认 entries 迭代
for (const entry of data) {
    console.log(entry);
}
// 指定 keys 迭代
for (const entry of data.keys()) {
    console.log(entry);
}

// 字符串迭代器
let message = 'A 和 B';
for (const letter of message) {
    console.log(letter);
}