以下文件是书中提供的代码，用于辅助完成表单。

* style.css
* app.js
* monthpicker.js

---

structure

* 用 fieldset 将表单分为四个主要部分（自带边框）
* 用 legend 表示各部分大标题（在 fieldset 的边框上插入）
* 表单各项用 ul - li 的结构组织起来

用 label 包裹 div 和 input（好处？）

* 通过 label 的 class 区分表单是否必填
* 用 div 表示表单的标签

---

### input 的属性 

type = "text / email / url / tel"<br>
在手机上激活不同类型的input，会弹出不同的键盘

type = "submit"<br>
见表单最下方的两个提交按钮

autofocus
见表单第一项 name

required

placeholder = "默认显示的文字"
