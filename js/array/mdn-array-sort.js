// array.sort([compareFunction])

// 字母、数字默认升序排列
var months = ['Dec', 'April', 'June', 'May']
var months = months.sort()
console.log(months)
console.log('')

var array = [670, 230, 450, 23]
var result1 = array.sort()
// 这个和默认的有啥区别？
var result2 = array.sort(function (a, b) {
    console.log(a, b, a - b)
    return a - b
})
console.log(result1, result2)
console.log('')

var items = [{
    name: 'Caroline',
    value: 25
}, {
    name: 'Bear',
    value: 20
}, {
    name: 'Rabbit',
    value: 16
}, {
    name: 'Bernie',
    value: 27
}]
// sort by value
var arr1 = items.sort(function(a,b) {
    return a.value - b.value
})
console.log(arr1)
// sort by name
function compareName(a,b) {
    var nameA = a.name
    var nameB = b.name
    if (nameA < nameB) {
        return -1
    }
    if (nameA > nameB) {
        return 1
    }
    return 0
}
var arr2 = items.sort(compareName)
console.log(arr2)