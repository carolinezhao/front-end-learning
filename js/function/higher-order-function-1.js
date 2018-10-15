// Eloquent Javascript Chapter 5
// 主要关注的是构建函数的思路。

// Abstractions hide details and give us the ability to talk about problems at a higher (or more abstract) level.

// abstract “doing something N times” as a function
function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

// Since “doing something” can be represented as a function and functions are just values, we can pass our action as a function value.
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log);

let labels = [];
repeat(5, i => labels.push(`Unit ${i + 1}`));
console.log(labels);


// Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
// Higher-order functions allow us to abstract over actions, not just values. 

// functions that create new functions
function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

// functions that change other functions
function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}
noisy(Math.min)(3, 2, 1);

// functions that provide new types of control flow
function unless(test, then) {
    if (!test) then();
}

repeat(3, n => {
    unless(n % 2 == 1, () => console.log(n, "is even"));
});

// There is a built-in array method, forEach, that provides something like a for/of loop as a higher-order function.
["A", "B"].forEach(l => console.log(l));


// Filtering arrays
// Transforming with map
// Summarizing with reduce

// Composability