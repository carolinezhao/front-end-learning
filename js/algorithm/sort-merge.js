// 归并排序 merge sort

var array = [5, 4, 3, 6, 2, 1];

var split = 0, sort = 0;
var arraySorted = mergeSortRec(array);
console.log(arraySorted);

function mergeSortRec(array) {
    console.log(`split = ${++split}`);
    console.log(array);
    var length = array.length;
    if (length === 1) { // 递归的停止条件
        console.log(`return an array\n`);
        return array;
    }
    var middle = Math.floor(length / 2), // 直接取整，奇数项时，left 个数少于 right
        left = array.slice(0, middle), // slice(a,b) 返回项为 a 到 b-1。
        right = array.slice(middle, length);
    console.log(`middle = ${middle}\n${left}\n${right}\n`);
    return merge(mergeSortRec(left), mergeSortRec(right));
}

function merge(left, right) {
    console.log(`sort = ${++sort}`);
    console.log(left, right);
    var result = [],
        il = 0,
        ir = 0;
    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }
    while (il < left.length) {
        result.push(left[il++]);
    }
    while (ir < right.length) {
        result.push(right[ir++]);
    }
    console.log(`result: ${result}\n`)
    return result;
}