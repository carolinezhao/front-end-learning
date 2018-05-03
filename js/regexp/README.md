# Regular Expression

prof-regexp.js

* 高程 5.4 RegExp 类型

check-mobile.js

* 用正则检测用户手机号是否有效

---

[MDN RegExp](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)
文档内容

字面量 vs 构造函数
* 如何编译？
* 何时使用？

所有特殊字符的含义

使用正则的方法
* RegExp 的 exec 和 test
* String 的 match、replace、search 和 split

案例：改变输入字符串的顺序

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