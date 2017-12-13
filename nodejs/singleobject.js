function Hello() {
    var name;
    this.setName = function (thyName) {
        name = thyName;
    };
    this.sayHello = function () {
        console.log('Hello ' + name);
    };
}

// 方法 1
// exports.Hello = Hello;
// 相当于 object.method = function;
// 等号左边的 Hello 是名称，右边的是 constructor
// 外部获取 Hello 对象时，需要写为 require('./singleobject').Hello
// require() 与 exports 对应。

// 方法 2
module.exports = Hello;
// 外部引用时，接口对象就是 Hello 对象本身，而不是原来的 exports。
// exports 本身只是一个空对象，{}，专门用来声明接口，本质上是通过它为模块闭包（？？？）的内部建了一个有限的访问接口。
// 因为它没有任何特殊的地方，所以可以用其它东西来代替，比如 Hello 对象。
// 不能直接对 exports 赋值。exports 和 module.exports 指向同一个对象，它本身会在模块执行结束后释放，但 module 不会。因此只能通过指定 module.exports 来改变访问接口。