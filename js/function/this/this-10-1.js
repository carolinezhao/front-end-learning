// 如果 null 或 undefined 作为第一个参数传入 call/apply/bind，那么在调用时应用的是默认绑定规则，即 this 绑定到全局对象。

function foo() {
    console.log(this.a);
}

var a = 10;

foo.call(null);

// 需要传入 null 的情况 (作为一个占位值)：
// 使用 apply 来“展开”数组，作为参数传入函数 (新方法是使用展开运算符)
// 使用 bind 对参数进行柯里化 (预先设置一些参数)

function bar(a, b) {
    console.log(a, b);
}

bar.apply(null, [2, 3]);
bar(...[2, 3]);

var baz = bar.bind(null, 2);
baz(3);

// 但是使用 null 可能会产生一些副作用。
// 当某个函数确实使用了 this (比如第三方库的一个函数)，这样会导致改变 this 绑定，甚至修改全局对象。

// 更安全的做法：传入一个空的非委托的对象 (没有原型链)。
// 可以忽略 this 绑定，且任何对于 this 的使用都会被限制在这个空对象中，不会影响全局对象。

var emptyObj = Object.create(null);
bar.apply(emptyObj, [2, 3]);