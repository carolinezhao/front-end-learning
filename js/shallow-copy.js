// 数组浅拷贝
let arr = [22, {
    city: 'beijing'
}]
let arr0 = arr
let arr1 = arr.slice()
let arr2 = Array.from(arr)
arr[0] = 33;
arr[1].city = 'shanghai'
arr.push(66)
console.log(arr, arr0, arr1, arr2);
console.log(arr === arr0, arr === arr1, arr[1] === arr1[1]);
console.log('');

// 通用浅拷贝
function shallowCopy(obj) {
    if (typeof obj !== 'object' || obj === null) return obj;
    let newObj
    // 保留 constructor 属性
    if (obj.constructor === Array) {
        newObj = []
    } else {
        newObj = {}
        // newObj.constructor = obj.constructor
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}

let obj = {
    a: 1,
    b: {
        f: {
            g: 1
        }
    },
    c: [1, 2, 3]
};

let result1 = shallowCopy(obj)
console.log(result1);
console.log(result1.b.f === obj.b.f);

let array = [1, 2, 3, [4, 5, 6]]
let result2 = shallowCopy(array)
console.log(result2);
array[1] = 0
array[3][0] = 0
console.log(result2);