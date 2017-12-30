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
var data = {
    counter: 0
}
Vue.component('simple-counter', {
    template: '<button v-on:click="counter +=1">{{counter}}</button>',
    // 技术上 data 的确是一个函数了，因此 Vue 不会警告，但却给每个组件实例返回了同一个对象的引用
    data: function () {
        return data
    }
})
// 三个组件实例共享了同一个 data 对象，因此递增一个 counter 会影响所有组件



var vm = new Vue({
    el: '#app',
    data: {

    },
    components: {

    }
})

var vm2 = new Vue({
    el: '#container',
    components: {
        // <my-comp> 只在父组件模板中可用？？？
        'my-comp': Child
    }
})