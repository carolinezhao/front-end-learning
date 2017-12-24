// 计算属性 Computed Properties

var vm = new Vue({
    el: '#app', // 注意别丢了 id 前面的 # ！！
    data: {
        message: 'Hello Rabbit!'
    },
    computed: {
        // 声明一个计算属性 reversedMessage。提供的函数用作 vm.reversedMessage 的 getter 函数。
        // 当 vm.message 发生改变时，所有依赖 vm.reversedMessage 的绑定也会更新。
        reversedMessage: function () {
            
            return this.message.split('').reverse().join('')
        },
        now:function(){
            console.log("computed")
            return Date.now()
        }
    },
    methods: {
        reversedMessage: function () {
            console.log("methods")            
            return this.message.split('').reverse().join('')
        }
    }
})

// *** 计算属性缓存 vs 方法 Computed Caching vs Methods ***

// 可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。
// 不同的是，计算属性是基于它们的依赖进行缓存的，只有在它的相关依赖发生改变时才会重新求值。
// 这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。

// 相比之下，每当触发重新渲染时，调用方法将总会再次执行函数。

// 为什么需要缓存？假设有一个性能开销比较大的的计算属性 A，它需要遍历一个巨大的数组并做大量的计算，可能有其他的计算属性依赖于 A 。
// 如果没有缓存，我们将不可避免的多次执行 A 的 getter！如果你不希望有缓存，请用方法来替代。

