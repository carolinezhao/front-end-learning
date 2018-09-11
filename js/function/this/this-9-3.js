function foo(sth) {
    console.log(this.a);
    this.a = sth;
}

var obj1 = {};

var bar = foo.bind(obj1);
bar(2);
console.log(obj1.a);

var baz = new bar(3);
console.log(obj1.a, baz.a);