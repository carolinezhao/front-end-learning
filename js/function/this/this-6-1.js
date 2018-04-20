function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo // 被当作引用属性添加到 obj 中
}
// 无论是直接在 obj 中定义还是先定义再添加为引用属性，这个函数严格来说都不属于 obj 对象。
// 但是调用位置会使用 obj 上下文来引用函数，因此可以说函数被调用时 obj 对象“拥有”或“包含”它。

obj.foo(); // 2 (node, chrome)

// 当函数引用有上下文对象时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象。
// 调用 foo() 时 this 被绑定到 obj，因此 this.a 指向 obj.a。

// 对象属性引用链中只有最顶层或最后一层会影响调用位置。？？即，距离函数最近的一层。
function foo1() {
    console.log(this.a);    
}

var obj2 = {
    a: 10,
    foo1: foo1
}

var obj1 = {
    a: 20,
    obj2: obj2
}

obj1.obj2.foo1(); // 10 (node, chrome)