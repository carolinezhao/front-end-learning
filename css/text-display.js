window.onload = function () {
    // element.scrollHeight---文章内容的实际高度   element.clientHeight---文章内容的显示高度
    // element.scrollWidth---文章内容的实际宽度   element.clientWidth ---文章内容的显示宽度
    var element = document.getElementById("content")
    if (element.scrollHeight > element.clientHeight) {
        element.style = 'overflow:hidden;'
    } else {
        // 当文本内容的实际高度小于限制高度时，不显示“展开”按钮
        document.getElementById("expand").style = "display:none"
    }
}

function more() {
    document.getElementById("content").style = 'overflow:visible; white-space:normal;'
    document.getElementById("expand").style = "display:none"
    document.getElementById("pack").style = "display:block"
}

function pack() {
    document.getElementById("content").style = 'display:block;overflow:hidden;'
    document.getElementById("expand").style = "display:block"
    document.getElementById("pack").style = "display:none"
}