let array = [5, 4, 3, 6, 2, 1, 0];
let len = array.length;
for (let i = 0; i < len - 1; i++) {
    let minIndex = i; // 重置最小值的位置 (经过上一轮交换，最小值已在数组最开始)
    console.log(`----- i = ${i} -----`)
    for (let j = i + 1; j < len; j++) {
        console.log(`j = ${j}`)
        console.log(array[minIndex], array[j])
        if (array[j] < array[minIndex]) {
            minIndex = j; // 记住最小值的位置
        }
        console.log(`minIndex = ${minIndex}`);
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
    console.log(array);    
}