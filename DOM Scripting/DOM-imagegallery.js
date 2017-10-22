// 使用到的方法：getElementById, getElementsByTagName，getAttribute, setAttribute
// 使用到的属性：nodeValue, firstChild，nodeName, nodeType

// ＊＊＊ 补充测试和检查：减少对标记的依赖和假设 ＊＊＊
// showImg负责完成两件事，第一件事是这个函数必须完成的任务，第二件事是锦上添花。
// 检查工作希望达成的效果：只要placeholder图片存在，即使description元素不存在，切换显示新图片的操作也将照常进行，因此对两者采用不同的检查方法。
// 操作：在showImg中增加不同类型的if判断语句。
// PS：这里是为了学习检查的方法，实际工作中，并不是每一步都需要检查。对于html可能不在控制范围内的情况，需要检查。

// 函数目标：点击某链接时，占位符替换为该链接要显示的图片，占位文本替换为链接的title属性值。
function showImg(targetImg) {
    // 检查placeholder图片是否存在。
    if (!document.getElementById("placeholder")) return false;
    // 函数的唯一参数为带有href属性的元素节点<a>，将其href属性值存储在source变量中。
    var source = targetImg.getAttribute("href");
    // 用其它图片替换占位符img，需要改变img的src属性，通过id获取该元素节点。
    var placeholder = document.getElementById("placeholder");
    // 检查placeholder是否是一张图片。
    if (placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src", source);

    // 检查占位文本是否存在。将描述部分放在if语句里，description元素是可选的。如果存在则被更新，否则就被忽略。
    if (document.getElementById("description")) {
        // 当某个图片链接被点击时，这个链接的title属性值被提取并保存到text变量中。
        // var text = targetImg.getAttribute("title");
        // 检查：如果title存在，则赋值给text；否则，将空字符串赋值给text。
        var text = targetImg.getAttribute("title") ? targetImg.getAttribute("title") : "";
        var description = document.getElementById("description");
        // 检查firstChild是否为文本节点。
        if (description.firstChild.nodeType == 3) {
            // 获得id为description的p元素节点的第一个子节点－文本节点－的nodeValue属性值，并设置为变量text的值。
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

// 改进版本：行为层js与结构层html分离
// 函数目标：为带有特定id的链接添加onclick事件，将操作关联到onclick事件上。
function prepareGallery() {
    // 检查当前浏览器是否理解特定方法
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    // 检查当前网页是否存在一个特定id的元素
    // 这是一个预防性措施。现在虽然知道网页中有，但是不确定以后是否会发生变化。如果将来从网页上删掉列表，也不必担心js代码会突然出错。
    // 原则：如果想用js给网页添加一些行为，要保证js代码对这个网页的结构没有任何依赖。
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    // links是一个节点列表 node list，这个集合里的每个节点都有自己的属性和方法。
    // 通过遍历获得每个节点，设置onclick事件，让它在有关链接被点击时完成以下操作：
    // 1.把链接作为参数传递给showImg；2.取消默认行为
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            // showImg(this);
            // return false;
            // ＊＊＊ 补充测试和检查 ＊＊＊
            // 以上两个语句使用的前提是showImg函数会正常返回。但如果把placeholder图片删掉，则点击任何链接都没有响应。
            // 应该使浏览器能打开被点击的链接（平稳退化）。因此是否要返回一个false值以取消onclick的默认行为，应该由showImg函数决定。
            // showImg中图片切换成功，返回true，应阻止默认行为；图片切换失败，返回false，应允许默认行为。因此对showImg的返回值取反作为返回值。
            return !showImg(this);
            // 或者使用三元运算符
            // return showImg(this) ? false : true;
        }
        // 让键盘事件与onclick事件触发同样的行为。但一般浏览器都会默认触发onlick事件，且onkeypress事件很容易出问题，因此无需额外声明。
        // links[i].onkeypress = links[i].onclick;
    }
}
// 结构化程序设计 structed programming 有一条原则：函数应该只有一个入口和一个出口。
// prepareGallery中使用了多条return false语句，它们都是这个函数的出口。但如果将其改为只有一个出口，会使代码变得冗长且难以阅读。
// 作者认为，如果一个函数有多个出口，只要它们集中出现在函数的开头部分，就是可以接受的。


// ＊＊＊ 为函数绑定 window.onload ＊＊＊
// prepareGallery函数中涉及对DOM元素的检查，因此需要函数在页面全部加载完毕后执行。
// window.onload = prepareGallery;

// 当有两个函数都需要在页面加载时执行，如果逐一绑定到onload事件上，则只有最后的那个会被实际执行。
// 可以使用一个匿名函数来容纳这两个函数，再绑定到onload事件上，就都可以顺利执行。
// window.onload = function() {
//     firstFunction();
//     secondFunction();
// }

// window.onload 最佳解决方案
// 唯一参数：打算在页面加载完毕时执行的函数
function addLoadEvent(func) {
    // 现有window.onload事件处理函数的值存入变量
    var oldonload = window.onload;
    // 如果还没有绑定函数，就直接把新函数添加给它
    if (typeof window.onload != 'function') {
        window.onload = func;
        // 如果已经绑定了函数，则把新函数追加到已有指令的末尾
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
// 把页面加载完毕时要执行的函数创建为一个队列。当代码比较复杂时，这个函数尤其实用，只需要添加如下语句
// addLoadEvent(firstFunction);
// addLoadEvent(secondFunction);
// 本案例中需要执行的函数暂时只有 prepareGallery
addLoadEvent(prepareGallery);
