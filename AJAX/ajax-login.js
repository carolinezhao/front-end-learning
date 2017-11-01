var xmlhttp;

function loadXMLDoc(url, cfunc) {
    let city = document.getElementById("city").firstChild.nodeValue;
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = cfunc;
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader("Content-type","application/json");
    xmlhttp.setRequestHeader("City", city);
    xmlhttp.send();
}

function getToken(email, password) {
    let url = 'http://localhost:3000/login';
    loadXMLDoc(url + "?email=" + email + "&password=" + password, function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("accept").innerHTML = xmlhttp.responseText;
        }
    });
}

function login() {
    let e = event || window.event;
    e.preventDefault(); //阻止onsubmit的默认行为——刷新页面
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    getToken(email, password);
}