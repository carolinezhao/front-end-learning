// text() - 设置或返回所选元素的文本内容
// html() - 设置或返回所选元素的内容（包括 HTML 标记）
// val() - 设置或返回表单字段的值

$(document).ready(function () {
    $("#btn1").click(function () {
        alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function () {
        alert("HTML: " + $("#test").html());
    });
    $("#btn3").click(function () {
        alert("Value: " + $("#content").val());
    });
});