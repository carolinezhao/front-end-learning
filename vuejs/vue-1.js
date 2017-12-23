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
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: false
    }
})
app3.seen = true;

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [{
            text: 'Learn JavaScript'
        }, {
            text: 'Learn Vue.js'
        }, {
            text: 'Build something awesome'
        }]
    }
})
app4.todos.push({
    text: 'New item'
});


// 处理用户输入 Handling User Input
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello JavaScript!'
    }
})