// https://github.com/axios/axios

// 浏览器中使用，通过 script 引入

// Node.js 引入模块
// const axios = require('axios');

// 如果服务器数据是 json
// Promise 直接返回数据，是 json 格式，需要经过 JSON.parse() 转换为 object 使用；
// axios 返回的数据在 response.data 中，本身就是 object。

// Promise 的使用见 case-promise-ajax.js

axios.get('http://localhost:3000/data')
    .then(response => {
        console.log(response);
        var secondURL = response.data[0].url;
        console.log(secondURL);
        return axios.get(secondURL);
    })
    .then(response => {
        console.log(response);
        var thirdURL = response.data.url;
        console.log(thirdURL);
        return axios.get(thirdURL);
    })
    .then(response => {
        console.log(response.data.token);
    })
    .catch(error => {
        console.log(error);
    });