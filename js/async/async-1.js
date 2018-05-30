function now() {
    return 21;
}

function later() {
    // 将来执行的块
    answer = answer * 2;
    console.log(answer);
}
var answer = now();
setTimeout(later, 1000);

var a = {
    index: 1
};

console.log(a); // 某些条件下，异步处理控制台 I/O，可能打印出的是改变后的值。
a.index++;