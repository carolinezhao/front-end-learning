// 递归

// 斐波那契数列：1, 1, 2, 3, 5...

let fibonacci = [1, 1]
for (let i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}
// console.log(fibonacci.length, fibonacci);

// 1 和 2 的斐波那契数是 1；
// n (n > 2) 的斐波那契数是 (n-1) 的斐波那契数与 (n-2) 的斐波那契数之和。
// 这里的 n 相当于索引 (索引 0 为空)。
// 递归通常比普通实现慢，但是容易理解，且代码量少。
let countA = 0 // 记录递归次数
function fibonacci1(n) {
    countA++;
    if (n === 1 || n === 2) { // 边界条件
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
        console.log('n=' + n, cache);
        if (cache[n]) {
            console.log('cache' + n);
            return cache[n];
        }

        countB++;
        if (n === 1 || n === 2) {
            return 1;
        }
        let pre = func(n - 1);
        console.log('n=' + n + ', pre=' + pre);
        cache[n - 1] = pre;
        let prepre = func(n - 2);
        console.log('n=' + n + ', prepre=' + prepre);
        cache[n - 2] = prepre;
        return pre + prepre;
    }
    return func(n);
}
console.log(fibonacci2(20), countB); // 6765 20
// console.log(fibonacci2(5), countB);