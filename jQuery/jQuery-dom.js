// 获取内容，设置内容
// text() 设置或返回所选元素的文本内容
// html() 设置或返回所选元素的内容（包括 HTML 标记）
// val() 设置或返回表单字段的值（input的value属性值或在表单中输入的值）
// 获取时，括号为空；设置时，括号内为设置值。

// 获取属性，设置属性
// attr("attribute") 获取属性值
// attr("attribute", "value") 设置attribute的值为value
// 可同时设置多个属性的值
// $("#id").attr({
//    "attribute1": "value1",
//    "attribute2": "value2"
// });


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
    $("#btn4").click(function () {
        $("#test").text("The text has just been changed.");
    });
    $("#btn5").click(function () {
        alert("Attribute: " + $("#content").attr("type"));
    });
    $("#btn6").click(function () {
        $("#content").val("caroline");
    });
    $("#btn7").click(function () {
        $("#content").attr("placeholder", "please input");
    });

    // 回调函数有两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回您希望使用的字符串。
    $("#btn8").click(function () {
        $("#test1").text(function (i, origText) {
            // text 只读取文本，不读取 html 元素
            return "Old text: " + origText + " New text: Hello world! (index: " + i + ")";
        });
    });
    
    $("#btn9").click(function () {
        $("#test2").html(function (i, origText) {
            return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")";
        });
    });
});