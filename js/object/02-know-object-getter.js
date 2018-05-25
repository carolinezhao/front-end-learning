var myObject = {
    // 给 a 定义一个 getter
    get a() {
        return 2;
    }
};

// 参数：目标对象，属性名，描述符
Object.defineProperty(myObject, 'b', {
    // 给 b 设置一个 getter
    get: function () {
        return this.a * 2;
    },
    // 确保 b 会出现在对象的属性列表中
    enumerable: true
});

// 以上两种方法都会在对象中创建一个不包含值的属性。
// 对于这个属性的访问会自动调用一个隐藏函数，它的返回值会被当作属性访问的返回值。

myObject.a = 3;

// 由于只定义了 a 的 getter，所以对 a 的值进行设置时 set 操作会忽略赋值操作，不会抛出错误。
// 即便有合法的 setter，由于自定义的 getter 只会返回 2，所以 set 操作是没有意义的。？？

console.log(myObject.a); // 2
console.log(myObject.b); // 4


// 为了让属性更合理，还应当定义 setter，它会覆盖单个属性默认的 [[Put]] (也被称为赋值) 操作。
// 通常 getter 和 setter 是成对出现的 (只定义一个会产生意外行为)。

var obj = {
    // 定义 getter
    get a() {
        return this._a_;
    },
    // 定义 setter
    set a(val) {
        this._a_ = val * 2;
    }
};

obj.a = 2;

// 把赋值操作 ([[Put]]) 中的值 2 存储到了另一个变量 _a_ 中，这种写法和普通属性一样。

console.log(obj.a); // 4