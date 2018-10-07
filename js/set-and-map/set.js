// Set

// Set 是一种有序列表，其中含有相互独立的非重复值。
let set = new Set();
set.add(5);
set.add('5');
// 不进行强制类型转换
let key1 = {
        a: 1
    },
    key2 = {
        b: 2
    };
set.add(key1);
set.add(key2);
console.log(set.size);

// 如果传入相同值作为参数，后传入的会被忽略。
set.add(5); // 被忽略
console.log(set.size);

// 可以用数组初始化，Set 会自动去重。
let set1 = new Set([5, 1, 4, 5, 2, 5]);
console.log(set1.size);

// 检查是否存在某个值
console.log(set.has(5));
console.log(set.has(key1));
console.log(set1.has(2));

// 移除某个元素
set.delete(5);
console.log(set.has(5));

// 清空集合
set.clear();
console.log(set.size);
console.log('');

// forEach() 方法
// 参数1: 回调函数
// 为了与数组的参数保持一致，也用3个参数。
// 由于 Set 没有键名，所以前两个参数一样，都是值。
set1.forEach(function (value, key, ownerSet) {
    console.log(key + ' ' + value);
})

set.add('5');
set.add(6);
set.forEach(function (value) {
    console.log(value, typeof value);
})

// 参数2: this
// 用法同数组。
let processor = {
    output(value) {
        console.log(value);
    },
    process(dataSet) {
        // this 指向调用此函数的对象。
        dataSet.forEach(function (value) {
            this.output(value);
        }, this);
        // 传入 process 的 this，如果不绑定，则 this 指向全局。
    }
}

processor.process(set);

// 如果使用箭头函数则无需传入 this
let processor1 = {
    output(value) {
        console.log(value);
    },
    process(dataSet) {
        dataSet.forEach(value => this.output(value));
    } // 箭头函数没有 this，使用外围 process 函数的 this。
}

processor1.process(set1);
console.log('');

// 将 Set 集合转换为数组
// 使用展开运算符
let set2 = new Set([1, 2, 2, 3, 4, 6, 6]);
console.log(set2.size);
let array = [...set2];
console.log(array);

// 基于 Set 对元素去重的特点，如果想返回已有数组的无重复元素版，可以使用此方法。
function eliminateDuplicates(items) {
    return [...new Set(items)];
}

let nums = [3, 3, 3, 5, 5, 7, 7, 8];
let noDuplicates = eliminateDuplicates(nums);
console.log(noDuplicates);

// Weak Set 集合