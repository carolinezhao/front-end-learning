# Index

[文本显示](https://github.com/carolinezhao/front-end-learning/blob/master/css/text-display.md)

[背景](https://github.com/carolinezhao/front-end-learning/blob/master/css/background.md)

功能：
- menu --> 横排菜单，hover展开

结构：
- layout-table-cell
- layout-flex

图形：
- shape-rhombus

## CSS 知识点

### 选择器

参考：[30 种 CSS 选择器](http://yanhaijing.com/css/2014/01/04/the-30-css-selectors-you-must-memorize/)

* x>y 选择x的直接子代y
* x+y 选择x后第一个y

### 样式的优先级

当同一个元素有多个声明时，按照优先级递增的顺序：

* 继承得到的样式的优先级最低；
* 类型(type)选择器 `h1`，伪元素(pseudo-elements) `::before`；
* 类(class)选择器 `.example`，属性(attributes)选择器 `[type="radio"]`，伪类(pseudo-classes) `:hover`；
* id 选择器 `#example`；
* 元素的内联样式 `style="font-weight:bold"` 总会覆盖外部样式表的任何样式；
* `!important` 声明的样式优先级最高 (但应尽量避免使用)。

如果优先级相同，则选择**最后**出现的样式。

通配选择符(universal selector) `*`, 关系选择符(combinators) (+, >, ~, ' ') 和 否定伪类(negation pseudo-class) `:not()` 对优先级没有影响。但是，在 `:not()` 内部声明的选择器会影响优先级。

### ul，li, a

默认自带属性

* body {margin}
* 最外层 ul {margin: 20px, 0; padding-left: 40px}

去掉装饰

* a {text-decoration: none;}
* ul,li {list-style: none;}<br>ul-li结构，只写ul或li都可以；li结构，必须写li

使列表横排 (ul-li, 单独li)

* li {display: inline-block;}<br>仅设置 li 有效，对 ul 设置无效<br>横排后默认底部对齐

### height 和 line-height

对 ul/li 及其内部内容：<br>
只设置 height，所有内容平分 height（可能超出）<br>
只设置 line-height，则 li 及其内部内容每个都是 line-height

### 继承

button 不继承字号，字体

### 对齐

text-align 定义的是容器包含内容在该容器内垂直方向对齐方式，比如 ul 里的 li

结构 ul1 - li1 - ul2

* ul1 {text-align: center} --> li1 垂直居中
* li1 {display: incline-block} --> li1 横向排列
* ul2 {display：absolute} --> li1 顶部对齐

### position: absolute vs relative

<br>

[参考](https://segmentfault.com/a/1190000010780991)

### 过渡  (`CSS3`)

过渡：元素从一种样式逐渐变为另一种效果。使交互效果 (比如 hover) 更生动。

实例：button hover；下拉菜单 --> _menu.html_

```
transition: property, duration, timing-function(default=ease), delay(default=0)
// property 可以为 all
// cursor 的变化不需要 transition 指定
// 可以分开写 transition-property 等
```