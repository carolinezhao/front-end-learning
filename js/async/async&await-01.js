// reference: https://javascript.info/async-await

// async functions
// The word "async" means: a function always returns a promise. 
// If the code has return <non-promise> in it, then js automatically wraps it into a resolved promise with that value.

async function createPromise() {
    return 2;
}
createPromise().then(console.log);

async function wrapPromise() {
    return Promise.resolve(3);
}
wrapPromise().then(console.log);


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