function anotherFunction() {
    // body
}

var anotherObject = {
    c: true
};

var anotherArray = [];

var myObject = {
    a: 2,
    b: anotherObject, // 这是引用，不是复本！
    c: anotherArray, // 也是引用
    d: anotherFunction // 也是引用
};

anotherArray.push(anotherObject, myObject);

// myObject 的复制
// 浅复制：会复制 a 的值；b c d 仍是三个引用；
// 深复制：除了复制 myObject 外还会复制 anotherObject 和 anotherArray；
// 但 anotherArray 引用了 anotherObject 和 myObject，所以又需要复制 myObject，循环引用导致死循环？
// 解决方法可能有：终止循环-即不复制深层元素；直接报错；选择其他方法？
// 书中列出一些不完善的解决方案（略）

// 相比深复制，浅复制非常易懂且问题较少，所以 ES6 定义 Object.assign() 来实现浅复制。
// 参数1是目标对象，之后还可以跟一个或多个源对象。
// 它会遍历一个或多个源对象的所有可枚举 (enumerable) 的自有键 (owned key) 并把它们复制 (使用 = 操作符赋值) 到目标对象，最后返回目标对象。

// 需要注意的是，由于 Object.assign() 中使用 = 操作符来赋值，所以源对象属性的一些特性 (比如 writable) 不会被复制到目标对象。

var newObj = Object.assign({},myObject);
console.log(newObj);
console.log(newObj.b === anotherObject);
console.log(newObj.c === anotherArray);
console.log(newObj.d === anotherFunction);