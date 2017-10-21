// 动态创建标记
// 目标：添加一个p元素节点，作为 div(id="parent") 的子节点。再为p元素节点添加一个文本节点。
// 使用到三种方法：createElement，createTextNode，appendChild
// 替代html属性：document.write, innerHTML (使用方法见test.html test.js)
// 由于comment较多，故没有使用window.onload

// 用 createElement 创建元素节点。
var para = document.createElement("p");
// 新创建的p元素还不是DOM节点树的组成部分，称为文档碎片 document fragment
// 但是p元素已经有了DOM属性, 可通过以下代码验证
// window.onload = function() {
//     var para = document.createElement("p");
//     var info = "nodeName: ";
//     info += para.nodeName; // p
//     info += ", nodeType: ";
//     info += para.nodeType; // 1
//     alert(info);
// }

// 用 createTextNode 创建文本节点。
var txt = document.createTextNode("This text is created by createTextNode.");
// 与元素节点同理，可验证文本节点的DOM属性
// txt.nodeName // #text
// txt.nodeType // 3

// 用 appendChild 把新元素插入节点树，作为父元素的最后一个子元素。
var parent = document.getElementById("parent");
// 把p元素节点添加为parent的子节点。在已有子节点的最后显示。
parent.appendChild(para); 
// 把文本节点添加为p元素的子节点。
para.appendChild(txt);
// 再创建一个文本节点添加到p元素上，则无缝衔接于上一个文本节点。
var txt2 = document.createTextNode("New Text");
para.appendChild(txt2);

// appendChild 也可以用于连接尚未称为文档树的节点。即先把文本节点添加到p元素节点上，再把p节点添加到目标父节点上。
// 当子节点较多，可以使用的方案有：
// 1. 逐一创建子节点，并追加到父节点上；
// 2. 先创建所有子节点，再追加到相应的父节点上。

