// 4.2 执行环境及作用域
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


// 4.2.1 延长作用域链
// 4.2.2 没有块级作用域