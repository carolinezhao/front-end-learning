高程 第13章 事件

--> _event.html_

## 1 事件流

事件流：从页面中接收事件的顺序。

### 事件冒泡 event bubbling
- 由具体的元素逐级向上传播 `<div>` -> `<body>` -> `<html>` -> document 对象
- 现代浏览器都支持事件冒泡，但具体实现上有差别。

### 事件捕获 event capturing 
- 与冒泡顺序相反，用意在于在事件到达预定目标之前捕获它。
- 很少使用。

### DOM 事件流
DOM2级事件规定的事件流包括三个阶段：事件捕获阶段、处于目标阶段和事件冒泡阶段。

## 2 事件处理程序

### HTML级事件

某个元素支持的每种事件，都可以使用一个与相应事件处理程序同名的 HTML 特性来指定。这个特性的值应该是能够执行的 js 代码。
```html
<input type="button" onlick="showMessage()">
```
### DOM0级事件

首先取得一个要操作的对象的引用，然后将一个函数赋值给一个事件处理程序属性。
```js
button = document.getElementById()
button.onclick = function() {}
```
### DOM2级事件

addEventListener() 和 removeEventListener()

```js
button.addEventListener('click', function() {}, false)
```

- 3 个参数：要处理的事件名，作为事件处理程序的函数，一个布尔值。
- 布尔值参数如果是 true，表示在捕获阶段调用事件处理程序；如果是 false，表示在冒泡阶段调用事件处理程序 (多数使用)。
- 优势：可以添加多个事件处理程序。
- 通过 addEventListener() 添加的事件处理程序只能使用 removeEventListener() 来移除。移除时传入的参数与添加处理程序时使用的参数相同。匿名函数将无法移除。

## 3 事件对象

### DOM中的事件对象

兼容 DOM 的浏览器会将一个 event 对象传入事件处理程序。

event.type 表示事件类型，可用于给一个函数添加多个事件。更多属性/方法见书中表。

阻止特定事件的默认行为，使用 preventDefault()，比如阻止链接在被点击时自动跳转。

## 4 事件类型

