// reference: https://javascript.info/async-await

// async functions
// The keyword "async" before a function means: a function always returns a promise. 
// If the code has return <non-promise> in it, then js automatically wraps it into a resolved promise with that value.
async function createPromise() {
    return 2; // 自动封装为 Promise.resolve()
}
createPromise().then(console.log);

async function wrapPromise() {
    return Promise.resolve(3);
}
wrapPromise().then(console.log);

// 如果没有 return 值，相当于 Promise.resolve(undefined)


// await
// The keyword await makes js wait until that promise settles and returns its result.
// It works only inside async functions.
(async function useAwait() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done'), 1000)
    });
    let result = await promise;
    console.log(result);
})();
// await literally makes js wait until the promise settles, and then go on with the result.
// That doesn’t cost any CPU resources, because the engine can do other jobs meanwhile: execute other scripts, handle events etc.

// 如果 await 后面的不是 Promise，会自动转化为 resolved promise (包括 Error)。
async function wrapNonPromise1() {
    return await 6;
}
console.log(wrapNonPromise1()); // resolved, value: 6

async function wrapNonPromise2() {
    return await new Error('error');
}
console.log(wrapNonPromise2()); // resolved, value: Error: error ...


// await accepts thenables
// If await gets a non-promise object with .then, it calls that method providing native functions resolve, reject as arguments. 
// Then await waits until one of them is called and then proceeds with the result.
class Thenable {
    constructor(num) {
        this.num = num;
    }
    then(resolve, reject) {
        setTimeout(() => resolve(this.num * 2), 1000);
    }
};

(async function wrapThenable() {
    let result = await new Thenable(5);
    console.log(result);
})();


// async methods
class Waiter {
    async wait(num) {
        return await Promise.resolve(num);
    }
}

new Waiter().wait(8)
    .then(console.log);


// error handling
async function f1() {
    await Promise.reject(new Error("Whoops!"));
}
f1().catch(console.log);

async function f2() {
    throw new Error("Whoops!");
}
f2().catch(console.log);

// async/await makes it possible to handle both synchronous and asynchronous errors with the same construct, good old try/catch.
async function f3() {
    try {
        let response = await Promise.reject('Rejected!');
    } catch (err) {
        console.log(err);
    }
}
f3().catch(console.log);
// But at the top level of the code, when we’re outside of any async function, we’re syntactically unable to use await, so it’s a normal practice to add .then/catch to handle the final result or falling-through errors.