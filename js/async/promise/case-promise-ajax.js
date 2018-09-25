// reference
// https://bitsofco.de/javascript-promises-101/
// https://developers.google.com/web/fundamentals/primers/promises#xmlhttprequest_promise


// 对 XMLHttpRequest 执行 Promise
function get(url) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function () { // This is called even on 404 etc
            if (req.status == 200) {
                // resolve(req.response);
                resolve(req.responseText);
            } else {
                reject(Error(req.statusText));
            }
        };
        req.onerror = function () { // Handle network errors
            reject(Error("Network Error"));
        };
        // req.onreadystatechange = function () {
        //     if (req.readyState === 4 && req.status === 200) {
        //         resolve(...)
        //     } else {
        //         reject(...)
        //     }
        // }
        req.send();
    });
}


// 使用 json-server 作为服务器，见 ajax/db.json

// 按顺序执行多个异步任务
get('http://localhost:3000/data')
    .then(function (response) {
        response = JSON.parse(response);
        var secondURL = response[0].url
        console.log(secondURL);
        return get(secondURL); /* Return another Promise */
    })
    .then(function (response) {
        response = JSON.parse(response);
        var thirdURL = response.url
        console.log(thirdURL);
        return get(thirdURL); /* Return another Promise */
    })
    .then(response => {
        response = JSON.parse(response);
        console.log(response.token);
    })
    .catch(function (err) {
        // handleError(err);
    });


// 在所有子任务完成后执行下一个异步操作
var arrayOfURLs = ['http://localhost:3000/posts', 'http://localhost:3000/comments', 'http://localhost:3000/login'];
var arrayOfPromises = arrayOfURLs.map(get);

Promise.all(arrayOfPromises)
    .then(function (arrayOfResults) {
        /* Do something when all Promises are resolved */
        var newResults = arrayOfResults.map(result => JSON.parse(result));
        console.log(newResults);
    })
    .catch(function (err) {
        /* Handle error if any of Promises fails */
    });