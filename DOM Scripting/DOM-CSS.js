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


// ＊＊＊ 根据元素在节点树中的位置来设置样式 ＊＊＊
// 函数目的：找出紧跟在每个h1元素后面的元素，并把样式添加给它。
// 应用场景：当文档内有许多h1元素，其后的内容需要定期更新，逐一添加clss属性（通过CSS实现样式）就会是一种负担。
function styleHeaderSiblings() {
    if (!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("h1");
    for (var i = 0; i < headers.length; i++) {
        // 在两个标签之间（即一个元素的闭合标签之后，下一个元素的起始标签之前）有空白出现时，会有#text节点被插入到DOM中。
        // alert(headers[i].nextSibling.nodeName); // 显示 #text #text（两个h1的下一个节点都是文本节点）
        // 如果写为<h1>...</h1><h1>...</h1>，则显示为：H1 #text
        // alert(headers[i].nextSibling.nodeValue); // 显示空白，因为不是实质的文本节点。

        // 注意：这里需要的不是“下一个节点”，而是“下一个元素节点”。通过 getNextElement 函数实现。
        var elem = getNextElement(headers[i].nextSibling);
        elem.style.fontWeight = "bold";
        elem.style.color = "#20C8A3";
    }
}
// 目的：返回下一个元素节点。
function getNextElement(node) {
    if (node.nodeType === 1) {
        return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }
    return null;
}


// ＊＊＊ 根据某种条件反复设置某种样式 ＊＊＊
// 为表格隔行设置样式：当浏览器支持CSS3时使用nth-child（优先使用CSS设置样式），否则通过DOM进行设置。
// js特别擅长处理重复性任务，使用for或while循环遍历。
function stripeTables() {
    if (!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    var odd, rows;
    for (var i = 0; i < tables.length; i++) {
        // 预设odd为false。第1行，odd为false不染色，odd设为true；第2行，odd为true，染色后odd设为flase……依次循环。
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for (var j = 0; j < rows.length; j++) {
            if (odd == true) {
                rows[j].style.backgroundColor = "#ddd";
                odd = false;
            } else {
                odd = true;
            }
        }
    }
}
// 书中方法相比于以下方法有什么优势？
// function stripeTables() {
//     if (!document.getElementsByTagName) return false;
//     var tables = document.getElementsByTagName("table");
//     for (var i = 0; i < tables.length; i++) {
//         var rows = tables[i].getElementsByTagName("tr");
//         for (var j = 0; j < rows.length; j++) {
//             if (j % 2 != 0) {
//                 rows[j].style.backgroundColor = "#777";
//             }
//         }
//     }
// }


// ＊＊＊ className属性 ＊＊＊
// 用DOM设置样式时不需要直接与style属性打交道。
// element.className = "class", .class{} 是在CSS中设置的样式。
// 需要给一个元素追加新的clss时，步骤为：
// 1. 检查className属性的值是否为null；
// 2. 如果是，把新的class设置值直接赋值给className；
// 3. 如果不是，把一个空格和新的class追加。
// 以上步骤可以封装为函数 addClass
function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        var newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}


// ＊＊＊ 响应事件 ＊＊＊
// 大多数浏览器都支持对a设置:hover，对其他元素不一定支持，可以使用DOM事件进行设置。
// 当同时设置时，CSS中的 hover 会覆盖DOM中的 onmouseover 事件。
function highlightRows() {
    if (!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].onmouseover = function() {
            this.style.fontWeight = "bold";
        }
        rows[i].onmouseout = function() {
            this.style.fontWeight = "normal";
        }
    }
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
addLoadEvent(styleHeaderSiblings);
addLoadEvent(stripeTables);
addLoadEvent(highlightRows);