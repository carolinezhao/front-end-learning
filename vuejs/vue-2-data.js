// 数据对象
var data = {
    a: 1,
    visitCount: 0,
    todos: [],
    error: null
}

// 创建实例
// 实例中的数据改变时，视图会进行重渲染(数据更新)，但只对原始创建时 data 中的属性是响应式的(比如 a)，对新添加的属性无效。
// 如果晚些时候需要一个属性，但是一开始它为空或不存在，那么仅需要设置一些初始值(比如 todos)。
var vm = new Vue({
    el: '#app', // 根据 id 获取到元素节点
    data: data // 获取到 data 对象
})

// 引用相同的对象
console.log(vm.a === data.a);
vm.a = 5;
console.log(data.a);

// 除了 data 属性，一些有用的实例属性与方法都有前缀 $，以便与用户定义的属性区分开来。
console.log(vm.$data === data);
console.log(typeof vm.$data);
var appDiv = document.getElementById('app');
console.log(vm.$el === appDiv);
// $watch 是一个实例方法
vm.$watch('a', function (newValue, oldValue) {
})