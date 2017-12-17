/*=========================================
用到的知识点
setTimeout：让某个函数在经过一段预定的时间后执行。
参数1:通常是一个字符串——要执行的函数名；
参数2:数值，以毫秒为单位设定预留时间。
通常把函数调用赋值给一个变量
variable = setTimeout("functionName()",interval);

clearTimeout：取消某个正在排队等待执行的函数。
参数：保存着某个setTimeout函数调用返回值的变量
clearTimeout(variable);

parseInt(string); 提取字符串中的数值信息，返回值是整数
parseFloat(string); 可以返回带小数点的数值（浮点数）
=========================================*/

/*=========================================
产生动画：设置预留时间
1.获得当前位置；
2.设定目标位置；
3.通过 setTimeout 在预留时间之后执行。

动画的渐变过程：时间递增量
1.获得当前位置；
2.如果已经到达目的地，则退出函数；
3.如果没有到达，则向目的地移近一点；
4.经过一段时间间隔后，从步骤1重复上述步骤。
=========================================*/

function positionMessage() {
    console.log('hello positonMessage');
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = 'absolute';
    elem.style.top = '50px';
    elem.style.left = '100px';
    // 全局变量，不使用关键字 var，意味着这个行为可以在函数以外的地方被取消。
    // 注意 setTimeout 中对函数名的引用
    movement = setTimeout("moveMessage()", 5000);
}

function moveMessage() {
    console.log('hello moveMessage');  
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    // elem.style.left = '200px'; // 使元素直接跳到目标位置
    // 将坐标字符串转换为数值，便于之后进行数值比较。50px -> 50
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == 300 && ypos == 200) {
        return true; // 如果到达位置，则退出函数。
    }
    if (xpos < 300) {
        xpos++;
    }
    if (xpos > 300) {
        xpos--;
    }
    if (ypos < 200) {
        ypos++;
    }
    if (ypos > 200) {
        ypos--;
    }
    elem.style.left = xpos + 'px';
    elem.style.top = ypos + 'px';
    movement = setTimeout("moveMessage()", 20); // 在短暂的停顿之后重复执行函数
}


// 页面加载后执行
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

addLoadEvent(positionMessage);
// addLoadEvent(moveMessage);

// clearTimeout(movement); 应该放在哪里用？？？