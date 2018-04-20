// 第三方库的许多函数，以及 js 语言和宿主环境中许多新的内置函数，都提供了一个可选的参数，通常被称为“上下文 (context)”，其作用和 bind(..) 一样，确保回调函数使用指定的 this。
function foo(el) {
    console.log(el, this.id);
}

var obj = {
    id: 'awesome'
}

// 书中的写法会报错 TypeError: Cannot read property 'forEach' of undefined
// [1, 2, 3].forEach(foo, obj);

var array = [1, 2, 3];
array.forEach(foo, obj); // 调用 foo 时把 this 绑定到 obj
array.map(foo, obj)

// 这些函数实际上就是通过 call() 或 apply() 实现了显式绑定。