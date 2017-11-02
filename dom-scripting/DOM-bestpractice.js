// 新建浏览器窗口：window.open(url, name, features); all of parameters are optional

function popUp(winURL) {
    // 打开 320*480 像素的新窗口“popup”
    // 由于新窗口已命名，所以当把新的url地址传递给此函数时，这个函数将把新窗口里的现有文档替换为新url地址处的文档，而不是再去创建一个新窗口。
    window.open(winURL, "popup", "width = 320, height = 480");
}

// ＊＊＊渐进增强：分离JavaScript＊＊＊
// js不要求事件必须在html文档里处理，可以在外部js文件里把一个事件添加到html文档中的某个元素上。
// 即 element.event = action
// 当涉及某一个特定元素：getElementById("id").event = action
// 当涉及多个元素：通过 getElementsByTagName 和 getAttribute 把事件添加到有着特定属性 (class) 的一组元素上。

// 浏览器可能一次加载多个文件，不能保证html和js哪个先加载完。必须让脚本在html文档全部加载到浏览器后马上开始执行。
// document对象是window对象的一个属性。当window对象触发onload事件时，document对象已经存在。
window.onload = function () {
    // ＊＊＊向后兼容＊＊＊
    // 对象检测：如果浏览器不理解这个函数，则退出函数。如果需要检测多个方法或属性，则用“逻辑或”即||分隔。
    // 使用对象检测时，一定要删掉方法名后面的括号，否则测试的将是方法的结果，无论方法是否存在。
    // if () {} 当{}内只有一条语句时，可简写成一行：
    if (!document.getElementsByTagName) return false;
    // ＊＊＊优化性能＊＊＊
    // 将搜索结果保存在变量中，以便复用，避免重复搜索
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("class") === "popup") {
            // 当某个链接的class属性为popup，当其被点击时就要掉用popUp()函数：element.event = action
            links[i].onclick = function () {
                // 把链接的href属性传递给popUP函数
                popUp(this.getAttribute("href"));
                // 取消默认行为，不离开当前窗口
                return false;
            }
        }
    }
}
