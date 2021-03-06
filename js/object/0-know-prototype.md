书的第二部分

# 第5章 原型

## 5.1 [[Prototype]]

引用对象的属性时会触发 [[GET]] 操作：第一步检查对象本身，如果没有，则继续访问 [[prototype]] 链。

### 5.1.1 Object.prototype

所有普通的 [[prototype]] 链最终都指向内置的 Object.prototype，它包含许多通用功能。

可参考 高程 图 6-5

.toString()
.valueOf()
.hasOwnProperty()
.isPrototypeOf()

### 5.1.2 属性设置和屏蔽

- 如果 [[prototype]] 链上存在 foo 属性，且 writable: true，则直接在实例中添加 foo 属性，会屏蔽原型链上的同名属性。
- 如果 [[prototype]] 链上存在 foo 属性，且 writable: flase，无法修改或创建同名属性。
- 如果 [[prototype]] 链上存在 foo 属性，且它是一个 setter (见 第3章)，那就会调用 setter，不会添加同名属性到实例。

如果在后两种情况下希望屏蔽 foo 属性，那就不能使用赋值操作符，而应使用 Object.defineProperty(...) 向实例添加该属性。(见 第3章 或 高程 6.1.1)

## 5.2 “类”

实际上并不存在所谓的“构造函数”，只有对于函数的“构造调用”。 --> _this-8.js_

重要澄清！
第4章中说过，js 和[面向类]的语言不同，它没有“类”来作为对象的抽象模式。js 中**只有对象**。
实际上，js 才是真正应该被称为“面向对象”的语言，因为它是少有的可以不通过类，直接创建对象的语言。
在 js 中，类无法描述对象的行为，因为根本就不存在类！**对象直接定义自己的行为**。

### 5.2.1 “类”函数

滥用：模仿“类”。利用了函数的一种特殊性：
所有的函数默认都会拥有一个名为 prototype 的公有并且不可枚举的属性，它会指向另一个对象：
```js
function Foo() {}
Foo.prototype; // { }
```
这个对象被称为 Foo 的“原型”，因为可以通过名为 Foo.prototype 的属性引用来访问它。
```js
function Foo() {}
var a = new Foo();
console.log(Object.getPrototypeOf(a) === Foo.prototype); // true
```

this-8 中讲过
```
使用 new 来调用函数，或者说发生构造函数调用时，会自动执行以下操作：
1.创建 (或构造) 一个全新的对象；
2.这个新对象会被执行[[Prototype]]连接；
3.这个新对象会绑定到函数调用的 this；
4.如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。
```

在面向类的语言中，类可以被复制(或者说实例化)多次，就像用模具制作东西一样。

但是在 js 中，并没有类似的复制机制。
不能创建一个类的多个实例，只能创建多个对象，它们[[Prototype]]关联的是同一个对象。
但是在默认情况下不会进行复制？？，因此这些对象之间并不会完全失去联系，它们是互相关联的。

new Foo() 会生成一个新对象，这个新对象的内部链接[[Prototype]]关联的是 Foo.prototype 对象。
最后得到的是两个对象，它们之间互相关联。(并没有初始化一个类，复制到一个对象中)

new Foo() 这个函数调用实际上并没有直接创建关联，这个关联只是一个意外的副作用。
更直接的方法是 Object.create()，后面介绍。

“原型继承”不能很好地反映对象之间的关联机制，作者使用“委托”。

### 5.2.2 “构造函数”

### 5.2.3 技术

## 5.3 (原型) 继承

--> _04-know-inheritance.js_

### 检查“类”关系

> 注：以下内容中 Foo 是构造函数，a 是由构造函数创建的实例对象。

`a instanceof Foo;`

- 回答的问题是：在 a 的整条 [[Prototype]] 链中是否有指向 Foo.prototype 的对象？
- 这个方法只能处理对象 (a) 和函数 (带 .prototype 引用的 Foo) 之间的关系。
- 调用 bind() 生成的函数没有 .prototype，如果使用 instanceof，相当于直接在原函数上操作。

`Foo.prototype.isPrototypeOf(a);`

- 回答的问题与第一个相同。
- 但不需要间接引用函数，因为 .prototype 属性会被自动访问。？？
- 可以用于判断两个对象的关系。

`Object.getPrototypeOf(a) === Foo.prototype;`

- ES5 标准，直接获取对象的 [[Prototype]] 链。

`a.__proto__ === Foo.prototype`

- ES6 标准，`__proto__` 引用了内部的 [[Prototype]] 对象。
- `__proto__` 实际上是存在于内置的 Object.prototype 中，不可枚举，获取方式相当于 getter/setter。

以上四种方法的使用可见 03- / 04- 系列.js

## 5.4 对象关联

### 5.4.1 创建关联

Object.create()

--> _04-inheritance-objectcreate.js_

### 5.4.2 关联关系是备用