let promise = readFile('example.txt');

promise.then(function (contents) {
    // 完成
    console.log(contents);
}, function (err) {
    // 拒绝
    console.error(err.message);
});

promise.then(null, function (err) {
    // 拒绝
    console.error(err.message);
});

promise.catch(function (err) {
    // 拒绝
    console.error(err.message);
});

promise.then(function (contents) {
    console.log(contents);
    promise.then(function (contents) {
        console.log(contents);
    });
});