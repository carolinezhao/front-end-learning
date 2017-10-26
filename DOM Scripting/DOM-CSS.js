function exampleStyle() {
    var para = document.getElementById("example");
    // 验证style属性的类型
    // alert(para.nodeName); // P
    // alert(para.style); // [object CSSStyleDeclaration]
    // alert(typeof para.nodeName); // string
    // alert(typeof para.style); // object (style属性是一个对象)

    // 用style读取样式
    // alert(para.style.color); // grey
    // alert(para.style.fontFamily);
    
    // 用style更新样式
    para.style.color = "#dd6e6e";
    para.style.font = "30px Times, serif";
}

// 页面加载完毕后执行函数，详见DOM-imagegallery.js
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

addLoadEvent(exampleStyle);