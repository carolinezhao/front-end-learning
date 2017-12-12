// 用异步 async 的方式读取文件，通过回调函数实现。
var fs = require('fs');
// readFile 读取了三个参数：文件名，编码方式，回调函数
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