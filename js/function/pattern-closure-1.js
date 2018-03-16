// 闭包的应用

var divNodes = document.getElementsByTagName('div')

// for (var i = 0; i < divNodes.length; i++) {
//     divNodes[i].onclick = function () {
//         console.log(i)
//     }
// }
// 无论点击哪个 div，打印的结果都是 5
// 因为 div 节点的 onclick 事件是被异步触发的，当事件被触发时，for 循环早已结束，变量 i 的值已经是 5

// 解决方法是在闭包的帮助下，把每次循环的 i 值都封闭起来。
// 当在事件函数中顺着作用域链从内到外查找变量 i 时，会先找到被封闭在闭包环境中的 i
for (var i = 0; i < divNodes.length; i++) {
    (function (i) {
        divNodes[i].onclick = function () {
            console.log(i)
        }
    })(i)
}

// (书中没有) 使用 let 创建块作用域
// for (let i = 0; i < divNodes.length; i++) {
//     divNodes[i].onclick = function () {
//         console.log(i)
//     }
// }