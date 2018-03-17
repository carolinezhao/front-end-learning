// 用同步 sync 的方式读取文件（不鼓励使用！仅用于对比异步）
var fs = require('fs');
var data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);
console.log('end.');

// 运行结果
// contents of the file
// end.

// 同步式读取文件：将文件名作为参数传入 fs.readFileSync 函数，阻塞等待读取完成后，将文件的内容作为函数的返回值赋给 data 变量，控制台先输出 data 的值。