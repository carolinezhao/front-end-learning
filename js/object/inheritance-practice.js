// https://github.com/Sandra310/blog/issues/2

// 考察继承和 this

function Parent() {
    this.a = 1;
    this.b = [1, 2, this.a];
    this.c = {
        demo: 5
    };
    this.show = function () {
        console.log(this.a, this.b, this.c.demo);
    }
}

function Child() {
    this.a = 2;
    this.change = function () {
        this.b.push(this.a);
        this.a = this.b.length;
        this.c.demo = this.a++;
    }
}

Child.prototype = new Parent();

var parent = new Parent();
var child1 = new Child();
var child2 = new Child();

child1.a = 11;
child2.a = 12;

parent.show();
child1.show();
child2.show();

child1.change();
child2.change();
parent.show();
child1.show();
child2.show();

/*
Parent 的实例属性作为 Child 的 prototype 属性。 

this.b
对于 parent 来说，是实例属性；
对于 child1 和 child2 来说，是原型属性。
原型对象中的属性和方法是由所有实例共享的。
因此 child1 和 child2 改变 b 的值会相互影响，但是不会影响 parent。

child1 的实例中有 a，会屏蔽原型中的值；
但是实例中没有 b，只能到原型中查找，this.b 中的 this.a 是指向原型的，因此不会拿到实例中的值。

包含 a++ 的语句，是先执行操作 (使用 a 原本的值)，再改变 a 的值。
*/