// 快速排序 quick sort
// 分治法 (D&C) 的典范，最快的排序算法之一。
// 快排的性能高度依赖于选择的基准值。
// 不检查数组是否有序，对于有序的数组依然尝试对其进行排序。

// 最糟情况：第一项作为基准值，调用栈高度 O(n)，运行时间 O(n)*O(n) = O(n*2)
// 最佳情况：中间项作为基准值，每次都把数组分成两半，调用栈高度 O(log n)，运行时间 O(n)*O(log n) = O(n*log n)
// 两种情况每层都涉及 O(n) 次操作。

// 也划分较小的数组进行递归，但与归并排序的区别是，并没有真正分割数组，即在递归中元素的索引始终是基于原始数组的。

// var array = [5, 3, 6, 2, 1, 4, 0, 9];
var array = [3, 5, 1, 6, 4, 7, 2];
var loop = 0;

quicksort(array, 0, array.length - 1);

function quicksort(array, left, right) {
    var index;
    if (array.length > 1) {
        index = partition(array, left, right);
        console.log(`index = ${index}\n`);
        // 对左数组排序
        if (left < index - 1) {
            quicksort(array, left, index - 1);
        }
        // 对右数组排序
        if (index < right) {
            quicksort(array, index, right);
        }
    }
}

function partition(array, left, right) {
    console.log(array);
    // pivot 是 value；i 和 j 是 index
    var pivot = array[Math.floor((left + right) / 2)],
        i = left,
        j = right;
    console.log(`--- loop ${++loop}: i = ${i}, j = ${j}, pivot = ${pivot} ---`); // 进入循环时 i 和 j 的值，表示小数组的边界。

    while (i <= j) { // 当 i>j 时退出循环。
        while (array[i] < pivot) {
            i++;
            console.log(`i = ${i}`);
        }
        while (array[j] > pivot) {
            j--;
            console.log(`j = ${j}`);
        }
        // 由于左/右元素与中间值比较后i/j才变化(向中间趋近)，所以有可能左/右元素就是与中间值交换。
        if (i <= j) {
            [array[i], array[j]] = [array[j], array[i]];
            console.log(array);
            i++;
            j--;
        }
        console.log(i, j);
    }
    return i;
}