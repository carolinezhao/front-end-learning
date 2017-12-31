// 文档最前面文字部分需要看

// DOM 模板解析注意事项 (暂时没用上)

// 全局注册
// Vue.component(tagName, options)
// 注意确保在初始化根实例之前注册组件
Vue.component('my-component', {
    template: '<div>A global custom component!</div>'
})

// 局部注册
// 可以通过某个 Vue 实例/组件的实例选项 components 注册仅在其作用域中可用的组件
// parent 实例 == root 实例 局部注册就和全局注册一样了？
var Child = {
    template: '<div>A local custom component!</div>'
}



// 组件中 data 必须是函数
Vue.component('simple-counter', {
    template: '<button v-on:click="counter +=1">{{counter}}</button>',
    data: function () {
        // 为每个组件返回全新的数据
        return {
            counter: 0
        }
    }
})
// 反例：如果不是函数会怎样
// var data = {
//     counter: 0
// }
// Vue.component('simple-counter', {
//     template: '<button v-on:click="counter +=1">{{counter}}</button>',
//     // 技术上 data 的确是一个函数了，因此 Vue 不会警告，但却给每个组件实例返回了同一个对象的引用
//     data: function () {
//         return data
//     }
// })
// 三个组件实例共享了同一个 data 对象，因此递增一个 counter 会影响所有组件




// 组件组合
// 父子组件的关系：父组件通过 prop 给子组件下发数据，子组件通过事件给父组件发送消息。

// 使用 Prop 传递数据
// 组件实例的作用域是孤立的。这意味着不能 (也不应该) 在子组件的模板内直接引用父组件的数据。父组件的数据需要通过 prop 才能下发到子组件中。
// HTML 特性是不区分大小写的。所以，当使用的不是字符串模板时，camelCase (驼峰式命名) 的 prop 需要转换为相对应的 kebab-case (短横线分隔式命名)。
// 在 JavaScript 中使用 camelCase, 在 HTML 中使用 kebab-case
Vue.component('child',{
    // 用 props 选项声明它预期的数据
    props:['myMessage'],
    // 就像 data 一样，prop 也可以在模板中使用，同样也可以在 vm 实例中通过 this.message 来使用
    template:'<span>{{myMessage}}</span>'
})






var vm = new Vue({
    el: '#app',
    data: {

    },
    components: {

    }
})

// 在哪儿注册为子实例？
var vm2 = new Vue({
    el: '#container',
    components: {
        // <my-comp> 只在父组件模板中可用？？？
        'my-comp': Child
    }
})