# Animation

定义动画由两部分组成
* 在动画对象的样式上添加 animation 属性 --> 播放时间，速度，次数，重复，延迟等。
* 在 keyframe 上添加具体的每一帧的动画样式。
* 两者通过 animationname 绑定。

```
动画对象 {
    animation: animationname duration timing-function delay iteration-count direction fill-mode;  
}
```

* `animation-name` 绑定到选择器的 keyframe 名称。
* `animation-duration` 完成动画所花费的时间，以秒或毫秒计。默认 0。
* `animation-timing-function` 速度曲线。默认 ease。
```
linear 匀速。
ease 低速开始，然后加快，在结束前变慢。
ease-in	低速开始。
ease-out 低速结束。
ease-in-out 低速开始和结束。
cubic-bezier(n,n,n,n) 在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。值越小越快。
```

* `animation-delay` 开始前的延迟。默认 0。
* `animation-iteration-count` 播放次数。
```
1 默认值
n 指定播放次数
infinite 无限次播放
```

* `animation-direction` 是否轮流反向播放动画。
```
normal 默认值。动画按正常播放。
reverse	动画反向播放。
alternate 动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。
alternate-reverse 动画在奇数次（1、3、5...）反向播放，在偶数次（2、4、6...）正向播放。
```

* `animation-fill-mode`: none | forwards | backwards | both | initial | inherit;
```
使用场景？
none 默认值。动画在动画执行之前和之后不会应用任何样式到目标元素。
forwards 当动画完成后 (由 animation-iteration-count 决定)，保持最后一个属性值 (在最后一个关键帧中定义)。否则回到初始属性。
backwards 动画将应用在 animation-delay 定义期间启动动画的第一次迭代的关键帧中定义的属性值。这些都是 from 关键帧中的值 (当 animation-direction 为 "normal" 或 "alternate" 时) 或 to 关键帧中的值 (当 animation-direction 为 "reverse" 或 "alternate-reverse" 时)。
both 动画遵循 forwards 和 backwards 的规则。也就是说，动画会在两个方向上扩展动画属性。
```

--

```
@keyframes animationname {
    keyframes-selector {
        css-styles;
    }
}
```
创建动画的原理是，将一套 CSS 样式逐渐变化为另一套样式。动画过程中，可以多次改变 CSS 样式。

keyframes-selector
* 0-100% (常用值 0% 25% 50% 75% 100%)
* from (与 0% 相同) 和 to (与 100% 相同)
* 为了获得最佳的浏览器支持，应该始终定义 0% 和 100% 选择器。

--

浏览器前缀
* -webkit- /* Safari and Chrome */
* -moz- /* Firefox */
* -o- /* Opera */