// 每个 Vue 实例都实现了事件接口 (events interface)：
// 使用 $on(eventName) 监听事件
// 使用 $emit(eventName) 触发事件
// 父组件可以在使用子组件的地方直接用 v-on 来监听子组件触发的事件。
// 不能用 $on 侦听子组件释放的事件，而必须在模板里直接用 v-on 绑定。
// ？？？在本例中，子组件已经和它外部完全解耦了。它所做的只是报告自己的内部事件，因为父组件可能会关心这些事件。请注意这一点很重要。

Vue.component('button-counter', {
    template: '<button v-on:click="incrementCounter">{{counter}}</button>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter: function () {
            this.counter += 1
            this.$emit('increment')
        }
    }
})

var vm = new Vue({
    el: '#app',
    data: {
        total: 0
    },
    methods: {
        incrementTotal: function () {
            this.total += 1
        }
    }
})