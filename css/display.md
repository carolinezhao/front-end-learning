# Display

display: block | inline | inline-block;

inline-block;

如果设置了此属性的元素有文本 (或者内含的元素中有文本)，会导致错位；<br>
使用 `vertical-align: top;` 可修正。--> animation.html 中的 container1<br>
vertical-align 只有在 `display: inline | inline-block;` 的情况下才能使用，默认 `vertical-align: baseline;`。

[参考1](https://blog.csdn.net/qq_36687674/article/details/75335101),
[参考2](https://blog.csdn.net/esther_heesch/article/details/51340730)
