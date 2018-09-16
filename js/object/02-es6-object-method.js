// Object.is()
// Object.assign()

// Object.is() 用于弥补全等运算符 (===) 的不准确运算。
// +0 和 -0 不相等；NaN 和 NaN 等价。
console.log(+0 === -0);
console.log(Object.is(+0, -0)); // false
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN)); // true
// 其他情况下两者结果一致。


// 混合 (mixin) 是 js 中实现对象组合的一种模式。很多库都实现了类似的方法。
// Object.assign(receiver, supplier1, supplier2 ...) 实现相同的功能。
// 参数1 接收对象；
// 参数2及以后 任意数量的源对象 (按顺序复制属性，如果有同名，则后来的覆盖前面的)；
// 返回值 接收对象 (直接改变)
var receiver = {};
Object.assign(receiver, {
    type: 'js',
    name: 'file.js'
}, {
    type: 'css'
});

console.log(receiver);

// 提供者的访问器属性会变为接收对象的数据属性。
var supplier = {
    get name() { // 访问器属性
        return 'caroline';
    }
};

var newObj = Object.assign({}, supplier);

var descriptor = Object.getOwnPropertyDescriptor(newObj, 'name');
console.log(descriptor.value);
console.log(descriptor.get); // undefined