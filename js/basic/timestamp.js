// The UNIX timestamp is an integer that represents the number of seconds elapsed since January 1 1970.

// The timestamp in JavaScript is expressed in milliseconds.
// The current timestamp
let timestamp1 = new Date().getTime();
let timestamp2 = new Date().valueOf();
let timestamp3 = Date.now();
// 指定时间的时间戳
let timestamp4 = new Date('2018-12-2 12:00:00');

// js 时间戳 (13 位) 转换为 unix 时间戳 (10 位)
console.log(Math.floor(timestamp1 / 1000));
console.log(Math.floor(timestamp2 / 1000));
console.log(Math.floor(timestamp3 / 1000));
console.log(Math.floor(timestamp4 / 1000));

// unix 时间戳转换为 js
console.log(new Date(1543130452 * 1000));