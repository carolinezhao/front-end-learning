# Regular Expression

reference

* 高程 5.4 RegExp 类型 --> prof-regexp.js
* [MDN RegExp](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)

---

正则表达式是用于匹配字符串中字符组合的模式。

* 目标：字符串。
* 工具：正则表达式 (匹配规则)。
* 方法：如何执行规则，返回什么。

---

创建正则表达式：字面量 vs 构造函数
* 如何编译
* 何时使用

---

正则表达式中的特殊字符

---

使用正则表达式的方法

* 是否有匹配项？使用 test 或 search。
* 如果有匹配，具体是什么？使用 exec 或 match。返回一个数组并且更新相关的正则表达式对象的属性和预定义的正则表达式对象。

RegExp 的 exec 和 test --> _prof-regexp.js_

    regexp.method(string)

String 的 match、replace、search 和 split

    string.method(regexp, para)

---

案例

* 改变输入字符串的顺序
* 检测用户手机号是否有效 --> _check-mobile.js_

---

学 Vue 时用到的
```js
.replace(/\W+/g, '-')
.replace(/(^\-|\-$)/g, '')
```

---

todo：

* 常用 pattern 中符号的使用方法
* microblog 项目中注册验证