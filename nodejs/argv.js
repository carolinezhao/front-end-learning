// 命令行参数数组
console.log(process.argv)
// 参数依次为：node地址，本文件地址，此后是在命令行输入的运行参数
// 比如 node filename.js 1992 name=caroline --v
// 则从第3项开始作为字符串写入数组
