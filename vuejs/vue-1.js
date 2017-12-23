// 声明式渲染 Declarative Rendering

// 文本插值
// The data and the DOM are now linked, and everything is now reactive.
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    }
})

// 绑定元素特性
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        msg: 'This title comes from Vue'
    }
})


// 条件与循环 Conditionals and Loops