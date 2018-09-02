// 递归

function factorial(x) {
    if (x === 1) {
        return 1;
    } else {
        return x * factorial(x-1);
    }
}
// console.log(factorial(5));


// 斐波那契数列：1, 1, 2, 3, 5...

let fibonacci = [1, 1]
for (let i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}
// console.log(fibonacci.length, fibonacci);

// 1 和 2 的斐波那契数是 1；(基线条件)
// n (n > 2) 的斐波那契数是 (n-1) 的斐波那契数与 (n-2) 的斐波那契数之和。(递归条件)
// 求第 n 项。

// 递归通常比普通实现慢，但是容易理解，且代码量少。
let countA = 0 // 记录递归次数
function fibonacci1(n) {
    countA++;
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibonacci1(n - 1) + fibonacci1(n - 2);
}
console.log(fibonacci1(20), countA); // 6765 13529

// 优化：保存已经调用过的值的结果，减少递归次数。
let countB = 0

function fibonacci2(n) {
    let cache = []

    function func(n) {
        console.log('n=' + n);
        if (cache[n]) {
            console.log('cache' + n);
            return cache[n];
        }

        countB++;
        if (n === 1 || n === 2) {
            return 1;
        }
        let pre = func(n - 1);
        cache[n - 1] = pre;
        console.log('n=' + n + ', pre=' + pre, cache);
        let prepre = func(n - 2);
        cache[n - 2] = prepre;
        console.log('n=' + n + ', prepre=' + prepre, cache);
        return pre + prepre;
    }
    return func(n);
}
// console.log(fibonacci2(20), countB); // 6765 20
console.log(fibonacci2(5), countB);