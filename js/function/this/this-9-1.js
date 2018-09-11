function foo() {
    console.log(this.a);
}

var obj1 = {
    a: 10,
    foo: foo
}

var obj2 = {
    a: 20,
    foo: foo
}

// 隐式绑定
obj1.foo()
obj2.foo()

// 显式绑定
obj1.foo.call(obj2)
obj1.foo.call(obj1)

// 优先级：显式绑定 > 隐式绑定