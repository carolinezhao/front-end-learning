/*
为什么使用 this

这段代码可以在不同的上下文对象 (me 和 you) 中重复使用函数 identify() 和 speak()，不用针对每个对象编写不同版本的函数。
but 需要额外调用 identify()

this 提供了一种更优雅的方式来隐式“传递”一个对象引用，可以将 API 设计得更简洁且易于复用。

如果不使用 this，就需要给 identify() 和 speak() 显式传入一个上下文对象。见 this-1-2.this
*/

function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = 'Hello, I\'m ' + identify.call(this);
    console.log(greeting);
}

var me = {
    name: 'caroline'
}

var you = {
    name: 'bernie'
}

identify.call(me);
identify.call(you);

speak.call(me);
speak.call(you);