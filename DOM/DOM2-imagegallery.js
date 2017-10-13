// 函数目标：点击某链接时，占位符替换为该链接要显示的图片。
function showImg(targetImg) {
    // 函数的唯一参数为带有href属性的元素节点，将其href属性值存储在source变量中。
    var source = targetImg.getAttribute("href");
    // 用其它图片替换占位符img，需要改变img的src属性，通过id获取该元素节点。
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
}

