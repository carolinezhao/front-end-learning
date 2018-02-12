// 根据对象中的不同属性进行排列
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