// 下面的代码将会造成栈溢出，如何优化？
// var list = readHugeList();
var nextListItem0 = function () {
    var item = list.pop();
    if (item) {
        // process the list item...
        nextListItem0();
    }
};

// 两种方法
// 1. 异步 (不改变原有逻辑)
var nextListItem1 = function () {
    var item = array.pop();
    if (item) {
        console.log(item);
        setTimeout(nextListItem1, 0);
    }
};
// 设置 setTimeout 后 nextListItem 函数被压入事件队列，函数可以退出，每次会清空调用栈。

// 2. 闭包
var nextListItem2 = function (list) {
    let item = list.shift();
    if (item) {
        console.log(item);
        return nextListItem2(list);
    }
};

// 局限：最后的返回值不能是函数 (结束条件)。
function autoRun(func, arg) {
    let value = func(arg);
    while (typeof value === 'function') {
        value = value(arg);
    }
    return value;
}

// autoRun(nextListItem);
// 改进闭包方法 (略)

let array = [1, 1]
for (let i = 2; i < 10; i++) {
    array[i] = array[i - 1] + array[i - 2]
}
console.log(array);

// 闭包
autoRun(nextListItem2, array.slice());
// 异步
nextListItem1();


// reference
// https://github.com/forrany/Web-Project/blob/master/%E4%BA%8C%E3%80%81JavaScript%E6%8E%92%E5%9D%91%E6%8C%87%E5%8D%97(%E4%BA%8C).md
// http://www.zuojj.com/archives/1115.html