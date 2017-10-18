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

window.onload = prepareGallery;
