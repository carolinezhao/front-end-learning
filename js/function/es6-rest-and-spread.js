// 不定参数：把多个独立的参数整合为数组后访问。
// 展开运算符：把数组打散后作为独立的参数传入函数。


// 不定参数 rest parameters
// 在命名参数前加三个点 (...) 表示不定参数。
// 不定参数是一个数组，包含自它之后传入的所有参数。
// 每个函数最多只能有一个不定参数，且必须放在末尾。
// 不能用于对象字面量 setter 中 (还没看这里)

// 模仿 Underscore.js 库中的 pick() 方法，返回一个给定对象的副本，包含原始对象属性的特定子集。
function pick(object, ...keys) {
    let result = Object.create(null);
    for (let i = 0, len = keys.length; i < len; i++) {
        result[keys[i]] = object[keys[i]];
    }
    return result;
}
// 不定参数 keys 包含的是 object 之后传入的所有参数；
// arguments 对象包含的是所有传入的参数，包括 object。

let job = {
    position: 'frontend',
    language: 'javascript',
    city: 'beijing'
}

let jobData = pick(job, 'city', 'position');
console.log(jobData);


// 展开运算符 the spread operator
// 展开运算符可以简化使用数组给函数传参的编码过程，大多数使用 apply() 的情况都适合用展开运算符替代。

// 内建方法 Math.max() 接受任意个参数并返回最大值，但是不接受数组。
let values = [5, 50, 75, 25];
console.log(Math.max(...values));
// 等价于
console.log((Math.max(5, 50, 75, 25)));

// 展开运算符可以和正常传入的参数一起使用。
// 比如想限定最小值为 0，可以单独传入限定值：
let values1 = [-5, -50, -75, -25];
console.log(Math.max(...values1, 0));