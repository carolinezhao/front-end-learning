function Foo(name) {
    this.name = name;
}

Foo.prototype.myName = function () {
    return this.name;
}

function Bar(name, label) {
    Foo.call(this, name);
    this.label = label;
}

// 声明 function Bar() {} 时会有一个 .prototype 关联到默认对象，但是这个对象并不是想要的。
// 因此需要创建一个新对象并把它关联到希望要的对象上，直接把原始的关联对象抛弃。

// 创建了一个新的 Bar.prototype 对象并关联到 Foo.prototype (抛弃旧的其实是缺点，ES6 的改进见下)
Bar.prototype = Object.create(Foo.prototype);
// 这样就没有 Bar.prototype.constructor 了，如果需要的话可以手动修复。

// 不推荐的做法：使用 Foo 的构造函数调用 (可能会有副作用)
// Bar.prototype = new Foo();

// ES6 添加了辅助函数直接修改关联 (即不需要抛弃默认的 Bar.prototype，而是修改它)
// Object.setPrototypeOf(Bar.prototype, Foo.prototype)

Bar.prototype.myLabel = function () {
    return this.label;
}

var instance = new Bar('a', 'b');

console.log(instance);
console.log(instance.myName());
console.log(instance.myLabel());