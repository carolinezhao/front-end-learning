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