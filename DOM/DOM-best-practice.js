function popUp(winURL) {
    window.open(winURL, "popup", "width = 32, height = 48");
}

// ＊＊＊分离JavaScript＊＊＊
// js不要求事件必须在html文档里处理，可以在外部js文件里把一个事件添加到html文档中的某个元素上。
// 即 element.event = action
// 当涉及某一个特定元素：getElementById("id").event = action
// 当涉及多个元素：通过 getElementsByTagName 和 getAttribute 把事件添加到有着特定属性 (class) 的一组元素上。

var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute("class") === "popup") {
        // element.event = action
        lingks[i].onclick = function () {
            // 把链接的href属性传递给popUP函数
            popUp(this.getAttribute("href"));
            // 取消默认行为，不离开当前窗口
            return false;
        }
    }
}