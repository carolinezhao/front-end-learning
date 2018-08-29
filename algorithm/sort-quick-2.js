let array = [4, 3, 6, 1, 5, 4, 7, 2];

// 此方法不改变原数组。
function quickSort(array) {
    return (array.length <= 1) ? array : quickSort(array.slice(1).filter((item) => {
        return item <= array[0]
    })).concat(array[0], quickSort(array.slice(1).filter((item) => {
        return item > array[0]
    })))
}

console.log(quickSort(array), array);

// 展开写
function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let leftArr = array.slice(1).filter((item) => {
        return item <= array[0]
    })
    let rightArr = array.slice(1).filter((item) => {
        return item > array[0]
    })
    console.log(leftArr, rightArr);
    return quickSort(leftArr).concat(array[0], quickSort(rightArr))
}