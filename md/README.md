# Markdown 基本用法

## 二级标题下有横线
### 共有六级标题

#### 在 VS Code 中预览 .md

1. 打开：`$ code filename` 
2. 预览：⇧⌘V

#### 无序列表

* 酸奶
* 咖啡
* 沙拉

#### 有序列表

1. 上传代码到 repository
2. 用 markdown 写 README

#### 引用

> Bear is a bad guy.
> Bad bad boy.

#### 行内代码

Bear is a `bad` guy.

#### 代码区块

* 缩进1个制表符或4个空格。
* 使用语言高亮时，无需缩进。

``` JavaScript
for (var i = 0; i < array.length; i++) {
    console.log("Hello, Bear!")
}
```

#### 特殊字体

*这是斜体*，_这是斜体_，**这是粗体**

#### 符号

> & 符号在 markdown 中的写法为 &amp;

&amp;

#### 插入表格

| 左对齐标题 | 右对齐标题 | 居中对齐标题 |
| ------ | ------: | :------: |
| 短文本 | 中等文本 | 稍微长一点的文本 |
| 稍微长一点的文本 | 短文本 | 中等文本 |

* 默认标题栏居中对齐，内容居左对齐。
* 如果设置了对齐方式，则标题和内容一致。

#### url 链接

[Markdown Document](http://wowubuntu.com/markdown/)

#### text 链接

<rabbit@gmail.com>

#### 插入图片

![image][img/bear.jpeg]

#### 分割线
***
---