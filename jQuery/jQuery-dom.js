function basicUse() {
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

    $("#btn10").click(function () {
        $("#content").attr("placeholder", function (i, origText) {
            return "[" + i + "]input sth." + origText;
        });
    })


    // 添加新的 HTML 内容
    // append() - 在被选元素的结尾插入内容
    // prepend() - 在被选元素的开头插入内容
    // after() - 在被选元素之后插入内容
    // before() - 在被选元素之前插入内容

    // 区别
    // append() 和 prepend() 是在元素内插入，比如选中了列表，是新建一个item。
    // after() 和 before() 是在元素之外插入，比如选中了列表，不是新添item，而是新建一个表。

    $("#add1").click(function () {
        $(".p1").append("<b>Append text</b>");
    });

    $("#add2").click(function () {
        $("#ol1").prepend("<li>Prepend item</li>");
    });

    $("#add3").click(function () {
        $(".p1").after("<b>insert after</b>");
    });

    $("#add4").click(function () {
        $("#ol1").before("<li>insert before</li>");
    });

    // 删除元素和内容
    // remove() - 删除被选元素（及其子元素）
    // empty() - 从被选元素中删除子元素
    $("#empty").click(function () {
        $("#div1").empty();
    });

    $("#remove1").click(function () {
        $("#div1").remove();
    });

    // 过滤被删除的元素
    // jQuery remove() 方法也可接受一个参数，允许对被删元素进行过滤。
    // 删除 class="italic" 的所有 <p> 元素：
    $("#remove2").click(function () {
        $("p").remove(".italic");
    });

    // jQuery 操作 CSS
    // addClass() - 向被选元素添加一个或多个类
    // removeClass() - 从被选元素删除一个或多个类
    // toggleClass() - 对被选元素进行添加/删除类的切换操作
    // css() - 设置或返回样式属性

    $("#addclass").click(function () {
        // 注意addClass里一定要填的是class，且不用带.
        $("a").addClass("big violet");
        $(".p1").addClass("important");
    });

}

// 易混：DOM方法 vs jQuery方法
// 通过 append() 和 prepend() 方法添加若干新元素
// 这些元素可以通过 text/HTML、jQuery 或者 JavaScript/DOM 来创建。
// 然后我们通过 append() 方法把这些新元素追加到文本中（对 prepend() 同样有效）
function appendText() {
    var txt1 = "<p>Text.</p>"; // 以 HTML 创建新元素
    var txt2 = $("<p></p>").text("Text."); // 以 jQuery 创建新元素
    var txt3 = document.createElement("p"); // 以 DOM 创建新元素
    txt3.innerHTML = "Text.";
    // 注意 $(" ") 中是 id，class，还是标签！！！
    // 追加的这三个元素本身有 p 标签，但是 append 到 #p2 的效果是添加到原有的 p 标签里。
    $("#p2").append(txt1, txt2, txt3); // 追加新元素
}

function afterLink() {
    var txt1 = "<b> I </b>"; // 以 HTML 创建新元素
    var txt2 = $("<i></i>").text("love "); // 通过 jQuery 创建新元素
    var txt3 = document.createElement("big"); // 通过 DOM 创建新元素
    txt3.innerHTML = "jQuery!";
    // after 是添加到 a 标签外
    $("a").after(txt1, txt2, txt3); // 在 img 之后插入新元素
    // append 是添加到 a 标签里，成为链接的一部分
    $("a").append(txt2);
    // 为啥 after 里不出现 txt2 了？？
}



// 易混：需要立即执行的函数 vs 事件函数
$(document).ready(function () {
    basicUse();
    // appendText(); //此情况下，刷新网页函数即执行
});