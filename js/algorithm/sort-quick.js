// 快速排序 quick sort

var array = [5, 3, 6, 2, 1, 4, 0, 9];
var part = 0;

quicksort(array, 0, array.length - 1);

function quicksort(array, left, right) {
    var index;
    if (array.length > 1) {
        index = partition(array, left, right);
    console.log(`index = ${index}\n`);
        
        if (left < index - 1) {
            quicksort(array, left, index - 1);
        }
        if (index < right) {
            quicksort(array, index, right);
        }
    }
}

function partition(array, left, right) {
    console.log(`part = ${++part}`);
    console.log(array);    

    var pivot = array[Math.floor((left + right) / 2)],
        i = left,
        j = right;
        console.log(`----- i = ${i}, j = ${j} -----`);    
     
    while (i <= j) {      
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
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