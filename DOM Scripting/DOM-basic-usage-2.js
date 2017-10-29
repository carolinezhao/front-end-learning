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


// 在现有元素前插入一个新元素 insertBefore()
// 语法：parentElement.insertBefore(newElement, targetElement);
// 父元素可以间接获得：targetElement.parentNode（DOM中，元素节点的父元素必为元素节点）
var hding2 = document.createElement("h2");
var txt3 = document.createTextNode("This is inserted by insertBefore.")
hding2.appendChild(txt3);
var second = document.getElementById("second");
second.parentNode.insertBefore(hding2, second);

// 在现有元素后插入一个新元素 insertAfter()
// DOM没有提供现成的方法，但是可以通过其它方法实现。
// 下一个兄弟元素 nextSibling
function insertAfter(newElement, targetElement) {
    var parent2 = targetElement.parentNode;
    // 检查目标元素是不是parent的最后一个子元素
    if (parent2.lastChild == targetElement) {
        parent2.appendChild(newElement);
    } else {
        // 新元素插入到，目标元素的下一个兄弟元素之前，即目标元素之后
        parent2.insertBefore(newElement, targetElement.nextSibling);
    } 
}

// 目标：在id为first的p元素后插入一个h3元素。
// 最初，first之后的元素是id为second的p元素，但是前面的函数在p之前又插入了一个元素h2。因此h3元素应该出现在h2之前。
var hding3 = document.createElement("h3");
var txt4 = document.createTextNode("This is inserted by insertAfter.");
hding3.appendChild(txt4);
var first = document.getElementById("first");
// 注意这里应直接调用 insertAfter，因为其内部已经定义了 parentElement.insertBefore
insertAfter(hding3, first);
