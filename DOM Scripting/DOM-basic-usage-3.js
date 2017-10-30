function displayAbbreviations() {
    if (!document.getElementsByTagName) return false;
    var abbr_list = document.getElementsByTagName("abbr");
    if (abbr_list.length < 1) return false;

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
    for (abbr_name in defs) {
        var abbr_def = defs[abbr_name];
        var dname = document.createElement("dt");
        var dname_text = document.createTextNode(abbr_name);
        dname.appendChild(dname_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(abbr_def);
        ddesc.appendChild(ddesc_text);
        d_list.appendChild(dname);
        d_list.appendChild(ddesc);
    }

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