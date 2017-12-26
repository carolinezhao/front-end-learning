var vm = new Vue({
    el: '#app',
    data: {
        parentTodo: 'Framework',
        // 数组中对象的属性值
        // v-for="item in items"
        // {{item.todo}}
        items: [{
                todo: 'learn Vue.js'
            },
            {
                todo: 'learn React.js'
            }
        ],
        // 对象中的属性值
        // v-for="value in object"
        // {{value}}
        object: {
            structure: 'HTML',
            style: 'CSS',
            event: 'JavaScript'
        }
    }
})