/*
reference
深入理解 ES6
MDN Promise.resolve()
---

创建已处理的 Promise

Promise.resolve(value); 返回一个解析过带着给定值的 Promise 对象。
Promise.resolve(Promise 对象); 返回传入的 Promise 对象。
Promise.resolve(Thenable 对象); 创建一个新的 Promise (instanceof 返回 true)，并在 then() 函数中调用。
非 Promise 的 Thenable 对象：拥有 then() 方法且参数是 resolve 和 reject 的普通对象。

Promise.reject(reason); 返回一个带有拒绝原因参数的 Promise 对象。
*/

// 返回完成态 Promise
let promise1 = Promise.resolve(66);
// 只调用完成处理函数
promise1.then(function (value) {
    console.log(value);
});

// 返回已拒绝的 Promise
let promise2 = Promise.reject(77);
// 只调用拒绝处理函数
promise2.catch(function (value) {
    console.log(value);
});


// 传入 Promise 对象
let original = Promise.resolve(88);
let cast = Promise.resolve(original);
cast.then(value => console.log(value));
console.log(original === cast); // true


// 传入非 Promise 的 Thenable 对象
let thenable1 = {
    then(resolve, reject) {
        resolve([1, 2, 3]);
    }
};

let p1 = Promise.resolve(thenable1);
p1.then(value => console.log(value));
console.log(p1 instanceof Promise); // true

let thenable2 = {
    then(resolve, reject) {
        throw new Error('Error!');
        resolve('resolving'); // unreachable
    }
};

let p2 = Promise.resolve(thenable2);
p2.then(value => console.log(value))
    .catch(error => console.log(error));