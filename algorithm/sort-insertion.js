let arr = [5, 4, 3, 6, 2, 1, 0];
let len = arr.length;
for (let i = 1; i < len; i++) {
    console.log(`----- i = ${i} -----`);
    let j = i;
    while (j > 0) {
        if (arr[j] < arr[j - 1]) {
            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            console.log(arr);
        }
        j--;
    }
}