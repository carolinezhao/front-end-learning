# Index

# CSS 知识点

### 样式的优先级

参考：[30 种 CSS 选择器](http://yanhaijing.com/css/2014/01/04/the-30-css-selectors-you-must-memorize/)

当同一个元素有多个声明时，按照优先级递增的顺序：

* 继承得到的样式的优先级最低；
* 类型(type)选择器 `h1`，伪元素(pseudo-elements) `::before`；
* 类(class)选择器 `.example`，属性(attributes)选择器 `[type="radio"]`，伪类(pseudo-classes) `:hover`；
* id 选择器 `#example`；
* 元素的内联样式 `style="font-weight:bold"` 总会覆盖外部样式表的任何样式；
* `!important` 声明的样式优先级最高 (但应尽量避免使用)。

如果优先级相同，则选择**最后**出现的样式。

通配选择符(universal selector) `*`, 关系选择符(combinators) (+, >, ~, ' ') 和 否定伪类(negation pseudo-class) `:not()` 对优先级没有影响。但是，在 `:not()` 内部声明的选择器会影响优先级。


