# Text Display

> 说明：
> * ✅ 表示常用或推荐使用。
> * `CSS3` 表示已知是新特性的，没有标注的不一定不是。

常用场景：单行 + 超出 + 省略号。✅  --> _text-display.html_
```
{
    white-space: nowrap; // 不换行
    overflow: hidden; // 超出隐藏
    text-overflow: ellipsis; // 用省略号表示有隐藏文本
}
```
[多行超出省略号参考](https://segmentfault.com/a/1190000010780991#articleHeader34)

### overflow
* `visible` 默认值，文本会超出元素框之外。
* `hidden` 隐藏超出文本框的内容。✅
* `scroll` 不论是否需要都使用滚动机制。有可能即使元素框中可以放下所有内容也会出现滚动条。
* `auto` 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。✅
* `inherit` 从父元素继承。

### text-overflow (`CSS3`)
* `ellipsis` 用省略号代表被修剪的文本。✅
* `clip` 直接隐藏超出容器的文本。
* string 使用自定义字符串 (比如 `>`) 代表被修剪的文本 (仅对 firefox 有效)。

### white-space

| 值 | 保留空格 | 是否手动换行 | 是否自动换行 | 备注 |
| :------: | :------: | :------: | :------: | :------: 
| `pre` | all | Y | N | 类似 HTML 中的 pre 标签
| `pre-wrap` | all | Y | Y | 全部保留 ✅
| `pre-line` | 1 | Y | Y |
| `normal` | 1 | N | Y | 默认值
| `nowrap` | 1 | N | N | 单行不换行 ✅
| `inherit` | | | | 从父元素继承

空格：all 表示保留全部；1 表示只保留1个空格

手动换行的两种情况

* 在 HTML 中回车换行，在浏览器中的显示；
* 在 textarea 中回车换行，存入数据库的形式为 `\r\n`，在浏览器中展示；<br>
实例：[发布微博渲染到页面](https://github.com/carolinezhao/microblog/blob/master/views/posts.ejs)，希望保留空格、换行，使用 `white-space: pre-wrap;`<br>
为什么可以读取 `\r\n` 呢？？

---

使用场景：长字符换行

### word-warp (`CSS3`)
* `break-word` 在长单词或 URL 地址内部进行换行。(长单词另起一行后可自动换行) ✅
* `normal` 默认只在允许的断字点换行。(长单词另一起行后不自动换行，可能超出容器边界)

### word-break (`CSS3`)
* `keep-all` 只能在半角空格或连字符处换行。✅
* `normal` 默认。
* `break-all` 允许在单词内换行。

---

