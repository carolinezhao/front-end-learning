# Position

文档流：将窗体自上而下分成一行行，并在每行中按从左至右的顺序排放元素。

| position | 文档流 | top/left 是否生效，参照物是谁 | 在最外层时以谁为原点 | margin/padding 是否影响其他元素 |
| --- | --- | --- | --- | --- |
| static | 占用 | 否 | `<body>` | 是 |
| relative | 占用 | 是，文档流中的位置 | `<body>` | 是 |
| absolute | 脱离 | 是，非 static 父元素 | `<html>` | 否 |
| fixed | 脱离 | 是，窗口 (不跟随滚动条) | `<html>` | 否 |

position: static | relative | absolute | fixed;

`static` 
* 默认值，占用文档空间；
* top/left/z-index 等属性无效。

例子：position.html 粉色和蓝色元素

`relative`
* 占用文档空间；
* top/left/z-index 等属性生效 (相对它原本在文档流中的位置进行的偏移)，文档空间不偏移 (不影响其他元素)。
* margin/padding 会使文档空间偏移 (影响其他元素)。

例子：position.html (1-1)

`absolute`
* 虽然名为“绝对”，实际上功能更接近于“相对”。
* 元素脱离文档流 (意味着其容器和相邻元素在排版时不会考虑该元素)；
* top/left/z-index 等属性生效 (相对它的父类，要求见下)；
* 从父类开始找起，寻找**不是**以 `postion: static;` 方式定位的祖先类元素，直到 `<html>` 标签为止；
* 对于选定参照的父类，父类的 margin 会让该元素跟着偏移，而 padding 不会。即 absoulte 是根据祖先类的 border 定位的。

例子：
* 不设置 top/left (2-2) 脱离文档流，与 (2-3) 位置重叠。
* 设置 top/left，父元素为 `postion: static;` (2-1) 找到上一级父元素 `<html>` 以其为原点。
* 设置 top/left，父元素为 `postion: relative;` (3-1) 以父元素为原点，但是脱离文档流，父元素的大小不受其影响。
* 设置父元素的 margin/padding (3-1) 受 margin 影响，不受 padding 影响。

--

top 和 bottom 共存，top 生效；left 和 right 共存，left 生效。

z-index 层叠顺序
* 同级元素间，数值越大，层叠位置越靠上。
* 值相同，写在后面的位置在上。
* 父子关系无法通过 z-index 设定，一定是子上父下。

什么时候无效？(待补充)

[参考](https://blog.csdn.net/chen_zw/article/details/8741365)