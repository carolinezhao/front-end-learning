// 下拉选择框的复用
// 原文链接：https://www.jianshu.com/p/9ad1ba89a04b

// 全局注册组件
Vue.component('my-select', {
    // 这里的数据没有用上？
    data: function () {
        return {
            city: ['NY', 'DC', 'SF']
        }
    },
    props: ['list'], // list 为什么可以表示父组件里的数据？
    template: `<section class="wrap">
    <div class="searchInput clearFix">
        <div class="clearFix">
            <input type="text" class="keyWord" value="">
            <my-button></my-button>
            <br>
        </div>
        <my-list :list='list'></my-list>
    </div>
</section>`
})

// 注册子组件：下拉列表。把父组件中下拉列表的部分改为子组件标签。
Vue.component('my-list', {
    props: ['list'],
    template: `<ul class="list">
    <li v-for='item in list'>{{item}}</li>
</ul>`
})

// 注册子组件：按钮。
Vue.component('my-button', {
    template: `<input type="button" value="search">`
})


// 组件结构关系：最外层是 root 实例，其次是 my-select，最内层是 my-list
// 在 root 中定义 data，数据从 root 向下传递
// 在 my-select 中声明数据传递 props
// 在 my-select 中 list 的标签里添加绑定

var vm = new Vue({
    el: '#app',
    data: {
        city: ['Beijing', 'Shanghai', 'Shenzhen', 'Guangzhou', 'Hangzhou'],
        frontEnd: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Node.js']
    }
})