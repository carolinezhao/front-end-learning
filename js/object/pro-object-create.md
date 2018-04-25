# 第6章 面向对象的程序设计

## 6.1 理解对象

面向对象 (Object-Oriented, OO) 的语言有一个标志：类。
但 js 没有“类”的概念。

### 6.1.1 属性类型

内部特性 (attribute)
* 用于描述属性 (property) 的特征。
* 是为了实现 js 引擎用的，不能直接访问，用 [[..]] 表示。
* 一般用不到，但有助于理解对象。

js 有两种**属性**：数据属性和访问器属性。它们各有4个用于描述行为的**特性**。

### 数据属性 (data property) 的特性

| 特性 | 功能 | 对于在对象中定义的属性 |
| --- | --- | --- |
| `[[Configurable]]` | 能否通过 delete 删除属性，能否修改属性的特性，能否修改为访问器属性 | true (修改后不可逆) |
| `[[Enumerable]]` | 能否通过 for-in 循环返回属性 | true |
| `[[Writable]]` | 能否修改属性的值 | true |
| `[[Value]]` | 包含这个属性的数据值 | 指定值 (默认 undefined) |

要修改数据属性的默认特性，使用方法：`Object.defineProperty()`。

### 访问器属性 (accessor property)
* 不包含数据值，包含一对儿 getter 和 setter 函数 (都不是必需的)。
* 读取访问器属性时，调用 getter 函数，返回有效的值；
* 写入访问器属性时，调用 setter 函数并传入新值，决定如何处理数据。

访问器属性不能直接定义，必须使用 `Object.defineProperty()` 来定义。

访问器属性的特性

| 特性 | 功能 | 对于在对象中定义的属性 |
| --- | --- | --- |
| `[[Configurable]]` | 能否通过 delete 删除属性，能否修改属性的特性，能否修改为数据属性 | true (修改后不可逆) |
| `[[Enumerable]]` | 能否通过 for-in 循环返回属性 | true |
| `[[Get]]` | 读取属性时调用的函数 | (默认 undefined) |
| `[[Set]]` | 写入属性时调用的函数 | (默认 undefined) |

### 6.1.2 定义多个属性

`Object.defineProperties()`

### 6.1.3 读取属性的特征

`Object.getOwnPropertyDescriptor()`

<br>

## 6.2 创建对象

### 6.2.1 工厂模式 factory pattern

返回一个对象

### 6.2.2 构造函数模式 constructor pattern

见 _01-object-create.js_ 中的 Constructor notation

* 构造函数的函数名用大写字母开头是个惯例，借鉴自其他 OO 语言，但其实与普通函数没有区别。
* 构造函数中使用 this
* 使用 new 操作符创建新实例，以这种方式调用构造函数经历了以下步骤：
    - (1) 创建一个新对象；
    - (2) 将构造函数的作用域赋给新对象 (因此 this 就指向了这个新对象)；
    - (3) 执行构造函数中的代码 (为这个新对象添加属性)；
    - (4) 返回新对象。
* 以这种方式定义的构造函数是定义在 Global 对象 (在浏览器中是 window 对象) 中的。

构造函数的问题及改进，见 js 文件。

### 6.2.3 原型模式 prototype pattern

--> _prof-prototype.js_ 和 _prof-prototype2.js_

### 6.2.4 组合使用构造函数模式和原型模式