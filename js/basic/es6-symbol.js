// 5 种原始类型：number, string, boolean, null, undefined
// ES6 引入第 6 种原始类型：Symbol (没有字面形式)

// 创建 Symbol
// 由于 Symbol 是原始值，不能使用 new 操作符 (TypeError: Symbol is not a constructor)
let firstname = Symbol();
let person ={};
person[firstname] = 'caroline';
console.log(person[firstname]);
// 不能通过 person.firstname 的方式访问该属性。

// 可选参数：描述所创建的 Symbol，不可被访问，用于说明和调试。
let lastname = Symbol('family name');
let developer = {
    [lastname]: 'zhao'
};
console.log(lastname); // 'Symbol(family name)'
// 描述被存放在内部的 [[Description]] 属性中，只有调用 Symbol 的 toString() 时才能读取该属性。
// 执行 console.log() 时隐式调用了 toString()。

// 检测，首选方式 typeof
console.log(typeof lastname); // 'symbol'
console.log('');


// Symbol 的使用方法
// 所有使用可计算属性名的地方，都可以使用 Symbol。


// Symbol 共享体系
// 在不同对象中使用同一个 Symbol 属性表示一个独特的标识符。同时提供了可以随时访问的全局 Symbol 注册表。
// 创建可共享的 Symbol，使用 Symbol.for()。参数 (键) 作为标识符，也是描述。
let uid = Symbol.for('uid');
let object = {
    [uid]:'12345'
};
console.log(uid);
console.log(object[uid]);
// Symbol.for() 首先在全局注册表中搜索键为 'uid' 的 Symbol 是否存在，如果存在，直接返回；
// 如果不存在，创建一个新的 Symbol，在注册表中注册，并返回。

// 如果再传入同样的键调用 Symbol.for() 会返回相同的 Symbol。
let uid2 = Symbol.for('uid');
console.log(uid2 === uid); // true
console.log(uid2);
console.log(object[uid2]);
// uid 和 uid2 包含相同的 Symbol 并且可以互换使用。

// 使用 Symbol.keyFor() 方法在全局注册表中检索与 Symbol 有关的键。
// 参数是 Symbol，返回的是键。
console.log(Symbol.keyFor(uid));
console.log(Symbol.keyFor(uid2));
let uid3 = Symbol('uid'); // 没有在注册表中注册
console.log(Symbol.keyFor(uid3)); // undefined


// Symbol 与类型强制转换


// Symbol 属性检索
// 为了保持 ES5 函数的原有功能，Object.keys() 和 Object.getOwnPropertyNames() 都不支持 Symbol 属性。
// ES6 添加 Obejct.getOwnPropertySymbols() 检索对象中的 Symbol 属性，返回值是一个数组。
let symbolsArray = Object.getOwnPropertySymbols(object);
console.log(symbolsArray);
console.log(symbolsArray[0]);
console.log(object[symbolsArray[0]]);


// 通过 well-know Symbol 暴露内部操作