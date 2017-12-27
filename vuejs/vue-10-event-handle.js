var vm = new Vue({
    el: '#app',
    data: {
        counter: 0,
        name: 'Vue.js'
    },
    methods: {
        greet: function (event) {
            alert('Hello ' + this.name + '!')
            // event 是原生 DOM 事件
            if (event) {
                alert(event.target.tagName)
            }
        },
        say: function (message) {
            alert(message)
        },
        warn: function (message, event) {
            // 现在可以访问原生事件对象？？？
            if (event) {
                event.preventDefault()
            }
            alert(message)
        }
    }
})