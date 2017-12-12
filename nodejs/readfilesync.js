// 用同步 sync 的方式读取文件
var fs = require('fs');
var data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);
console.log('end.');

// 运行结果
// contents of the file
// end.