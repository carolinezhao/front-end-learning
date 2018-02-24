// 4.2 执行环境及作用域
// 执行环境：变量或函数有权访问的其他数据。
// 变量对象：保存环境中定义的所有变量和函数。
// 全局执行环境：最外围的执行环境。Web 浏览器中，全局执行环境是 window 对象。
// 作用域链：保证对(执行环境有权访问的)所有变量和函数的有序访问。
// 作用域链的前端始终都是当前执行的代码所在环境的变量对象。如果这个环境是函数，则将其活动对象作为变量对象。
// ？活动对象：最开始时只包含一个变量，即 arguments 对象 (这个对象在全局环境中是不存在的)。
// 作用域链中的下一个变量对象来自包含 (外部) 环境。全局执行环境的变量对象始终是作用域链中的最后一个对象。
// 标识符解析：沿着作用域链一级一级地搜索标识符的过程。

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


// 4.2.1 延长作用域链
// 4.2.2 没有块级作用域