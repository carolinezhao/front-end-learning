以下文件是书中提供的代码，用于辅助完成表单。

* style.css
* app.js
* monthpicker.js

---

项目中用到的 HTML5 特性

* 使用 input 元素类型及其他属性提供小部件及数据验证
* 使用 data-* 属性保存产品价格，从 data-* 属性中获取数据
* 使用 output 元素呈现单个产品金额小计和订单金额总计，更新 output 元素
* 使用 formnovalidate 和 formaction 绕过验证，保存未完成的表单
* 使用 valueAsNumber 属性，以数字形式读取输入值

---

structure

* 用 fieldset 将表单分为四个主要部分（自带边框）
* 用 legend 表示各部分大标题（显示在 fieldset 的边框上）
* 表单各项用 ul - li 的结构组织起来

用 label 包裹 div 和 input（好处？）

* 通过 label 的 class 区分表单是否必填
* 用 div 表示输入框的标签

表格结构

    <table>
        <thead> 表头
            <tr> 行
                <th></th> 列
                <th></th>
            </tr>
        </thead>
        <tbody> 表内容
            <tr> 行
                <td></td> 列数应与表头列数一致
                <td></td>
            </tr>
            <tr>
                <td></td> 列数应与表头列数一致
                <td></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2"></td> 占据2列的位置
            </tr>
        </tfoot>
    </table>

---

### input 元素的属性 

type 属性

* type = "text / email / url / tel" 在手机上激活不同类型的input，会弹出不同的虚拟键盘。

* type = "password"

* type = "number" 显示数值微调框 spinbox

* type = "month" 显示日期选择器。其他日期类型：date, datetime, datetime-local, month, week, time

* type = "hidden" 没有理解怎么用？

* type = "submit" 见表单最下方的两个提交按钮 用 button 和 input 的区别是？

name 属性有什么实际意义？

提升用户体验

* autofocus 自动聚焦

* placeholder = "提示输入的内容或格式"

验证表单内容

* required 用户必须输入

* pattern = "正则表达式" 和 title 搭配使用

* title = "提示文字" 当用户试图提交无效信息时，title 属性会产生提示信息。

和 number 类型搭配使用，使用以下属性构建具备计算功能的表单

* data-* = "" data-key="value" 一般用于表示单价，比如 data-price="39.99"

* value = "显示的默认值" 几乎所有类型都可以用

* min = "限制输入的最小值" 

* max = "限制输入的最大值"

* maxlength = "限制输入的字符长度"

input 作为保存按钮，保存表单时，绕开验证操作

* formnovalidate 绕开验证操作。为什么input按钮能负责整个表单？

* formaction = "url" 跳转到保存的url，而不是提交

* 如果使用不支持这些属性的旧浏览器，则需要通过 js 修改表单行为

---

### output 元素

根据 input 输入的数值显示计算结果

见 order details 最后一列 total

---

### form 元素

method 属性：规定如何发送表单数据

* method = "get"

* method = "post"

action 属性：指定表单处理服务器