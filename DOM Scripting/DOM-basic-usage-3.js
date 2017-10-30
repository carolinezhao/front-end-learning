function displayAbbreviations() {
    if (!document.getElementsByTagName) return false;
    var abbr_list = document.getElementsByTagName("abbr");
    if (abbr_list.length < 1) return false;

    // 教程中使用数组方法
    var defs = new Array();
    for (var i = 0; i < abbr_list.length; i++) {
        var current_abbr = abbr_list[i];
        var abbr_def = abbr_list[i].getAttribute("title");
        var abbr_name = abbr_list[i].firstChild.nodeValue;
        // 两个变量，一个用作数组元素的下标（键），另一个用作数组元素的值。
        // defs[key] = definition;
        defs[abbr_name] = abbr_def;
    }

    var d_list = document.createElement("dl");
    // for (variable in array)
    // 第n次循环时，变量variable被赋值为数组array的第n个元素的下标值。
    for (abbr_name in defs) {
        var abbr_def = defs[abbr_name];
        var dname = document.createElement("dt");
        // 注意！abbr_name是文本！需要创建为节点！
        var dname_text = document.createTextNode(abbr_name);
        dname.appendChild(dname_text);
        var ddesc = document.createElement("dd");
        // 注意！abbr_def是文本！需要创建为节点！
        var ddesc_text = document.createTextNode(abbr_def);
        ddesc.appendChild(ddesc_text);
        d_list.appendChild(dname);
        d_list.appendChild(ddesc);
    }

    // 不使用数组方法也可以实现
    //    var d_list = document.createElement("dl");
    //     for (var i = 0; i < abbr_list.length; i++) {
    //         var current_abbr = abbr_list[i];
    //         var abbr_def = abbr_list[i].getAttribute("title");
    //         var abbr_name = abbr_list[i].firstChild.nodeValue;
    //         var dname = document.createElement("dt");
    //         var dname_text = document.createTextNode(abbr_name);
    //         dname.appendChild(dname_text);
    //         var ddesc = document.createElement("dd");
    //         var ddesc_text = document.createTextNode(abbr_def);
    //         ddesc.appendChild(ddesc_text);
    //         d_list.appendChild(dname);
    //         d_list.appendChild(ddesc);
    //     }

    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    document.getElementsByTagName("body")[0].appendChild(header);
    document.getElementsByTagName("body")[0].appendChild(d_list);
}


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

addLoadEvent(displayAbbreviations);