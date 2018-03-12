以下文件是书中提供的代码，用于辅助完成表单。

* style.css
* app.js
* monthpicker.js

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

type = "text / email / url / tel"<br>
在手机上激活不同类型的input，会弹出不同的键盘

type = "password"

type = "hidden"

type = "submit"<br>
见表单最下方的两个提交按钮

autofocus
见表单第一项 name

required

placeholder = "提示文字"

使用以下属性构建具备计算功能的表单

type = "number" 显示数值微调框 spinbox

data-* = ""

value = "显示的默认值"

min = "限制输入的最小值" 

max = "限制输入的最大值"

maxlength = "限制输入的字符长度"

### output 元素

见 order details 最后一列 total
