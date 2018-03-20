var fs = require('fs')

// 不指定编码，程序以二进制的模式读取文件内容，data 的值是 Buffer 对象。
fs.readFile('content.txt', function (err, data) {
    if (err) {
        console.error(err)
    } else {
        console.log(data)
    }
})
console.log('end1.')

// 指定编码
fs.readFile('content.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
    } else {
        console.log(data)
    }
})
console.log('end2.')

// 读取文件出错时 (比如文件不存在)，err 将会是 Error 对象。