var xmlhttp;
// 如果网站上存在多个 AJAX 任务，应该为创建 XMLHttpRequest 对象编写一个标准的函数，并为每个 AJAX 任务调用该函数（Callback 函数）。
function loadXMLDoc(url, cfunc) {
    // 检查浏览器，创建 XMLHttpRequest 对象：variable = new XMLHttpRequest();
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // onreadystatechange 是一个事件处理函数。
    // 在指定函数引用时，不要在函数后面加括号。加括号表示立即调用函数，此处只是为了把函数自身的引用（而不是函数结果）赋值给它。
    // 直接指定响应的情况见 comment-3
    xmlhttp.onreadystatechange = cfunc;
    // 向服务器发送请求，使用 open 和 send 方法，见 comment-2
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

// ajax 任务，其中调用标准函数。
function myFunction() {
    loadXMLDoc("http://localhost:3000/posts/1", function () {
        // 当 readyState 等于 4 且状态为 200 时，表示响应已就绪：
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // 将后端数据写入前端
            document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
        }
    });
}

// 服务器在向 XMLHttpRequest 对象发回响应时，该对象有许多属性可用。
// readyState 属性存有 XMLHttpRequest 的状态信息，浏览器会在不同阶段更新 readyState 的值，有5个可能得值：
// 0: 请求未初始化
// 1: 服务器连接已建立
// 2: 请求已接收
// 3: 请求处理中
// 4: 请求已完成， 且响应已就绪
// status
// 200: "OK"
// 404: 未找到页面

// 服务器响应
// responseText	获得字符串形式的响应数据。
// responseXML	获得 XML 形式的响应数据。见 comment-3



// comment-2
// open(method,url,async); 前两个参数是字符串
//      method：请求的类型，GET 或 POST；
//      url：文件在服务器上的位置；
//      async：true（异步）或 false（同步）。
// send(string);
//      string：仅用于 POST 请求。

// ＊＊＊ 关于url ＊＊＊ 
// url中的文件可以是任何类型，如 .txt 和 .xml，或者服务器脚本文件 .asp 和 .php（在传回响应之前，能够在服务器上执行任务）。
// url中的 ? 之后是参数组，以&分隔，每组参数都是由参数名和参数值组成，如 ?a=1&b=2&c=hello
// 有些字符会被转译，比如中文，标点，空格

// ＊＊＊ GET请求 ＊＊＊
//      xmlhttp.open("GET","demo_get2.asp?fname=Bill&lname=Gates",true);
//      xmlhttp.send();

// ＊＊＊ POST请求 ＊＊＊
//      xmlhttp.open("POST","demo_post.asp",true);
//      xmlhttp.send();
// 如果需要像 HTML 表单那样 POST 数据，使用 setRequestHeader() 来添加 HTTP 头。
// 然后在 send() 方法中规定希望发送的数据：
//      xmlhttp.open("POST","/ajax/demo_post2.asp",true);            
//      xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//      xmlhttp.send("fname=Bill&lname=Gates");
// POST传给后台的数据可以写在链接中 或者 send中（更常用）

// ＊＊＊ 关于请求头 ＊＊＊ 
// setRequestHeader(header,value)
// 例，页面中输入：二手房 100平，会被自动处理后传给后台
// xmlhttp.setRequestHeader("Location","Beijing");
// xmlhttp.send("type=second&area=100");

// xmlhttp.setRequestHeader("Content-type","x");
// xmlhttp.send里的内容取决于x是啥，如果x是application/json,则send中必须是下面的数据格式，即json格式（很严格）。
// "{"posts":[{"id":1,"title":"json-server","author":"typicode"}],"comments":[{"id":1,"body":"some comment","postId":1}],"profile":{"name":"typicode"}}"

// 在开发者工具 network 中可以看到很多 key:value 其他示例
// cache-control:private, max-age=0
// content-encoding:br
// content-type:text/html; charset=UTF-8



// comment-3
// 请求 books.xml 文件
// xmlhttp.onreadystatechange=function()
//   {
//   if (xmlhttp.readyState==4 && xmlhttp.status==200)
//     {
//     xmlDoc=xmlhttp.responseXML;
//     txt="";
//     x=xmlDoc.getElementsByTagName("title");
//     for (i=0;i<x.length;i++)
//       {
//       txt=txt + x[i].childNodes[0].nodeValue + "<br />";
//       }
//     document.getElementById("myDiv").innerHTML=txt;
//     }
//   }