let p1 = new Promise(function (resolve, reject) {
    resolve(55);
});

// 只有当第一个 Promise 被解决之后才会调用第二个
p1.then(function (value) {
    console.log('first: ' + value);
}).then(function () {
    console.log('Finished.');
})

// 捕获错误
p1.then(function (value) {
    throw new Error('Boom!');
}).catch(function (error) {
    console.log(error.message);
});

// 返回值：给下游 Promise 传递数据
p1.then(function (value) {
    console.log('third: ' + value);
    return value * 2;
}).then(function (value) {
    console.log('forth: ' + value);
})

// 拒绝处理程序没有执行，不影响串联的 Promise
p1.catch(function(value) {
    console.log('fifth: ' + value);    
    return value + 11;
}).then(function(value) {
    console.log('sixth: ' + value);
})

// 注意结果的打印顺序