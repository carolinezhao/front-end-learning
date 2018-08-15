// Fetch API 提供的 fetch() 全局函数可以发起异步请求，且支持 Promise 回调。

// simple example
fetch('http://localhost:3000/posts') // 开启 json-server 进行测试
    .then(function (response) { // 返回一个包含响应结果的 promise (一个 Response 对象)
        return response.json(); // 使用一个 JSON 对象来读取 Response 流中的数据
    })
    .then(function (myJson) {
        console.log(myJson);
        console.log(Array.isArray(myJson));
    });

// Body is implemented by both Request and Response — this provides these objects with 
// an associated body (a byte stream), 
// a used flag(initially unset), 
// a MIME type (initially the empty byte sequence).

// 对于不同的 MIME 类型，Body 有相应不同的方法来读取数据。
// 比如用 .json() 对应 JSON；.blob() 对应图片。


// Example POST method implementation:
// postData('real url', {
//         answer: 42
//     })
//     .then(data => console.log(data)) // JSON from `response.json()` call
//     .catch(error => console.error(error))

function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
            body: JSON.stringify(data), // must match 'Content-Type' header (请求发送的数据)
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit (cookie 的跨域策略)
            headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json'
            },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin (请求的模式，是否跨域等)
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // *client, no-referrer
        })
        .then(response => response.json()) // parses response to JSON
}