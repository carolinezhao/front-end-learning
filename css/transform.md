# transform 和 transition

--> _transform.html_

## transform

transform: translate(x,y) | scale(x,y) | rotate(angle) | skew(x-angle,y-angle)
- 以上为常用属性值，[查看更多](https://www.w3schools.com/cssref/css3_pr_transform.asp)

transform-origin: x-axis y-axis z-axis;
- 以此为原点进行变换
- 使用此属性必须先使用 transform 属性
- 默认值 50% 50% 0
- [在线调试](http://www.runoob.com/try/try.php?filename=trycss3_transform-origin_inuse)

transform-style: flat | preserve-3d;
- 使用此属性必须先使用 transform 属性
- 默认值 flat

transform 用在 animation 中 --> _animation.html_

## transition  

过渡：元素从一种样式逐渐变为另一种效果。使交互效果 (比如 hover) 更生动。

transition: property, duration, timing-function(default=ease), delay(default=0)
- property 可以为 all
- cursor 的变化不需要 transition 指定