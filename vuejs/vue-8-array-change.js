var vm = new Vue({
    el: '#app',
    data: {
        items: [{
            todo: 'reading document'
        }, {
            todo: 'coding'
        }, {
            todo: 'review'
        }]
    },
    methods:{
        replace:function() {
            // 非变异方法
            this.items = this.items.filter(function(item) {
                return item.todo.match(/coding/) // 这是啥意思？
            })
        }
    }
})