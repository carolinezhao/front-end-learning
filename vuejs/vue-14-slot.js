// 为了让组件可以组合，需要一种方式来混合父组件的内容与子组件自己的模板。这个过程被称为内容分发。
// Vue.js 实现了一个内容分发 API，使用特殊的 <slot> 元素作为原始内容的插槽。

// 编译作用域
// 父组件模板的内容在父组件作用域内编译；子组件模板的内容在子组件作用域内编译。
// ？？一个常见错误是试图在父组件模板内将一个指令绑定到子组件的属性/方法。
// 如果要绑定子组件作用域内的指令到一个组件的根节点，应当在子组件自己的模板里做。
// 被分发的内容会在父作用域内编译。

// 单个插槽
// 除非子组件模板包含至少一个 <slot> 插口，否则父组件的内容将会被丢弃。
// 当子组件模板只有一个没有属性的插槽时，父组件传入的整个内容片段将插入到插槽所在的 DOM 位置，并替换掉插槽标签本身。
// 最初在 <slot> 标签中的任何内容都被视为备用内容。备用内容在子组件的作用域内编译，并且只有在宿主元素为空，且没有要插入的内容时才显示备用内容。
// 父组件
Vue.component('parent-component', {
    template: `<div>
    <h1>我是父组件的标题</h1>
    <child-component>
      <p>这是一些初始内容</p>
      <p>这是更多的初始内容</p>
    </child-component>
  </div>`,
    data: function () {
        return {}
    }
})
// 子组件
Vue.component('child-component', {
    template: `<div>
               <h2>我是子组件的标题</h2>
               <slot>只有在没有要分发的内容时才会显示。</slot>
               </div>`,
    data: function () {
        return {}
    }
})

// 具名插槽
// <slot> 元素可以用一个特殊的特性 name 来进一步配置如何分发内容。多个插槽可以有不同的名字。具名插槽将匹配内容片段中有对应 slot 特性的元素。
// 仍然可以有一个匿名插槽，它是默认插槽，作为找不到匹配的内容片段的备用插槽。如果没有默认插槽，这些找不到匹配的内容片段将被抛弃。
// 在设计组合使用的组件时，内容分发 API 是非常有用的机制。
// 父组件，模板中的子组件标签可能在最外层！！
Vue.component('parent-component-2', {
    template: `<child-component-2>
    <h1 slot="header">这里可能是一个页面标题</h1> 
    <p>主要内容的一个段落。</p>
    <p>另一个主要段落。</p>
    <p slot="footer">这里有一些联系信息</p>
  </child-component-2>`
})
// 子组件
Vue.component('child-component-2', {
    template: `<div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>`
})

// 作用域插槽（还没看）

var vm = new Vue({
    el: '#app',
    data: {
    },
    methods: {
    }
})