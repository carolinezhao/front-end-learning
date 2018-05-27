setTimeout(function(){
    console.log('Timeout!');
}, 500)

console.log('Hello!');

// 执行器会立即执行
let promise = new Promise(function(resolve, reject) {
    console.log('Promise!');
    resolve();
});

// 调用 resolve 后会触发一个异步操作，传入 then 的函数会被添加到任务队列中并异步执行。
promise.then(function() {
    console.log('Resolved!');
})

console.log('Hi!');