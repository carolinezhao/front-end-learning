// 4.2 执行环境及作用域
// 相关概念见 README.md

var color = 'blue'

function changeColor() {
    if (color === 'blue') {
        color = 'red'
    } else {
        color = 'blue'
    }
    console.log(color)
}

changeColor()
changeColor()
// 函数 changeColor() 的作用域链包含两个对象：它自己的变量对象 (其中定义着 arguments 对象) 和全局环境的变量对象。

// 在局部作用域中定义的变量可以在局部环境中与全局变量互换使用。
var city = 'beijing'

function changeCity() {
    var anotherCity = "shanghai"

    function swapCities() {
        var tempCity = anotherCity
        anotherCity = city
        city = tempCity
        // 这里可以访问 city、anotherCity 和 tempCity        
        console.log(city, anotherCity, tempCity)
    }
    // 这里可以访问 city 和 anotherCity，但不能访问 tempCity
    swapCities()
}
// 这里只能访问 city
changeCity()
// 以上代码共涉及 3 个执行环境：全局环境、changeCity() 的局部环境和 swapCites() 的局部环境。
// 这些环境之间的联系是线性、有次序的。内部环境可以通过作用域链访问所有的外部环境，但外部环境不能访问内部环境中的任何变量和函数。
// 对于 swapCites() 而言，其作用域链中包含 3 个对象：swapColors() 的变量对象、changeColor() 的变量对象和全局变量对象。
// swapCites() 的局部环境开始时会先在自己的变量对象中搜索变量和函数名，如果搜索不到则再搜索上一级作用域链。
// 函数参数也被当作变量来对待，因此其访问规则与执行环境中的其他变量相同。
console.log('')


// 4.2.1 延长作用域链 Scope Chain Augmentation
// 有些语句可以在作用域链的前端临时增加一个变量对象，该变量对象会在代码执行后被移除。

// try-catch 语句的 catch 块（没有例子）
// 会创建一个新的变量对象，其中包含的是被抛出的错误对象的声明。

// with 语句：将指定的对象添加到作用域链中（不理解，应用场景是？）
var location = {
    href: 'https://github.com/carolinezhao',
    name: 'mainpage'
}

function buildUrl() {
    var qs = "?debug=true"
    with(location) {
        var url = href + qs
    }
    // 和这句的区别是？
    // var url = location.href + qs
    return url
}
console.log(buildUrl())
// with 语句接收的是 location 对象，因此其变量对象中就包含了 location 对象的所有属性和方法，而这个变量对象被添加到了作用域链的前端。
// buildUrl() 函数中定义了一个变量 qs。当在 with 语句中引用变量 href 时 (实际引用的是 location.href)，可以在当前执行环境的变量对象中找到。
// 当引用变量 qs 时，引用的则是在 buildUrl() 中定义的那个变量，而该变量位于函数环境的变量对象中。
// ？？with 语句内部定义了一个名为 url 的变量，因而 url 就成了函数执行环境的一部分，所以可以作为函数的值被返回。


// 4.2.2 没有块级作用域 No Block-Level Scopes
// 在 JS 中，if 语句中的变量声明会将变量添加到当前的执行环境 (在这里是全局环境) 中。
// 在其他类C的语言中，该变量会在 if 语句执行完毕后被销毁。
if (true) {
    var system = 'iOS'
}
console.log(system)

// 由 for 语句创建的变量 i 即使在 for 循环执行结束后，也依旧会存在于循环外部的执行环境中。
for (var i = 0; i < 10; i++) {
    var j = i * 10
}
console.log(i, j)
console.log('')

// 1.声明变量
// 使用 var 声明的变量会自动被添加到最接近的环境中。
// 在函数内部，最接近的环境就是函数的局部环境；在 with 语句中，最接近的环境是函数环境。
// 如果初始化变量时没有使用 var 声明，该变量会自动被添加到全局环境。
function add(num1, num2) {
    var sum = num1 + num2
    plus = num1 + num2 // 不推荐
    return sum
}
var result = add(10, 20)
console.log(result) // 30
// console.log(sum) // sum 不是有效变量，会导致错误。
console.log(plus) // 30
console.log('')


// 2.查询标识符 Identifier Lookup
// 搜索过程从作用域链的前端开始，向上逐级查询与给定名字匹配的标识符。
// 如果在局部环境中找到了该标识符，搜索过程停止，变量就绪。
// 这意味着如果局部环境中存在着同名标识符，就不会使用位于父环境中的标识符。
// 如果在局部环境中没有找到该变量名，则继续沿作用域链向上搜索，一直追溯到全局环境的变量对象。
var sport = 'football'

function getSport1() {
    return sport
}
console.log(getSport1()) // 搜索 getColor() 的变量对象，全局环境的变量对象

function getSport2() {
    var sport = 'basketball'
    return sport
}
console.log(getSport2()) // 搜索 getColor() 的变量对象时发现了 sport 变量，就停止了搜索
// 任何位于局部变量 sport 的声明之后的代码，如果不使用 window.sport 都无法访问全局 sport 变量。