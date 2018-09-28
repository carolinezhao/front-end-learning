/* ===========================================
深入理解 ES6 第8章
迭代器 (Iterator) 和生成器 (Generator)

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
每执行完一条 yield 语句后函数就会自动停止执行。直到再次调用 next() 才会继续执行。可以和 for 循环结合使用。
yield 只能在生成器内部使用。在生成器内部的函数中使用也不行，因为它与 return 一样，不能穿透函数边界。
创建方式：函数声明，函数表达式，作为对象的方法。不可以使用箭头函数。

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

// yield 和 for 循环
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

// 生成器函数表达式
let createIterator3 = function* (items) {
    yield items[0] + items[1];
    yield 'hello';
}

let iterator3 = createIterator3([2, 6]);
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());
console.log('');

// 生成器对象的方法
let object = {
    // ES5 写法
    createIterator1: function*(items) {
        for (let i = 0; i < items.length; i++) {
            yield items[i];
        }
    },
    // ES6 写法
    *createIterator2(items) {
        for (let i = 0; i < items.length; i++) {
            yield items[i];
        }
    }
};

let iterator4 = object.createIterator1(['a','b','c']);
console.log(iterator4.next());
console.log(iterator4.next());
console.log(iterator4.next());
console.log(iterator4.next());
console.log('');

let iterator5 = object.createIterator2(['d']);
console.log(iterator5.next());
console.log('');


/* ===========================================
可迭代对象 和 for-of 循环

可迭代对象具有 Symbol.iterator 属性，与迭代器密切相关。
Symbol.iterator 通过指定的函数可以返回一个作用于附属对象的迭代器。？？？

ES6 中，所有的集合对象 (数组，Set，Map) 和字符串都是可迭代对象，这些对象中都有默认的迭代器。
由于生成器默认会为 Symbol.iterator 属性赋值，因此所有通过生成器创建的迭代器都是可迭代对象。

for-of 循环
每执行一次都会调用可迭代对象的 next() 方法，并将迭代器返回的结果对象的 value 属性存储在一个变量中。
循环持续这个过程直到返回对象的 done 值为 true。
用于不可迭代对象，null，undefined 会报错。
=========================================== */

// for-of 调用数组的 Symbol.iterator 获取迭代器，在 js 引擎背后完成。
// 随后迭代器的 next() 被多次调用，返回的对象的 value 值被存储在变量 num 中。
let values = [1, 2, 3];
for (let num of values) {
    console.log(num);
}

// 通过 Symbol.iterator 访问默认迭代器。
let iterator6 = values[Symbol.iterator]();
console.log(iterator6.next());
console.log(iterator6.next());
console.log(iterator6.next());
console.log(iterator6.next());
console.log('');

// 检测对象是否为可迭代对象：是否存在默认的函数类型的迭代器。for-of 在执行前也会做相似检查。
function isIterable (object) {
    console.log(typeof object[Symbol.iterator] === 'function');
}

isIterable([1,20,100]);
isIterable('hello');
isIterable(new Set());
isIterable(new Map());
isIterable(new WeakSet()); // false
isIterable(new WeakMap()); // false
console.log('');


// 创建可迭代对象
// 默认情况下，开发者定义的都是不可迭代对象，如果给 Symbol.iterator 属性添加一个生成器，则变为可迭代对象。
let collection = {
    items: [],
    // 创建一个生成器并赋值给对象的 Symbol.iterator 属性来创建默认的迭代器。
    * [Symbol.iterator]() {
        for (let item of this.items) {
            yield item;
        }
    }
};

collection.items.push(1, 2, 3);

for (let x of collection) {
    console.log(x);
}

// 与 for-of 中
let iterator7 = collection[Symbol.iterator]();
console.log(iterator7.next().value);
console.log(iterator7.next().value);
console.log(iterator7.next().value);
console.log('');


/* ===========================================
内建迭代器
ES6 为许多内建类型提供了内建迭代器。只有定义自己的对象时才需要手动创建。

集合对象的内建迭代器
ES6 有三种类型的集合对象：数组，Set，Map。它们都内建了三种迭代器：
entries() 返回多个 key-value
values() 返回集合的 value
keys() 返回集合中的 key

for-of 循环中，如果没有显式指定，则通过 Symbol.iterator 访问对象的默认迭代器：
数组和 Set 的默认迭代器：values()
Map 的默认迭代器: entries()

相关内容 object/0-know-object.md 3.4 遍历
=========================================== */

let colors = ['red', 'green', 'blue'];
let tracking = new Set([123, 456, 789]);
let data = new Map();
data.set('language', 'javascript');
data.set('position', 'frontend');

// 数组
// 默认 values 迭代
for (let color of colors) {
    console.log(color);
}
// 指定 entries 迭代
for (let color of colors.entries()) {
    console.log(color);
}

// Set
// 默认 values 迭代
for (let num of tracking) {
    console.log(num);
}
// 指定 entries 迭代
for (let num of tracking.entries()) {
    console.log(num);
}

// Map
// 默认 entries 迭代
for (let entry of data) {
    console.log(entry);
}
// 指定 keys 迭代
for (let entry of data.keys()) {
    console.log(entry);
}

// 解构与 for-of 循环
for(let [key, value] of data) {
    console.log(key + ' = ' + value);
}

// 字符串迭代器
let message = 'A 和 B';
for (let letter of message) {
    console.log(letter);
}