# Chrome DevTools

[官方教程](https://developers.google.com/web/tools/chrome-devtools/?hl=zh-cn)

shortcut key: `cmd + option + i`

## JS

[基本用法](https://developers.google.com/web/tools/chrome-devtools/javascript/?hl=zh-cn)

* 使用断点暂停代码，比如在 Event Listener Breakpoints 中选中 Mouse - click
* 单步调试代码：检查执行顺序的错误。
* 手动加断点，可查看：已执行部分的结果，call stack，scope 等。
* 监视表达式 (代替 `console.log`)，监视变量值随时间变化的情况。可以将任何有效的 JavaScript 表达式存储在监视表达式中：watch - add expression
* 按 `esc` 在 Sources 窗口底部打开 Console (代替 `console.log`)，覆盖原有变量值进行调试。

[所有类型的断点调试](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints?hl=zh-cn)

## CSS

选中的元素后面出现 `$0`

Chrome assigns an index to each DOM node you select.
`$0` will always point to the last node you selected.