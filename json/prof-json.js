// JSON 是一种数据格式，不是一种编程语言。
// JSON 不从属于 JS，不是只有 JS 能使用 JSON。

// JSON 的语法可以表示以下三种类型的值：简单值，对象，数组
// JSON 字符串必须使用双引号
// JSON 对象和数组中属性必须加双引号，没有声明变量

// =========== 解析 ===========
// JSON.stringify() 把 JavaScript 对象序列化为 JSON 字符串
// JSON.parse() 把 JSON 字符串解析为原生 JavaScript 值
var book = {
    title: "Professional JavaScript",
    authors: [
        "Nicholas C. Zakas"
    ],
    edition: 3,
    year: 2011
}

console.log(typeof book) //object
var jsonText = JSON.stringify(book)
console.log(jsonText)
console.log(typeof jsonText) //string

var bookCopy = JSON.parse(jsonText)
console.log(bookCopy)
console.log('')
// book 和 bookCopy 是两个没有任何关系的对象。

// =========== 序列化选项 ===========
// JSON.stringify() 可以接收另外两个参数，以不同方式序列化 JS 对象。
// 参数1：目标对象。
// 参数2：过滤器。数组或函数。
// 结果只包含数组中列出的属性。
var jsonText1 = JSON.stringify(book,["title","edition"])
console.log(jsonText1)
console.log('')
// 函数接收两个参数：属性名和属性值。
// (to be continued)
var jsonText2

// 参数3：控制结果中的缩进。若缩进有效，同时包含换行符。
// 数值：表示每个级别缩进的空格数(max=10)。
var jsonText3 = JSON.stringify(book, null, 4)
console.log(jsonText3)
console.log('')
// 字符串：代替空格作为缩进字符(max=10)。
var jsonText4 = JSON.stringify(book, null, "---")
console.log(jsonText4)
console.log('')
