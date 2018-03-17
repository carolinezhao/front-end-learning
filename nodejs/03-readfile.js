// 用异步 async 的方式读取文件，通过回调函数实现。
var fs = require('fs'); // require 到的 fs 是什么？
// console.log(typeof fs); // object
// console.log(fs);

// readFile 读取了三个参数：文件名，编码方式，回调函数！
fs.readFile('file.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
console.log('end.');

// 等同于以下写法。
// function readFileCallBack(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// };
// fs.readFile('file.txt', 'utf-8', readFileCallBack);
// console.log('end.');


// 运行结果：
// end.
// contents of the file

// fs.readFile 调用时所做的工作只是将异步式I/O请求发送给了操作系统，然后立即返回并执行后面的语句，执行完后进入事件循环监听事件。
// 当 fs 接收到I/O请求完成的事件时，事件循环会主动调用回调函数以完成后续工作。