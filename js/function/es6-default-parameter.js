// ES5 模拟默认参数值
function makeRequest1(url, timeout, callback) {
    // 如果不传入参数值，则默认为 undefined
    // 常用逻辑或赋予默认值，如果第一个值为 false，则返回第二个值 (有缺陷，即使合法值也有可能是 false)
    // timeout = timeout || 2000
    // callback = callback || function () {}
    // 改进：检查类型
    timeout = (typeof timeout !== 'undefined') ? timeout : 2000
    callback = (typeof callback !== 'undefined') ? callback : function () {}
}

// ES6 设置默认参数值
// 可以为任意参数指定默认值，在已指定默认值的参数后可以继续声明无默认值的参数。
function makeRequest2(url, timeout = 2000, callback = function () {}) {}

// 使用默认值的情况：不传入值；主动传入 undefined
// 注意：null 是合法值，不会使用默认值。

// 未完