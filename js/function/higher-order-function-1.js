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


// test data
let dataSet = [{
    name: 'a',
    city: 'bj',
    senior: true
}, {
    name: 'b',
    city: 'sh',
    senior: false
}, {
    name: 'c',
    city: 'sz',
    senior: true
}];

// Filtering arrays
function filterFunc(array, condition) {
    let passed = [];
    for (item of array) {
        if (condition(item)) {
            passed.push(item);
        }
    }
    return passed;
}

console.log(filterFunc(dataSet, obj => obj.senior));

// built-in array method
console.log(dataSet.filter(obj => obj.city === 'sh'));


// Transforming with map
function mapFunc(array, transform) {
    let mapped = [];
    for (item of array) {
        mapped.push(transform(item));
    }
    return mapped;
}

let seniorSet = filterFunc(dataSet, obj => obj.senior);
console.log(mapFunc(seniorSet, obj => obj.name));
console.log(mapFunc(dataSet, obj => obj.name.toUpperCase()));

// built-in array method
console.log(dataSet.map(obj => obj.city));


// Summarizing with reduce
function reduceFunc(array, combine, start) {
    let current = start;
    for (item of array) {
        current = combine(item, current);
    }
    return current;
}
console.log(reduceFunc([1, 2, 3, 4, 5], (a, b) => a + b, 10));

// built-in array method
console.log([1, 2, 3, 4, 5].reduce((prev, curr) => prev + curr, 10));


// Composability
// Higher-order functions start to shine when you need to compose operations.
let team1 = [{
    show: true,
    score: 90
}, {
    show: false
}, {
    show: true,
    score: 66
}, {
    show: true,
    score: 78
}];

let team2 = [{
    show: true,
    score: 80
}, {
    show: true,
    score: 75
}, {
    show: true,
    score: 82
}, {
    show: false
}]

function average(array) {
    console.log(array);
    return array.reduce((a, b) => a + b) / array.length;
}

function getScore(array) {
    return array.filter(item => item.show).map(item => item.score)
}

let average1 = Math.round(average(getScore(team1)));
let average2 = Math.round(average(getScore(team2)));
console.log(average1, average2);