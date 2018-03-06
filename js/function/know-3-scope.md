## 第3章 函数作用域和块作用域

### 3.1 函数中的作用域

函数作用域

* 属于这个函数的全部变量都可以在整个函数的范围内使用及复用（在嵌套的作用域中也可以使用）。

### 3.2 隐藏内部实现

基于作用域的隐藏方法

* 从所写代码中挑出一个片段，用函数声明把它包装起来，就相当于在这个代码片段的周围创建了一个作用域气泡。这个作用域**隐藏**了包裹的变量和函数。

依赖的原则

* 软件设计中，应该**最小限度地暴露必要内容**，将其他内容都隐藏起来。比如模块或对象的API设计。

这样做的优势

* 将具体内容私有化。否则，外部作用域对私有变量和函数的访问权限会导致风险（有意或无意地使用）。
* 避免同名标识符之间的冲突。

b 和 doSomethingElse(...) 都无法从外部被访问。

    function doSomething(a) {
        function doSomethingElse(a) {
            return a - 1
        }
        var b
        b = a + doSomethingElse(a * 2)
        console.log(b * 3)
    }
    doSomething(2)

bar(...) 中的 `var i = 3` 是本地变量，会遮蔽 for 循环中的 i；如果情况允许，使用其他标识符 `var j = 3`。

    function foo() {
        function bar(a) {
            var i = 3
            console.log(a + i)
        }
        for (var i = 0; i < 10; i++) {
            bar(i * 2)
        }
    }

两种规避冲突的场景

* 全局命名空间<br>程序中加载第三方库，声明一个对象用作库的命名空间，对象属性就是需要暴露给外部的功能。

* 模块管理<br>通过依赖管理器的机制将库的标识符显式地导入到另一个特定的作用域中。【见第5章内容】

---

### 3.3 函数作用域

基于 3.2，想对代码片段进行包装，理想的效果：

* 函数不污染所在作用域
* 能够自动运行

**函数声明** (如3.2中的例子) 无法满足以上两点要求 (函数名会污染作用域；必须通过函数名才能调用)

**函数表达式**可以满足

    var a = 2; // 此处必须有分号，否则无法识别函数表达式
    (function foo() {
        var a = 3
        console.log(a)
    })();
    console.log(a) // 2

区分函数声明和表达式：看 function 关键字出现在声明中的位置

* function 是第一个词 --> 函数声明
* function 不是第一个词 --> 函数表达式

两者之间最重要的区别：名称标识符会绑定在哪里

* 函数声明：foo被绑定在所在作用域中，通过foo()调用。
* 函数表达式：foo被绑定在自身的函数中。(function foo() {...}) 中的foo只能在...所代表的位置中被访问，外部作用域则不行。

---

3.3.1 匿名和具名

函数声明不能省略函数名，函数表达式可以是匿名的。

行内函数表达式非常强大且有用。what's the exact definition of inline function expression?

给函数表达式命名是最佳实践。

    setTimeout(function timeoutHandler() {
        console.log('I waited 1 second!')
    }, 1000)

---

3.3.2 立即执行函数表达式

函数被包含在一对()内成为了一个表达式，末尾加上另一个()可以立即执行这个函数。

IIFE = Immediately Invoked Function Expression

	(function foo() {
		 ...
	 })()
		 
	(function foo() {
		 ...
	 }())
		
	以上两种形式在功能上是一致的。
		
进阶用法是把它们当作函数调用并传递参数进去。

场景1：写明从外部作用域传递进去的对象，有助于改进代码风格。

    var a = 2;
	(function IIFE(global) {
		var a = 3
        console.log(a) // 3
        console.log(global.a) // 2
	 })(window)
    console.log(a) // 2
    【另见 know-scope.js】

场景2：解决 undefined 标识符的默认值被错误覆盖导致的异常。

场景3：倒置代码运行顺序。将需要运行的函数放在第二位，在IIFE执行后当作参数传递进去。

---

### 3.4 块作用域
