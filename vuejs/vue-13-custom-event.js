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


// 给组件绑定原生事件
// .sync 修饰符


// 使用自定义事件的表单输入组件
// 自定义事件可以用来创建自定义的表单输入组件，使用 v-model 来进行数据双向绑定。
// <input v-model="something"> 是以下示例的语法糖：
// <input
//   v-bind:value="something"
//   v-on:input="something = $event.target.value">
// 在组件中使用时，它相当于简写：
// <custom-input
//   v-bind:value="something"
//   v-on:input="something = arguments[0]">
// </custom-input>

// 要让组件的 v-model 生效，它应该：
// 1）接受一个 value prop
// 2）在有新的值时触发 input 事件并将新值作为参数

// 子组件引用
// 有时需要在 JavaScript 中直接访问子组件，可使用 ref 给元素或子组件注册引用信息。
// 引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例：
// <!-- vm.$refs.p will be the DOM node -->
// <p ref="p">hello</p>
// <!-- vm.$refs.child will be the child comp instance -->
// <child-comp ref="child"></child-comp>
// $refs 只在组件渲染完成后才填充，并且它是非响应式的。它仅仅是一个直接操作子组件的应急方案——应当避免在模板或计算属性中使用 $refs。

Vue.component('currency-input', {
    template: `<span>
               $<input ref="input" v-bind:value="value" v-on:input="updateValue($event.target.value)">
               </span>`,
    props: ['value'],
    methods: {
        // 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
        updateValue: function (value) {
            var formattedValue = value
                // 删除两侧的空格
                .trim()
                // 保留2位小数
                // slice(start,end+1) 返回被提取的部分
                .slice(
                    0,
                    value.indexOf('.') === -1 // 返回值为1时，小数点不存在
                    ?
                    value.length :
                    value.indexOf('.') + 3 // 若有小数点，则取小数点后两位的长度，注意是数组元素位置下标+1
                )
            console.log(value.length, value.indexOf('.'), value.indexOf('.') + 3)
            // 如果值尚不合规，则手动覆盖为合规的值
            if (formattedValue !== value) {
                this.$refs.input.value = formattedValue
            }
            // 通过 input 事件带出数值
            // Number() 函数把对象转换为数字
            this.$emit('input', Number(formattedValue))
        }
    }
})



var vm = new Vue({
    el: '#app',
    data: {
        total: 0,
        price:''
    },
    methods: {
        incrementTotal: function () {
            this.total += 1
        }
    }
})