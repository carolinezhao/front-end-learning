// 组件化应用构建 Composing with Components
// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
    // "prop"，类似于一个自定义特性，名为 todo。
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [{
            id: 0,
            text: 'Vegetables'
        }, {
            id: 1,
            text: 'Meat'
        }, {
            id: 2,
            text: 'Coffee'
        }]
    }
})