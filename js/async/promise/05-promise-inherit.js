// 定义自己的 Promise 变量扩展内建的 Promise 功能。
class MyPromise extends Promise {
    // 使用默认的构造函数 constructor() {}
    // 模仿内建方法定义原型方法
    success(resolve, reject) {
        return this.then(resolve, reject);
    }
    failure(reject) {
        return this.catch(reject);
    }
}

console.log(MyPromise.prototype);
console.log(MyPromise.prototype.__proto__ === Promise.prototype);

// MyPromise 除了新增的两个方法，还继承了 resolve(), reject(), all(), race()，后两者与内建方法完全一致。
// MyPromise.resolve() 和 MyPromise.reject() 通过 Symbol.species 属性决定返回 Promise 的类型；？？
// 调用这两个方法时无论传入什么值都会返回一个 MyPromise 的实例。

let promise1 = new MyPromise(function (resolve, reject) {
    resolve(88);
});

promise1.success(function (value) {
    console.log(value);
}).failure(function (value) {
    console.log(value);
});

let promise2 = MyPromise.resolve(77);
let promise3 = MyPromise.all([promise1, promise2]);

promise3.success(function (value) {
    console.log(value);
    return value[1];
}).success(function (value) {
    console.log(value);
});

// 把内建 Promise 作为参数传入，解决这个 Promise 后，返回新的 MyPromise 实例。
let p1 = Promise.resolve(66);
let p2 = MyPromise.resolve(p1);
console.log(p2 instanceof MyPromise); // true
p2.success(value => {
    console.log(value);
});

// 把 MyPromise 实例作为参数传入，未经解决直接返回。
let p3 = MyPromise.resolve(p2);
console.log(p3 === p2); // true