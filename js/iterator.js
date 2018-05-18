/* ===========================================
for
for (let index = 0; index < array.length; index++) {}

for-in
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const element = object[key];        
    }
}

forEach
array.forEach(element => {});

for-of
for (const iterator of object) {}
=========================================== */

// 集合对象迭代器
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