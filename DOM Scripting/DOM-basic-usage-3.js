function displayAbbreviations() {
    if (!document.getElementsByTagName) return false;
    var abbr_list = document.getElementsByTagName("abbr");
    if (abbr_list.length < 1) return false;
    for (var i = 0; i < abbr_list.length; i++) {
        var abbr_desc = abbr_list[i].getAttribute("title");
        var abbr_name = abbr_list[i].firstChild.nodeValue;
        
        var d_list = document.createElement("dl");
        
        var d_name = document.createElement("dt");
        d_name.appendChild(abbr_name);
        var d_desc = document.createElement("dd");
        d_desc.appendChild(abbr_desc);

        d_list.appendChild(d_name);
        d_list.appendChild(d_desc);

        document.getElementsByTagName("body")[0].appendChild(d_list); 
    }

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
