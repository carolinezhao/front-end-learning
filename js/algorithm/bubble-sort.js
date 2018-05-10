// bubble sort 冒泡排序
let array = [];
for (let i = 0; i < 6; i++) {
    array[i] = Math.floor(Math.random() * 10);
}

// array = [5,4,3,2,1]
let len = array.length;
console.log(array);
for (let i = 0; i < len; i++) {
    console.log(array, i); // 外层对内层没有实质影响，只是用于减少重复的比较。
    
    for (let j = 0; j < len - 1 - i; j++) {
        console.log(array[j], array[j + 1]);

        if (array[j] > array[j + 1]) {
            // 使用数组重构交换位置
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
            console.log(array);

        }
    }
}