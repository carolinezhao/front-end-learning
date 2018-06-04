# Background

## 背景图片

--> _background.html_

background: url(path/filename) 是否重复 x y 是否固定, #color;

单张图片
* background: url(path/filename) no-repeat center center fixed, #color;

多张图片
* background: url(path/filename) no-repeat left, url(path/filename) no-repeat right;

--

背景的填充范围

### background-clip (`CSS3`)
* `border-box` 默认值。
* `padding-box` 仅在 padding 的范围内有背景。
* `content-box` 仅在 content 的范围内有背景。

--

背景图片的位置

* 背景图片位置 = `background-origin`(规定原点) + `background-position`(相对原点的距离 x,y)。
* `background-position` 如果设定了方位值，则 `background-origin` 失效。

### background-origin (`CSS3`)
* `border-box` 原点在 border 左上角。
* `padding-box` 默认值。
* `content-box` 原点在 content 左上角。

### background-position
* `0px 0px` 默认值。
* 其他数值：相对原点的距离。
* 方位：`center`/ `right` / `bottom` ... 如 `left` 的效果是左侧+居中。

--

背景图片的填充方式

### background-size (`CSS3`)
* `contain` 保持图片纵横比，纵向填充 (居左)，padding 范围。
* `cover` 保持图片纵横比，横向填充 (居上)，padding 范围。
* `auto` 默认，保持图片100%大小和比例。搭配 `background-repeat` 使用。
* 设定宽度值，如 `400px`。

### background-repeat
* no-repeat 不重复。✅
* repeat-x 横向重复，默认值。
* repeat-x 纵向重复。

--

## 背景渐变

--> _gradient.html_

### 线性渐变

方向

`background: linear-gradient(to bottom, color1, color2);`
- to bottom 顶->底
- to right 左->右
- to bottom right 左上角->右下角

角度

`background: linear-gradient(45deg, color1, color2);`
- 0 底->顶
- 90deg 左->右
- 180deg 顶->底

色标

`background: linear-gradient(to bottom, blue, white 80%, orange);`
- 颜色后面的百分数表示位置。
- 没有指定位置时，色标均匀隔开。

透明度

`background: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1)), url(imagepath);`

[reference](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Using_CSS_gradients)