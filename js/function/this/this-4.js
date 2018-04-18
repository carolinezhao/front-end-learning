function baz() {
    // 当前调用栈：baz
    // 当前调用位置：全局作用域
    console.log('baz');
    bar(); // bar 的调用位置
}

function bar() {
    // 当前调用栈：baz -> bar
    // 当前调用位置：baz 中
    console.log('bar');
    foo(); // foo 的调用位置
}

function foo() {
    // 当前调用栈：baz -> bar -> foo
    // 当前调用位置：bar 中
    console.log('foo');
}

baz(); // baz 的调用位置