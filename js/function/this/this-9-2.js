function foo(sth) {
    console.log(this.a);
    this.a = sth
}

var obj1 = {
    a: 10,
    foo: foo
}

var obj2 = {}

obj1.foo(2)
console.log(obj1.a);

obj1.foo.call(obj2, 3)
console.log(obj1.a, obj2.a);

var bar = new obj1.foo(4)
console.log(obj1.a, bar.a);
// 优先级：new 绑定 > 隐式绑定

console.log(obj1, obj2, bar);