// http://hao.jser.com/archive/5308/

// 考察：闭包，this, call, bind

var name = 'global';

var obj = {
    name: 'obj',
    dose: function () {
        this.name = 'dose';
        // case1
        return function () {
            return this.name;
        }
        // case2
        // return function(){
        //     return this.name;
        // }.bind(this)
    }
}

console.log(obj.dose().call(this));

// 注意：obj.dose 是被调用后才调用 call (即返回值调用了 call)。
// case1
// call 调用函数时传入的 this 是全局对象。
// case2
// 用 bind 绑定了 this，this 指向函数所在对象 obj。call 传入的 this 不起作用。

// more：闭包的好处和坏处