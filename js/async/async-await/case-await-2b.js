// reference: MDN

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

function resolveAfter1Second(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 1000);
    });
}

var sequential = async function () {
    console.time('sequential');
    const slow = await resolveAfter2Seconds(1.2);
    const fast = await resolveAfter1Second(1.1);
    console.log(slow);
    console.log(fast);
    console.timeEnd('sequential');
}

var concurrent = async function () {
    console.time('concurrent');
    const slow = resolveAfter2Seconds(2.2);
    const fast = resolveAfter1Second(2.1);
    console.log(await slow);
    console.log(await fast); // waits for slow to finish, even though fast is already done!
    console.timeEnd('concurrent');

}

var stillSerial = function () {
    console.time('stillSerial');
    Promise.all([resolveAfter2Seconds(3.2), resolveAfter1Second(3.1)]).then(v => {
        console.log(v);
        console.timeEnd('stillSerial');
    });
}

var parallel = function () {
    resolveAfter2Seconds(4.2).then(v => console.log(v));
    resolveAfter1Second(4.1).then(v => console.log(v));
}

sequential(); // takes 2+1 seconds in total
concurrent(); // takes 2 seconds in total, which is the time the slowest timer needs.
stillSerial(); // same as before
parallel(); // trully parallel