// 软绑定

// 硬绑定见 this-7-2.js
// 硬绑定的缺点：降低了函数的灵活性，使用之后就无法使用隐式绑定或显式绑定来修改 this。

// 软绑定：给默认绑定指定一个全局对象和 undefined 之外的值，实现和硬绑定相同的效果，同时保留隐式绑定或显式绑定修改 this 的能力。

if (!Function.prototype.softBind) {
    Function.prototype.softBind = function (obj) {
        var fn = this;
        var curried = [].slice.call(arguments, 1);
        var bound = function () {
            return fn.apply(
                (!this || this === (window || global)) ? obj : this,
                curried.concat.apply(curried, arguments)
            );
        };
        bound.prototype = Object.create(fn.prototype);
        return bound;
    };
}

function foo() {
    console.log(this.name);
}

var obj = {
        name: 'a'
    },
    o1 = {
        name: 'b'
    },
    o2 = {
        name: 'c'
    };

// 软绑定
var fooFun = foo.softBind(obj);
o1.foo = foo.softBind(obj);

// 硬绑定
// var fooFun = foo.bind(obj);
// o1.foo = foo.bind(obj);

fooFun();

o1.foo();

fooFun.call(o2);

setTimeout(o1.foo, 1000);