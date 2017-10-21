// 使用到的方法：getElementById, getAttribute, setAttribute
// 使用到的属性：nodeValue, firstChild

// 函数目标：点击某链接时，占位符替换为该链接要显示的图片。
function showImg(targetImg) {
    // 函数的唯一参数为带有href属性的元素节点<a>，将其href属性值存储在source变量中。
    var source = targetImg.getAttribute("href");
    // 用其它图片替换占位符img，需要改变img的src属性，通过id获取该元素节点。
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);

    // 将图片的title属性值存储在text变量中
    // 当某个图片链接被点击时，这个链接的title属性值被提取并保存到text变量中。
    var text = targetImg.getAttribute("title");
    var description = document.getElementById("description");
    // 获得id为description的p元素节点的第一个子节点－文本节点－的nodeValue属性值，并设置为变量text的值。
    description.firstChild.nodeValue = text;
}

// 改进版本：行为层js与结构层html分离
function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            showImg(this);
            return false;
        }
    }
}

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
        window.onload = function() {
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
