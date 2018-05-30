// 定义自己的 Promise 变量扩展内建的 Promise 功能。
class MyPromise extends Promise {
    // 使用默认的构造函数
    success(resolve, reject) {
        return this.then(resolve, reject);
    }
    failure(reject) {
        return this.catch(reject);
    }
}

let promise1 = new MyPromise(function(resolve, reject) {
    resolve(88);
});

promise1.success(function(value) {
    console.log(value);
}).failure(function(value) {
    console.log(value);
});

let promise2 = MyPromise.resolve(77);
let promise3 = MyPromise.all([promise1, promise2]);

promise3.success(function(value) {
    console.log(value);
    return value[1];
}).success(function(value) {
    console.log(value);
});