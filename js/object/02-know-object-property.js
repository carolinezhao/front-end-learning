// let foo = () => this.a;
function foo() {
    return this.a;
}

// 箭头函数: 在 devtools 中可以看到 scope - script - foo;
// 普通函数: scope 中不显示 script;
// 两者对 this 的处理方式不同。

var someFoo = foo; // 对 foo 的变量引用

var obj = {
    a: 8,
    someFoo: foo
}

var a = 9;

console.log(foo)
console.log(foo()) // 9 (chrome)

console.log(someFoo)
console.log(someFoo()) // 9 (chrome)

console.log(obj.someFoo)
console.log(obj.someFoo()) // 箭头函数 9，普通函数 8 (chrome)

// someFoo 和 obj.someFoo 只是对于同一个函数的不同引用，并不能说明这个函数是特别的或者“属于”某个对象。

// 即使是在对象中声明一个函数表达式，这个函数也不会“属于”这个对象，它们只是对相同函数对象的多个引用。

var myobj = {
    b: 10,
    // foo1: () => this.b
    foo1: function() {
        return this.b
    }
}

var b = 20;

var someFoo1 = myobj.foo1;

console.log(someFoo1);
console.log(someFoo1()); // 20 (chrome)

console.log(myobj.foo1);
console.log(myobj.foo1()); // 箭头函数 20，普通函数 10 (chrome)